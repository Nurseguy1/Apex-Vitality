"use client";

import { useState, type ReactNode } from "react";

export default function CaliforniaEligibility({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState("");
  return (
    <div className="consultation-booking-intro" aria-label="California eligibility">
      <h2>Will you be in California during your appointments?</h2>
      <p>Both foundational health and lifestyle coaching and men’s health care are available to people physically located in California during their appointments.</p>
      <label className="checkout-state-field">
        <span>Your location during appointments</span>
        <select value={location} onChange={(event) => setLocation(event.target.value)}>
          <option value="">Select your location</option>
          <option value="CA">California</option>
          <option value="OTHER">Outside California</option>
        </select>
      </label>
      {location === "OTHER" && <p role="status">Apex Vitality currently serves patients and clients located in California.</p>}
      {location === "CA" && children}
    </div>
  );
}
