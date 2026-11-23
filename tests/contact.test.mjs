import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('../app/api/contact/route.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText;
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
afterEach(() => { globalThis.fetch = originalFetch; process.env = { ...originalEnv }; });
function setup() { Object.assign(process.env, { CONTACT_FORM_ENABLED: 'true', RESEND_API_KEY: 'test-key', CONTACT_FROM_EMAIL: 'Apex <website@example.com>', CONTACT_TO_EMAIL: 'clinic@example.com' }); }
function request(body = {}, origin = 'https://www.goapexvitality.com', ip = 'test') { return new Request('https://www.goapexvitality.com/api/contact', { method: 'POST', headers: { origin, 'content-type': 'application/json', 'x-vercel-forwarded-for': ip }, body: JSON.stringify({ name: 'Form test', email: 'visitor@example.com', phone: '', preferred: 'email', message: 'Test inquiry', website: '', ...body }) }); }
test('disabled form never attempts delivery', async () => { delete process.env.CONTACT_FORM_ENABLED; globalThis.fetch = () => assert.fail('should not send'); assert.equal((await POST(request())).status, 503); });
test('foreign origin cannot send', async () => { setup(); globalThis.fetch = () => assert.fail('should not send'); assert.equal((await POST(request({}, 'https://other.example'))).status, 403); });
test('invalid phone preference and email header injection are rejected', async () => { setup(); globalThis.fetch = () => assert.fail('should not send'); for (const fields of [{ preferred: 'phone' }, { email: 'x@example.com\r\nBcc: other@example.com' }]) assert.equal((await POST(request(fields))).status, 400); });
test('honeypot never triggers an email', async () => { setup(); globalThis.fetch = () => assert.fail('should not send'); assert.equal((await POST(request({ website: 'spam' }))).status, 200); });
test('delivery uses fixed clinic recipient and visitor reply-to', async () => { setup(); globalThis.fetch = async (url, init) => { assert.equal(url, 'https://api.resend.com/emails'); const mail = JSON.parse(init.body); assert.deepEqual(mail.to, ['clinic@example.com']); assert.equal(mail.reply_to, 'visitor@example.com'); assert.ok(mail.text.includes('Test inquiry')); return Response.json({ id: 'test' }); }; assert.equal((await POST(request({}, undefined, 'success'))).status, 200); });
test('provider failure does not falsely confirm success', async () => { setup(); globalThis.fetch = async () => new Response('', { status: 500 }); assert.equal((await POST(request({}, undefined, 'failure'))).status, 502); });
test('repeated submissions are throttled before another delivery', async () => { setup(); let calls = 0; globalThis.fetch = async () => { calls++; return Response.json({ id: 'test' }); }; for (let i = 0; i < 3; i++) assert.equal((await POST(request({}, undefined, 'rate-test'))).status, 200); assert.equal((await POST(request({}, undefined, 'rate-test'))).status, 429); assert.equal(calls, 3); });
