import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://apex-vitality.com${pathname}`, {
      headers: { accept: "text/html", host: "apex-vitality.com" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the premium Apex Vitality home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Apex Vitality \| Concierge Wellness/);
  assert.match(html, /Personalized care/);
  assert.match(html, /John Bagby, MSN, FNP-C/);
  assert.match(html, /Comprehensive New Patient Consultation/);
  assert.match(html, /\$325/);
  assert.match(html, /Apex Core Membership/);
  assert.match(html, /\$225/);
  assert.match(html, /Apex Performance Membership/);
  assert.match(html, /\$375/);
  assert.match(html, /USD/);
  assert.match(html, /href="\/schedule"/);
  assert.doesNotMatch(html, /physician-led|collaborative agreement|Patient intake is not open yet/i);
});

test("server-renders the membership details and pricing safeguards", async () => {
  const response = await render("/memberships");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Memberships &amp; pricing/);
  assert.match(html, /Medications, laboratory testing, pharmacy charges/);
  assert.match(html, /Secure messaging is intended for non-urgent questions/);
  assert.match(html, /does not guarantee a prescription/);
  assert.match(html, /Schedule securely through Healthie/);
});

test("server-renders public payment and customer-service policies", async () => {
  const termsResponse = await render("/terms");
  assert.equal(termsResponse.status, 200);
  const terms = await termsResponse.text();
  assert.match(terms, /\$150 USD fee/);
  assert.match(terms, /at least 24 hours/);
  assert.match(terms, /original payment method/);

  const contactResponse = await render("/contact");
  assert.equal(contactResponse.status, 200);
  const contact = await contactResponse.text();
  assert.match(contact, /billing questions/);
  assert.match(contact, /refund requests/);
});
