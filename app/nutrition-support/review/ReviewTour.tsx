"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const pages = [
  { id: "program", title: "Daily Nutrition Support", src: "/nutrition-support?tour=1", header: true, footer: false },
  { id: "questionnaire", title: "Simple Questionnaire", src: "/nutrition-support/start?tour=1", header: false, footer: false },
  { id: "options", title: "Care Options", src: "/nutrition-support/care-options?tour=1", header: false, footer: true },
];

function TourFrame({ page }: { page: (typeof pages)[number] }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1200);

  const fitFrame = useCallback(() => {
    const frame = frameRef.current;
    const body = frame?.contentDocument?.body;
    const root = frame?.contentDocument?.documentElement;
    if (!body || !root) return;
    const header = frame?.contentDocument?.querySelector<HTMLElement>(".site-header");
    const footer = frame?.contentDocument?.querySelector<HTMLElement>(".site-footer");
    if (header && !page.header) header.style.display = "none";
    if (footer && !page.footer) footer.style.display = "none";
    body.style.overflow = "hidden";
    setHeight(Math.max(body.scrollHeight, root.scrollHeight, 900));
  }, [page.footer, page.header]);

  useEffect(() => {
    window.addEventListener("resize", fitFrame);
    return () => window.removeEventListener("resize", fitFrame);
  }, [fitFrame]);

  return (
    <section className="review-tour-page" id={page.id}>
      <iframe ref={frameRef} src={page.src} title={`${page.title} preview`} style={{ height }} onLoad={() => { fitFrame(); window.setTimeout(fitFrame, 600); }} />
    </section>
  );
}

export default function ReviewTour() {
  return (
    <main className="review-tour">
      {pages.map((page) => <TourFrame page={page} key={page.id} />)}
    </main>
  );
}
