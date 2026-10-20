import { createHmac } from 'node:crypto';
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('../app/lib/corporate-billing.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText;
const { billCorporateAppointment: enroll, corporateBillingEnabled: enabled, verifyCorporateEvent: verifyEvent } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const originalFetch = globalThis.fetch;
const names = ['STRIPE_SECRET_KEY','CORPORATE_BILLING_MODE','CORPORATE_LIVE_BILLING_APPROVED','CORPORATE_ENROLLMENT_HMAC_SECRET','CORPORATE_SPONSORS_JSON','CORPORATE_UNIT_AMOUNT','CORPORATE_STRIPE_PRODUCT_ID','CORPORATE_BOOKING_EVENT_SECRET'];
const saved = Object.fromEntries(names.map(name => [name, process.env[name]]));
afterEach(() => { globalThis.fetch = originalFetch; for (const name of names) { if (saved[name] === undefined) delete process.env[name]; else process.env[name] = saved[name]; } });
const input = { company: 'Example LLC', email: 'client@example.com', appointmentId: 'appointment_fixture', confirmed: true };
function fixture(options = {}) {
  Object.assign(process.env, { STRIPE_SECRET_KEY: 'sk_test_fixture', CORPORATE_BILLING_MODE: 'test', CORPORATE_ENROLLMENT_HMAC_SECRET: 'test-only-stable-secret-at-least-32-characters', CORPORATE_UNIT_AMOUNT: '19900', CORPORATE_STRIPE_PRODUCT_ID: 'prod_corporate', CORPORATE_SPONSORS_JSON: JSON.stringify([{ name: 'Example LLC', customer: 'cus_sponsor', price: 'price_corporate', liveAuthorized: false }]) });
  const created = [];
  const requests = [];
  globalThis.fetch = async (url, init) => {
    requests.push({ url, init });
    if (url.includes('/customers/')) return Response.json({ id: 'cus_sponsor', livemode: false, invoice_settings: { default_payment_method: 'pm_company' }, ...options.customer });
    if (url.includes('/prices/')) return Response.json({ id: 'price_corporate', active: true, livemode: false, unit_amount: 19900, currency: 'usd', type: 'recurring', recurring: { interval: 'month', interval_count: 1 }, product: 'prod_corporate', ...options.price });
    if (init.method === 'POST') {
      const data = Object.fromEntries(init.body);
      const sub = { id: 'sub_enrolled', status: options.status || 'active', metadata: { apex_corporate_enrollment: data['metadata[apex_corporate_enrollment]'] } };
      created.push(sub); return Response.json(sub);
    }
    return Response.json({ data: created, has_more: false });
  };
  return { created, requests };
}
test('confirmed appointment creates one monthly subscription on the sponsor, with no patient identifiers in Stripe', async () => {
  const state = fixture(); const result = await enroll(input);
  assert.equal(result.billing, 'active'); assert.equal(result.test, true);
  const post = state.requests.find(r => r.init.method === 'POST');
  const body = Object.fromEntries(post.init.body);
  assert.equal(body.customer, 'cus_sponsor'); assert.equal(body['items[0][price]'], 'price_corporate');
  assert.equal(body['items[0][quantity]'], '1'); assert.equal(body.collection_method, 'charge_automatically');
  assert.equal(body.payment_behavior, 'allow_incomplete'); assert.equal(body.billing_cycle_anchor, undefined);
  assert.ok(!post.init.body.toString().includes('client')); assert.ok(!post.init.body.toString().includes('example.com'));
});
test('retry with normalized email returns existing subscription without another charge', async () => {
  const state = fixture(); const first = await enroll(input);
  const second = await enroll({ ...input, email: ' CLIENT@EXAMPLE.COM ', company: 'EXAMPLE, LLC' });
  assert.equal(first.reference, second.reference); assert.equal(state.created.length, 1);
});
test('duplicate lookup paginates and includes canceled history', async () => {
  const state = fixture(); await enroll(input); const existing = state.created[0];
  const fetchBefore = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    if (url.includes('subscriptions?')) return Response.json(url.includes('starting_after') ? { data: [existing], has_more: false } : { data: [{ id: 'sub_other', status: 'active' }], has_more: true });
    return fetchBefore(url, init);
  };
  await enroll(input); assert.equal(state.created.length, 1);
  existing.status = 'canceled'; await assert.rejects(enroll(input), e => e.code === 'contact_apex');
});
test('same registration always uses the same opaque Stripe idempotency key', async () => {
  const state = fixture(); await enroll(input); const first = state.requests.find(r => r.init.method === 'POST');
  state.created.length = 0; await enroll(input);
  const posts = state.requests.filter(r => r.init.method === 'POST');
  assert.equal(first.init.headers['Idempotency-Key'], posts[1].init.headers['Idempotency-Key']);
  assert.ok(!first.init.headers['Idempotency-Key'].includes(input.email));
});
test('different clients get different enrollment references and subscriptions', async () => {
  const state = fixture(); const first = await enroll(input); const second = await enroll({ ...input, email: 'second@example.com' });
  assert.notEqual(first.reference, second.reference); assert.equal(state.created.length, 2);
});
for (const inputOverride of [{ confirmed: false }, { email: 'invalid' }, { company: 'Unknown LLC' }]) {
  test(`invalid or unmapped enrollment cannot create a charge ${JSON.stringify(inputOverride)}`, async () => {
    const state = fixture(); await assert.rejects(enroll({ ...input, ...inputOverride })); assert.equal(state.created.length, 0);
  });
}
for (const price of [{ unit_amount: 6900 }, { currency: 'eur' }, { active: false }, { recurring: { interval: 'year', interval_count: 1 } }, { product: 'prod_unrelated' }, { livemode: true }]) {
  test(`incorrect price fails closed ${JSON.stringify(price)}`, async () => {
    const state = fixture({ price }); await assert.rejects(enroll(input), e => e.code === 'company_not_ready'); assert.equal(state.created.length, 0);
  });
}
test('company without a default payment method cannot start subscriptions', async () => {
  const state = fixture({ customer: { invoice_settings: {} } }); await assert.rejects(enroll(input)); assert.equal(state.created.length, 0);
});
test('live mode needs both owner activation and specific sponsor authorization', async () => {
  const state = fixture(); process.env.STRIPE_SECRET_KEY = 'sk_live_fixture'; process.env.CORPORATE_BILLING_MODE = 'live';
  assert.equal(enabled(), false); await assert.rejects(enroll(input)); assert.equal(state.requests.length, 0);
  process.env.CORPORATE_LIVE_BILLING_APPROVED = 'true'; await assert.rejects(enroll(input), e => e.code === 'company_not_ready'); assert.equal(state.created.length, 0);
});
test('disabled configuration makes no Stripe requests', async () => {
  const state = fixture(); delete process.env.CORPORATE_BILLING_MODE;
  await assert.rejects(enroll(input), e => e.code === 'unavailable'); assert.equal(state.requests.length, 0);
});
test('billing attention does not claim payment succeeded', async () => {
  fixture({ status: 'incomplete' }); const result = await enroll(input); assert.equal(result.billing, 'needs_attention');
});
test('Stripe outage is retryable, without exposing Stripe errors', async () => {
  fixture(); globalThis.fetch = async () => { throw new Error('private secret detail'); };
  await assert.rejects(enroll(input), e => e.code === 'billing_unavailable' && !e.message.includes('private'));
});

