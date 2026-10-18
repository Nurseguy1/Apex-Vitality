import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(new URL('../app/lib/stripe-checkout.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { getVerifiedMembershipCheckout: verify } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const originalFetch = globalThis.fetch;
const originalSecret = process.env.STRIPE_SECRET_KEY;
afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalSecret === undefined) delete process.env.STRIPE_SECRET_KEY;
  else process.env.STRIPE_SECRET_KEY = originalSecret;
});
const product = 'prod_medical';
function fixture({ session = {}, items = {}, subscription = {} } = {}) {
  process.env.STRIPE_SECRET_KEY = 'sk_live_testfixture';
  const current = { status: 'active', livemode: true, latest_invoice: { status: 'paid' }, items: { data: [{ price: { product }, current_period_end: Date.now() / 1000 + 3600 }] }, ...subscription };
  globalThis.fetch = async (url) => {
    if (url.includes('/subscriptions/')) return Response.json(current);
    if (url.includes('/line_items')) return Response.json({ data: [{ description: 'Apex Treatment Membership', price: { product } }], ...items });
    return Response.json({ status: 'complete', payment_status: 'paid', mode: 'subscription', subscription: 'sub_fixture', livemode: true, ...session });
  };
}
test('paid active medical membership opens booking', async () => {
  fixture(); assert.equal((await verify('cs_live_fixture', [product]))?.membershipProduct, product);
});
for (const status of ['canceled', 'past_due', 'unpaid', 'trialing', 'incomplete', 'paused']) {
  test(`${status} subscription does not open booking using an old paid checkout`, async () => {
    fixture({ subscription: { status } }); assert.equal(await verify('cs_live_fixture', [product]), null);
  });
}
for (const payment_status of ['unpaid', 'no_payment_required']) {
  test(`${payment_status} checkout does not open booking`, async () => {
    fixture({ session: { payment_status } }); assert.equal(await verify('cs_live_fixture', [product]), null);
  });
}
test('matching description on an unrelated product is rejected', async () => {
  fixture({ items: { data: [{ description: 'Apex Treatment Membership', price: { product: 'prod_coaching' } }] } });
  assert.equal(await verify('cs_live_fixture', [product]), null);
});
test('changed subscription product is rejected', async () => {
  fixture({ subscription: { items: { data: [{ price: { product: 'prod_other' }, current_period_end: Date.now() / 1000 + 3600 }] } } });
  assert.equal(await verify('cs_live_fixture', [product]), null);
});
test('test-mode checkout cannot unlock production booking', async () => {
  fixture({ session: { livemode: false } }); assert.equal(await verify('cs_test_fixture', [product]), null);
});
test('unpaid latest invoice and expired period are rejected', async () => {
  fixture({ subscription: { latest_invoice: { status: 'open' } } }); assert.equal(await verify('cs_live_fixture', [product]), null);
  fixture({ subscription: { items: { data: [{ price: { product }, current_period_end: 1 }] } } }); assert.equal(await verify('cs_live_fixture', [product]), null);
});
test('Stripe outage fails closed', async () => {
  fixture(); globalThis.fetch = async () => { throw new Error('offline'); };
  assert.equal(await verify('cs_live_fixture', [product]), null);
});
test('missing receipt does not contact Stripe', async () => {
  fixture(); globalThis.fetch = async () => { assert.fail('unexpected request'); };
  assert.equal(await verify('', [product]), null);
});
