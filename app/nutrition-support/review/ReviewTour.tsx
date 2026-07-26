"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const pages = [
  { id: "program", label: "01 · Program page", title: "Daily Nutrition Support", src: "/nutrition-support?tour=1" },
  { id: "questionnaire", label: "02 · Starting experience", title: "Simple Questionnaire", src: "/nutrition-support/start?tour=1" },
  { id: "options", label: "03 · Care pathways", title: "Care Options", src: "/nutrition-support/care-options?tour=1" },
];

function TourFrame({ page }: { page: (typeof pages)[number] }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1200);

  const fitFrame = useCallback(() => {
    const frame = frameRef.current;
    const body = frame?.contentDocument?.body;
    const root = frame?.contentDocument?.documentElement;
    if (!body || !root) return;
    setHeight(Math.max(body.scrollHeight, root.scrollHeight, 900));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fitFrame);
    return () => window.removeEventListener("resize", fitFrame);
  }, [fitFrame]);

  return (
    <section className="review-tour-page" id={page.id}>
      <div className="review-tour-divider"><span>{page.label}</span><strong>{page.title}</strong></div>
      <iframe ref={frameRef} src={page.src} title={`${page.title} preview`} style={{ height }} onLoad={() => { fitFrame(); window.setTimeout(fitFrame, 600); }} />
    </section>
  );
}

export default function ReviewTour() {
  return (
    <main className="review-tour">
      <header className="review-tour-header">
        <div><span>Private concept review</span><strong>Apex Daily Nutrition Support</strong></div>
        <nav aria-label="Jump to a preview page">
          {pages.map((page) => <a href={`#${page.id}`} key={page.id}>{page.title}</a>)}
        </nav>
      </header>
      {pages.map((page) => <TourFrame page={page} key={page.id} />)}
    </main>
  );
}
