"use client";

import { useState } from "react";

export default function CaliforniaBooking({ calendar }: { calendar: string }) {
  const [location, setLocation] = useState("");
  return (
    <section className="consultation-booking-intro" aria-label="California medical appointment eligibility">
      <h2>Where will you be during your appointment?</h2>
      <p>Men’s health medical visits are available to patients physically located in California at the time of care.</p>
      <label className="checkout-state-field">
        <span>Your location during this visit</span>
        <select value={location} onChange={(event) => setLocation(event.target.value)}>
          <option value="">Select your location</option>
          <option value="CA">California</option>
          <option value="OTHER">Outside California</option>
        </select>
      </label>
      {location === "OTHER" && <p role="status">We can schedule your medical visit when you will be physically located in California. If you already paid, contact Apex Vitality for help with your appointment.</p>}
      {location === "CA" && <div className="consultation-calendar" aria-label="Book a New Patient Consultation">
        <iframe src={calendar} title="Apex Vitality New Patient Consultation booking calendar" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
      </div>}
    </section>
  );
}
