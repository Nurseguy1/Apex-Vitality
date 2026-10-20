import { billCorporateAppointment, EnrollmentError, verifyCorporateEvent } from "../../../lib/corporate-billing";
export const runtime = "nodejs";

// Server-to-server adapter contract, not a browser endpoint or a claimed native
// Charm payload. Connect only to a verified completed-booking event source.
export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > 4096) return Response.json({ error: "invalid_event" }, { status: 413 });
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ error: "invalid_event" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let length = 0;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 4096) { await reader.cancel(); return Response.json({ error: "invalid_event" }, { status: 413 }); }
    chunks.push(value);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!verifyCorporateEvent(raw, request.headers.get("x-apex-timestamp"), request.headers.get("x-apex-signature")))
    return Response.json({ error: "unauthorized" }, { status: 401 });
  try {
    const event = JSON.parse(raw);
    if (event.type !== "corporate.appointment.confirmed" || typeof event.company !== "string" || typeof event.email !== "string" || typeof event.appointmentId !== "string")
      return Response.json({ error: "invalid_event" }, { status: 400 });
    const result = await billCorporateAppointment({ company: event.company, email: event.email, appointmentId: event.appointmentId, confirmed: event.confirmed === true });
    return Response.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const known = error instanceof EnrollmentError;
    return Response.json({ error: known ? error.code : "invalid_event" }, { status: known ? error.status : 400, headers: { "Cache-Control": "no-store" } });
  }
}
