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
        <h1 id="care-location-title">Where are you located?</h1>
        <p>Choose your location to see your available care options.</p>
      </div>

      <div className="location-choice-grid" role="group" aria-label="Choose your care location">
        <button
          className={region === "california" ? "location-choice selected" : "location-choice"}
          onClick={() => setRegion("california")}
          type="button"
          aria-pressed={region === "california"}
        >
          <span>California</span>
          <strong>Start your Apex care journey</strong>
          <small>Choose your care and begin online.</small>
        </button>
        <button
          className={region === "national" ? "location-choice selected" : "location-choice"}
          onClick={() => setRegion("national")}
          type="button"
          aria-pressed={region === "national"}
        >
          <span>Outside California</span>
          <strong>Explore Apex care options</strong>
          <small>Simple online care designed around your goals.</small>
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
            <p className="result-kicker">Online care</p>
            <h2>Your next step starts here.</h2>
            <p>Choose your program, answer a few questions, and connect with a qualified medical clinician.</p>
            <div className="national-status-list" aria-label="Apex care experience">
              <span><strong>Choose your program</strong>Start with the goals that matter to you</span>
              <span><strong>Connect online</strong>Meet with a qualified medical clinician</span>
              <span><strong>Delivered to you</strong>Medication arrives at your door</span>
            </div>
            <Link className="primary-button" href="/memberships">Explore care options</Link>
          </article>
        )}
      </div>

      <p className="location-router-note">Care options vary by location.</p>
    </section>
  );
}
