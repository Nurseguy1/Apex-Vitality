'use client';
import { useState } from 'react';

export default function ContactForm({ enabled }: { enabled: boolean }) {
  const [preferred, setPreferred] = useState('email');
  const [state, setState] = useState<'ready' | 'sending' | 'sent' | 'error'>('ready');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setState('sending');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(form)) });
      if (!response.ok) throw new Error('delivery_failed');
      setState('sent');
    } catch { setState('error'); }
  }
  if (!enabled) return <p>Email <a href="mailto:apexvitality5@gmail.com">apexvitality5@gmail.com</a> for general inquiries. Please keep medical details in your secure Charm portal.</p>;
  if (state === 'sent') return <section role="status"><h2>Thank you for reaching out.</h2><p>Your inquiry has been sent to the clinic. If you’re ready to talk about your goals, you can also book a consultation.</p><a className="primary-button" href="/book-consultation">Book a free first consultation</a></section>;
  return <form className="fm-contact-form" onSubmit={submit}>
    <label>Name<input name="name" autoComplete="name" required maxLength={100}/></label>
    <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
    <label>Phone (optional)<input name="phone" required={preferred === 'phone'} type="tel" autoComplete="tel" maxLength={30}/></label>
    <label>Preferred contact method<select name="preferred" value={preferred} onChange={event => setPreferred(event.target.value)}><option value="email">Email</option><option value="phone">Phone</option></select></label>
    <label>How can we help?<textarea name="message" required maxLength={1500} rows={5} aria-describedby="contact-privacy"/></label>
    <p id="contact-privacy">For general inquiries only. Please don’t include symptoms, medical history, lab results, or other sensitive information. Use Charm for medical messages. This form is not monitored for emergencies.</p>
    <div className="fm-contact-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <p>By submitting, you ask Apex Vitality to respond using the contact information you provide. <a href="/privacy">Privacy policy</a></p>
    {state === 'error' && <p role="alert">Your inquiry could not be sent. Please try again or email apexvitality5@gmail.com.</p>}
    <button className="primary-button" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send inquiry'}</button>
  </form>;
}
