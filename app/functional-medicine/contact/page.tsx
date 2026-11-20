import type { Metadata } from 'next';
export const metadata:Metadata={title:'Contact Functional Medicine | Apex Vitality'};
const form='https://api.leadconnectorhq.com/widget/form/bMOxggWHwlAfHrXURGLe';
export default function Page(){return <main className="fm-embed-page"><h1>We’re here to listen.</h1><p>Get in touch with the Apex Vitality functional wellness team.</p><a className="fm-direct" href={form} target="_blank" rel="noopener noreferrer">Open the contact form in a new window</a><iframe src={form} title="Apex Vitality functional wellness contact form"/></main>;}
