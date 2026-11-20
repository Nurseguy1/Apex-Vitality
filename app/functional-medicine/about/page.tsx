import type { Metadata } from "next";
import html from "../about-content";
export const metadata: Metadata = {"title": "Our Story | Functional Medicine | Apex Vitality", "alternates": {"canonical": "https://www.goapexvitality.com/functional-medicine/about"}};
export default function Page(){return <div dangerouslySetInnerHTML={{__html:html}}/>;}
