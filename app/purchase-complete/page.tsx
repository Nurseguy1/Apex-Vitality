import { redirect } from "next/navigation";
export default async function PurchaseComplete({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id = "" } = await searchParams;
  redirect(`/book-consultation${session_id ? `?session_id=${encodeURIComponent(session_id)}` : ""}`);
}
