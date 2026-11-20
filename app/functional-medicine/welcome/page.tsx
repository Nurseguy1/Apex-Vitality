import type {Metadata} from 'next';
import Link from 'next/link';
import {getVerifiedCheckout} from '../../lib/stripe-checkout';
import {functionalMemberships} from '../../lib/functional-memberships';
export const metadata:Metadata={title:'Membership Confirmation | Apex Vitality',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{session_id?:string}>}){
 const q=await searchParams;const paid=await getVerifiedCheckout(q.session_id||'');
 const tier=[...Object.keys(functionalMemberships), 'signature', 'gold', 'platinum'].find(t=>paid?.products.includes(`apex_fm_${t}_monthly_v1`));
 const confirmed=paid?.mode==='subscription'&&tier;
 return <main className="fm-embed-page"><h1>{confirmed?'Thank you for joining Apex.':'Confirm your membership.'}</h1>{confirmed?<><p>Your first membership payment is confirmed. Your Stripe receipt will provide payment details.</p><p>Contact our team to arrange your plan onboarding and community access.</p><p><a className="fm-call" href="mailto:apexvitality5@gmail.com">Contact Apex for onboarding</a></p><p><Link href="/functional-medicine/book-a-call">Book a call with the team</Link></p></>:<p>We could not confirm a completed payment from this link. If you already paid, contact <a href="mailto:apexvitality5@gmail.com">apexvitality5@gmail.com</a> before paying again.</p>}<Link href="/functional-medicine">Return to functional medicine</Link></main>;
}
