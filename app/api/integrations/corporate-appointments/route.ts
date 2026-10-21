// Replaced by enrollment-triggered billing. A second trigger must not start charges.
export async function POST() {
  return Response.json({ error: "retired_use_corporate_enrollment" }, { status: 410 });
}
