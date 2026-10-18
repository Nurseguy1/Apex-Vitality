import CaliforniaEligibility from "./CaliforniaEligibility";

export default function CaliforniaBooking({ calendar }: { calendar: string }) {
  return (
    <CaliforniaEligibility>
      <div className="consultation-calendar" aria-label="Book a New Patient Consultation">
        <iframe src={calendar} title="Apex Vitality New Patient Consultation booking calendar" loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </CaliforniaEligibility>
  );
}
