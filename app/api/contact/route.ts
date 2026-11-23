import { createHash } from 'node:crypto';
export const runtime = 'nodejs';
// Best-effort instance-local throttling supplements the honeypot and origin check.
// Do not retain contact details or raw IP addresses in this cache or logs.
const attempts = new Map<string, { count: number; expires: number }>();
const headers = { 'Cache-Control': 'no-store' };
export async function POST(request: Request) {
  if (request.headers.get('origin') !== (process.env.CONTACT_SITE_ORIGIN || 'https://www.goapexvitality.com')) return Response.json({ error: 'invalid_request' }, { status: 403, headers });
  if (process.env.CONTACT_FORM_ENABLED !== 'true' || !process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) return Response.json({ error: 'unavailable' }, { status: 503, headers });
  if (!request.headers.get('content-type')?.startsWith('application/json')) return Response.json({ error: 'invalid_request' }, { status: 415, headers });
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ error: 'invalid_request' }, { status: 400, headers });
  const chunks: Uint8Array[] = []; let size = 0;
  for (;;) { const { value, done } = await reader.read(); if (done) break; size += value.length; if (size > 8192) { await reader.cancel(); return Response.json({ error: 'too_large' }, { status: 413, headers }); } chunks.push(value); }
  try {
    const input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (input.website) return Response.json({ sent: true }, { headers });
    const valid = (key: string, max: number) => typeof input[key] === 'string' && input[key].trim().length > 0 && input[key].length <= max;
    if (!valid('name', 100) || !valid('email', 254) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email) || /[\r\n]/.test(input.email) || !valid('message', 1500) || typeof input.phone !== 'string' || input.phone.length > 30 || !['email', 'phone'].includes(input.preferred) || (input.preferred === 'phone' && !input.phone.trim())) return Response.json({ error: 'invalid_fields' }, { status: 400, headers });
    const ip = request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const bucket = createHash('sha256').update(ip).digest('hex');
    const now = Date.now();
    for (const [key, entry] of attempts) if (entry.expires <= now) attempts.delete(key);
    const entry = attempts.get(bucket) || { count: 0, expires: now + 15 * 60 * 1000 };
    if (entry.count >= 3 || attempts.size >= 10000) return Response.json({ error: 'try_later' }, { status: 429, headers });
    entry.count += 1; attempts.set(bucket, entry);
    const response = await fetch('https://api.resend.com/emails', { method: 'POST', signal: AbortSignal.timeout(10000), headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: input.email, subject: 'Apex Vitality website inquiry', text: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone || 'Not provided'}\nPreferred contact: ${input.preferred}\n\n${input.message}` }) });
    if (!response.ok) return Response.json({ error: 'delivery_failed' }, { status: 502, headers });
    return Response.json({ sent: true }, { headers });
  } catch { return Response.json({ error: 'delivery_failed' }, { status: 502, headers }); }
}
