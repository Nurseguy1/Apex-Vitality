import type { Metadata } from "next";
import html from "../services-content";
export const metadata: Metadata = {"title": "Functional Wellness Plans | Apex Vitality", "alternates": {"canonical": "https://www.goapexvitality.com/functional-medicine/services"}};
export default function Page(){return <div dangerouslySetInnerHTML={{__html:html}}/>;}