test('calendar loading or missing appointment identifier cannot charge', async () => {
  const state = fixture();
  await assert.rejects(enroll({ ...input, appointmentId: '' }));
  assert.equal(state.created.length, 0);
});
test('another appointment for the same client does not create a second subscription', async () => {
  const state = fixture(); await enroll(input);
  await enroll({ ...input, appointmentId: 'appointment_second' });
  assert.equal(state.created.length, 1);
});

test('booking events require a valid recent signature over the exact body', () => {
  process.env.CORPORATE_BOOKING_EVENT_SECRET = 'test-event-secret-at-least-32-characters';
  const raw = '{"type":"corporate.appointment.confirmed"}';
  const now = Date.now(); const timestamp = String(Math.floor(now / 1000));
  const sign = value => createHmac('sha256', process.env.CORPORATE_BOOKING_EVENT_SECRET).update(`${timestamp}.${value}`).digest('hex');
  assert.equal(verifyEvent(raw, timestamp, sign(raw), now), true);
  assert.equal(verifyEvent(raw + ' ', timestamp, sign(raw), now), false);
  assert.equal(verifyEvent(raw, timestamp, sign(raw), now + 301000), false);
  assert.equal(verifyEvent(raw, timestamp, 'bad', now), false);
  assert.equal(verifyEvent(raw, null, null, now), false);
});

const routeSource = await readFile(new URL('../app/api/integrations/corporate-appointments/route.ts', import.meta.url), 'utf8');
const libraryUrl = `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`;
const routeJs = ts.transpileModule(routeSource, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText.replace('"../../../lib/corporate-billing"', JSON.stringify(libraryUrl));
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(routeJs).toString('base64')}`);
test('HTTP receiver rejects unsigned and oversized requests without contacting Stripe', async () => {
  const state = fixture();
  assert.equal((await POST(new Request('https://example.test/api', { method: 'POST', body: '{}' }))).status, 401);
  assert.equal((await POST(new Request('https://example.test/api', { method: 'POST', body: 'x'.repeat(4097) }))).status, 413);
  assert.equal(state.requests.length, 0);
});
test('HTTP receiver accepts a verified appointment and returns the opaque result', async () => {
  const state = fixture(); process.env.CORPORATE_BOOKING_EVENT_SECRET = 'test-event-secret-at-least-32-characters';
  const raw = JSON.stringify({ type: 'corporate.appointment.confirmed', ...input });
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac('sha256', process.env.CORPORATE_BOOKING_EVENT_SECRET).update(`${timestamp}.${raw}`).digest('hex');
  const response = await POST(new Request('https://example.test/api', { method: 'POST', body: raw, headers: { 'x-apex-timestamp': timestamp, 'x-apex-signature': signature } }));
  assert.equal(response.status, 200); assert.equal((await response.json()).billing, 'active'); assert.equal(state.created.length, 1);
});
