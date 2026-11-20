import type { Metadata } from "next";
import html from "./home-content";
export const metadata: Metadata = {"title": "Functional Medicine for Women in California | Apex Vitality", "alternates": {"canonical": "https://www.goapexvitality.com/functional-medicine"}};
export default function Page(){return <div dangerouslySetInnerHTML={{__html:html}}/>;}
