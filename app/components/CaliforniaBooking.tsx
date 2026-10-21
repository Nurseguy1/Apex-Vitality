import BookingCalendar from "./BookingCalendar";
import CaliforniaEligibility from "./CaliforniaEligibility";

export default function CaliforniaBooking({ calendar }: { calendar: string }) {
  return (
    <CaliforniaEligibility>
      <BookingCalendar calendar={calendar} title="Apex Vitality New Patient Consultation booking calendar" flow="consultation" />
    </CaliforniaEligibility>
  );
}
