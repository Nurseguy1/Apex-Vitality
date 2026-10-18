import { redirect } from "next/navigation";

// Retire the legacy unprotected calendar. The destination verifies payment
// and current membership before rendering any member booking calendar.
export default async function LabReviewSchedulePage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  redirect(`/membership-complete${session_id ? `?session_id=${encodeURIComponent(session_id)}` : ""}`);
}
