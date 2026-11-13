import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { lookupMembership } from '../scripts/corporate-membership-lookup.mjs';
const base = { customer: 'cus_fixture', email: ' MEMBER@example.com ', secret: 'fixture-only-secret-at-least-32-characters', stripeKey: 'sk_test_fixture' };
const ref = createHmac('sha256', base.secret).update('cus_fixture\nmember@example.com').digest('hex');
test('matches normalized email with GET only and no patient identity transmitted', async () => {
  let calls = 0;
  const result = await lookupMembership({ ...base, fetcher: async (url, options) => {
    calls++; assert.equal(options.method, 'GET'); assert.ok(!url.includes('member')); assert.equal(options.body, undefined);
    return Response.json({ data: [{ id: 'sub_match', status: 'active', metadata: { apex_corporate_enrollment: ref } }], has_more: false });
  }});
  assert.equal(calls, 1); assert.deepEqual(result.subscriptions, [{ id: 'sub_match', status: 'active' }]);
});
test('searches subsequent pages without creating a subscription', async () => {
  let calls = 0;
  const result = await lookupMembership({ ...base, fetcher: async (url, options) => {
    assert.equal(options.method, 'GET'); calls++;
    return Response.json(calls === 1 ? { data: [{ id: 'sub_other' }], has_more: true } : { data: [{ id: 'sub_found', status: 'canceled', metadata: { apex_corporate_enrollment: ref } }], has_more: false });
  }});
  assert.equal(calls, 2); assert.equal(result.subscriptions[0].status, 'canceled');
});
test('missing identity returns no match; invalid configuration sends nothing', async () => {
  const result = await lookupMembership({ ...base, fetcher: async () => Response.json({ data: [], has_more: false }) });
  assert.deepEqual(result.subscriptions, []);
  await assert.rejects(lookupMembership({ ...base, secret: '', fetcher: () => { throw new Error('must not call'); } }), /configuration/);
});
