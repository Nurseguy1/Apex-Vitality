import type { Metadata } from 'next';
import ContactForm from './ContactForm';
export const metadata: Metadata = { title: 'Contact Functional Medicine | Apex Vitality' };
export const dynamic = 'force-dynamic';
export default function Page() {
  const enabled = process.env.CONTACT_FORM_ENABLED === 'true' && Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL);
  return <main className="fm-embed-page"><h1>We’re here to listen.</h1><p>Have a question about membership or getting started? Contact Apex Vitality below, or <a href="/book-consultation">book a free first consultation</a> to discuss your goals.</p><ContactForm enabled={enabled}/></main>;
}
