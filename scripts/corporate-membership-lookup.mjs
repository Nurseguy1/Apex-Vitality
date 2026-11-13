import { createHmac } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createInterface } from 'node:readline/promises';

// Staff-only local tool. Never expose as a public route or include patient input in logs.
export async function lookupMembership({ customer, email, secret, stripeKey, fetcher = fetch }) {
  if (!/^cus_[A-Za-z0-9]+$/.test(customer) || !/^sk_(live|test)_/.test(stripeKey || '') || (secret?.length || 0) < 32)
    throw new Error('Production billing configuration is required. No request was sent.');
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) throw new Error('Enter a valid enrollment email.');
  const reference = createHmac('sha256', secret).update(`${customer}\n${normalized}`).digest('hex');
  let after = '';
  for (;;) {
    const query = new URLSearchParams({ customer, status: 'all', limit: '100', ...(after ? { starting_after: after } : {}) });
    const response = await fetcher(`https://api.stripe.com/v1/subscriptions?${query}`, {
      method: 'GET', headers: { Authorization: `Bearer ${stripeKey}` }, signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error('Stripe lookup failed. No billing changes were made.');
    const page = await response.json();
    if (!Array.isArray(page.data)) throw new Error('Unexpected Stripe response.');
    const matches = page.data.filter(s => s.metadata?.apex_corporate_enrollment === reference);
    if (matches.length) return { reference: reference.slice(0, 16), subscriptions: matches.map(s => ({ id: s.id, status: s.status })) };
    if (!page.has_more) return { reference: reference.slice(0, 16), subscriptions: [] };
    const next = page.data.at(-1)?.id;
    if (!next || next === after) throw new Error('Stripe pagination failed.');
    after = next;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const company = (await rl.question('Company name: ')).trim();
    const normalize = v => v.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
    const sponsors = JSON.parse(process.env.CORPORATE_SPONSORS_JSON || '[]').filter(s => [s.name, ...(s.aliases || [])].some(n => normalize(n) === normalize(company)));
    if (sponsors.length !== 1) throw new Error('Company is not uniquely configured.');
    const email = await rl.question('Enrollment email (kept local): ');
    const result = await lookupMembership({ customer: sponsors[0].customer, email, secret: process.env.CORPORATE_ENROLLMENT_HMAC_SECRET, stripeKey: process.env.STRIPE_SECRET_KEY });
    console.log(JSON.stringify(result, null, 2));
    console.log('Active is subscription status, not independent proof that the latest invoice was paid. Verify payment in Stripe.');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
  finally { rl.close(); }
}
