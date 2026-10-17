import CaliforniaEligibility from "./CaliforniaEligibility";

export default function CaliforniaBooking({ calendar }: { calendar: string }) {
  return (
    <CaliforniaEligibility>
      <div className="consultation-calendar" aria-label="Book a New Patient Consultation">
        <aside className="consultation-booking-notice" aria-labelledby="after-booking-heading">
          <h2 id="after-booking-heading">After you submit your appointment</h2>
          <p>Check your email for your appointment confirmation, including the date and time. Check your spam folder too.</p>
          <p>If the calendar returns to the booking form, please don’t submit another appointment. If you’re unsure whether your booking went through, email <a href="mailto:apexvitality5@gmail.com">apexvitality5@gmail.com</a> and we’ll check for you.</p>
        </aside>
        <iframe src={calendar} title="Apex Vitality New Patient Consultation booking calendar" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </CaliforniaEligibility>
  );
}
