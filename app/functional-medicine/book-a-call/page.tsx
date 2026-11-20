import type { Metadata } from 'next';
export const metadata:Metadata={title:'Book a Functional Medicine Call | Apex Vitality'};
const calendar='https://api.leadconnectorhq.com/widget/booking/r0V2ASEluEoy7my5HUMI';
export default function Page(){return <main className="fm-embed-page"><h1>Let’s make time for you.</h1><p>Choose a time for your functional wellness discovery call with Apex Vitality.</p><a className="fm-direct" href={calendar} target="_blank" rel="noopener noreferrer">Open the calendar in a new window</a><iframe src={calendar} title="Functional wellness discovery call calendar" allow="payment"/></main>;}
