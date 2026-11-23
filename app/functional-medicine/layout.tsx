import Link from 'next/link';
import { practiceContact } from '../lib/compliance';
import './functional-medicine.css';
export default function FunctionalMedicineLayout({children}:{children:React.ReactNode}){
return <div className="functional-medicine-site">
<header className="fm-nav"><Link className="fm-brand" href="/">AV<span>APEX VITALITY</span></Link><nav aria-label="Functional medicine navigation"><Link href="/functional-medicine">Home</Link><Link href="/functional-medicine/about">About</Link><Link href="/functional-medicine/services">Services</Link><Link href="/functional-medicine/contact">Contact</Link><a href="https://members.goapexvitality.com/">Community</a><Link href="/">Men’s Health</Link></nav><Link className="fm-call" href="/functional-medicine/book-a-call">Book a Call</Link></header>
{children}
<footer className="fm-footer"><div><p className="fm-telehealth-notice">Apex Vitality is a telehealth-only clinic.</p><address className="footer-mailing-address">Mailing address<br />{practiceContact.legalName}<br />{practiceContact.addressLine1}<br />{practiceContact.cityStateZip}</address></div><Link className="fm-brand" href="/">AV<span>APEX VITALITY</span></Link><nav aria-label="Functional medicine footer"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><Link href="/functional-medicine/contact">Contact</Link><Link href="/">Men’s Health</Link></nav></footer></div>;
}
