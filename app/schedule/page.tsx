import { redirect } from "next/navigation";

// Retire the old $39 initial-care flow; current care starts with a free consult.
export default function SchedulePage() {
  redirect("/patient-access");
}
