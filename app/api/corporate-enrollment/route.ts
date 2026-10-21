import { billCorporateEnrollment, checkCorporateSponsor, EnrollmentError } from "../../lib/corporate-billing";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = process.env.CORPORATE_SITE_ORIGIN || "https://www.goapexvitality.com";
  if (request.headers.get("origin") !== origin) return Response.json({ error: "invalid_request" }, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/json")) return Response.json({ error: "invalid_request" }, { status: 415 });
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ error: "invalid_registration" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let length = 0;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 4096) { await reader.cancel(); return Response.json({ error: "invalid_registration" }, { status: 413 }); }
    chunks.push(value);
  }
  try {
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    // Read-only readiness probe: validates the same private mapping/card/price as
    // enrollment, but never creates a subscription or accepts a patient identity.
    if (body?.checkOnly === true && typeof body.company === "string" && !body.website) {
      await checkCorporateSponsor(body.company);
      return Response.json({ ready: true }, { headers: { "Cache-Control": "no-store" } });
    }
    if (!body || typeof body.company !== "string" || typeof body.email !== "string" || body.website || body.california !== true || body.accepted !== true)
      return Response.json({ error: "invalid_registration" }, { status: 400 });
    const result = await billCorporateEnrollment({ company: body.company, email: body.email, accepted: true });
    return Response.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const known = error instanceof EnrollmentError;
    // Operational diagnosis only; never log company names, emails or request bodies.
    if (known) console.warn("corporate_enrollment_rejected", { code: error.code, status: error.status });
    return Response.json({ error: known ? error.code : "invalid_request" }, { status: known ? error.status : 400, headers: { "Cache-Control": "no-store" } });
  }
}
