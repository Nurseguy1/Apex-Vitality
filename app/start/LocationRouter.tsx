"use client";

import Link from "next/link";
import { useState } from "react";

type CareRegion = "" | "california" | "national";

export default function LocationRouter() {
  const [region, setRegion] = useState<CareRegion>("");

  return (
    <section className="location-router" aria-labelledby="care-location-title">
      <div className="location-router-heading">
        <p className="eyebrow">Your first step</p>
        <h1 id="care-location-title">Where will you be located during your care?</h1>
        <p>
          Choose your location so we can show you the care pathway designed for
          your state. This selection does not collect or store health information.
        </p>
      </div>

      <div className="location-choice-grid" role="group" aria-label="Choose your care location">
        <button
          className={region === "california" ? "location-choice selected" : "location-choice"}
          onClick={() => setRegion("california")}
          type="button"
          aria-pressed={region === "california"}
        >
          <span>California</span>
          <strong>Start directly with Apex Vitality</strong>
          <small>Scheduling, clinician care, labs, and follow-up through the Apex pathway.</small>
        </button>
        <button
          className={region === "national" ? "location-choice selected" : "location-choice"}
          onClick={() => setRegion("national")}
          type="button"
          aria-pressed={region === "national"}
        >
          <span>Outside California</span>
          <strong>Explore the expanding national pathway</strong>
          <small>Care routed to a clinician licensed in the state where you are located.</small>
        </button>
      </div>

      <div className="location-result" aria-live="polite">
        {region === "" && (
          <p className="location-prompt">Select your location to continue.</p>
        )}

        {region === "california" && (
          <article>
            <p className="result-kicker">California care</p>
            <h2>Your Apex care pathway is ready.</h2>
            <p>
              Begin with the $59 introductory visit, or go directly to a comprehensive
              consultation if you already have recent labs.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href="/schedule">Start with a $59 visit</Link>
              <Link className="secondary-dark-button" href="/schedule/comprehensive">I already have labs</Link>
            </div>
          </article>
        )}

        {region === "national" && (
          <article>
            <p className="result-kicker">National expansion pathway</p>
            <h2>A simpler route to care is being prepared.</h2>
            <p>
              Apex is preparing a separate pathway that connects patients with clinicians
              licensed in their state. We will activate it after the clinical, pharmacy,
              record-sharing, and support workflows are confirmed in writing.
            </p>
            <div className="national-status-list" aria-label="National pathway setup status">
              <span><strong>State routing</strong>Built into the Apex experience</span>
              <span><strong>Clinical review</strong>Planned through licensed partner clinicians</span>
              <span><strong>Prescriptions &amp; delivery</strong>Activated only after partner confirmation</span>
            </div>
            <Link className="secondary-dark-button" href="/contact">Ask about national availability</Link>
          </article>
        )}
      </div>

      <p className="location-router-note">
        The patient&apos;s physical location at the time of care determines the applicable clinical pathway.
      </p>
    </section>
  );
}
