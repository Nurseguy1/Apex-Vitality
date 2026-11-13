# Corporate enrollment billing

## Owner-approved flow

1. Client types a configured company name at `/corporate-enrollment`.
2. Client supplies their email, confirms California location and requests sponsored enrollment. The form explains company billing starts when enrollment completes, even if scheduling occurs later. No personal card is collected.
3. `POST /api/corporate-enrollment` creates one recurring monthly subscription on the configured company customer and saved card. Each client has their own enrollment-date billing cycle.
4. After enrollment is recorded, the existing Charm calendar opens. The client uses the same email in Charm; no company note or reference is required from the client. Apex manually checks sponsorship before the visit.

Company-name entry, page visits and calendar loads do not charge. The same normalized email/company returns its existing subscription, including retries beyond Stripe’s idempotency retention. No quantity-zero placeholder is needed.

This supersedes the former appointment-trigger proposal. The old `/api/integrations/corporate-appointments` receiver now returns HTTP 410; no Charm callback or developer API is required for this billing flow. It does not implement general Stripe-to-Charm synchronization.

The public endpoint accepts only company, email and attestations, checks the exact site origin and limits the request to 4 KiB. Company/customer/price/card mapping stays server-side. Patient email is used only to derive an opaque HMAC identity and is not sent to Stripe. No new database or email service was added.

## Private configuration and activation

- `STRIPE_SECRET_KEY`: test key for testing; live key only after authorization.
- `CORPORATE_BILLING_MODE`: `off` (default), `test`, or `live`.
- `CORPORATE_LIVE_BILLING_APPROVED`: must explicitly equal `true` for live charging.
- `CORPORATE_SPONSORS_JSON`: private list of company name, optional aliases, Stripe customer, price, optional `paymentMethod`, and `liveAuthorized`. Exact normalized mapping only; no client-supplied Stripe IDs. Do not put real company billing details into Git.
- `CORPORATE_UNIT_AMOUNT`: approved monthly amount in cents; must match the configured Stripe price exactly.
- `CORPORATE_STRIPE_PRODUCT_ID`: must match the corporate product, not an individual membership product.
- `CORPORATE_ENROLLMENT_HMAC_SECRET`: stable random server-only key, at least 32 characters. Do not rotate casually: changing it changes client duplicate references.
- `CORPORATE_SITE_ORIGIN`: optional exact allowed origin; defaults to the production www website.

Before activation, complete the sponsor's customer record, obtain its authorization for enrollment-triggered recurring charges and configure its saved payment method securely in private server settings (or use its Stripe invoice default). Verify the configured price, mode and product. Run the mocked enrollment, retry, failed-payment and canceled-subscription tests. A live enrollment creates a real recurring charge; do not submit a real enrollment as a configuration check. The owner must complete any consequential live financial activation in the relevant dashboard.

No new database or email service is required by this implementation. Standard Stripe payment and Billing fees still apply. Charm API access is not needed for this trigger. This does not resolve the existing hosting-plan question.

## Operational limits

- Only the normalized email plus sponsor customer determines duplicate identity. Different addresses for one person can produce different subscriptions. A shared address cannot identify two people. This needs review before scaling.
- Canceled and expired subscriptions block automatic reenrollment; staff must review rather than silently restarting billing.
- Store only opaque references in Stripe metadata; never send patient names, email addresses, diagnoses, appointment reasons, medications or clinical notes to Stripe.
- Staff can match the Charm email and company to the existing opaque Stripe reference with the read-only lookup below. This is a staff reconciliation step, not automatic Charm synchronization.
- Stripe currently permits up to 500 active/scheduled subscriptions per customer. Revisit the model before that limit.
- Automatic invoice collection may require company action or fail. `needs_attention` means enrollment/subscription exists but does not establish payment. Monitor Stripe for failed payments; no new alerting service has been configured.
- Appointment cancellation does not automatically cancel membership or refund payments. Membership cancellation and refund policy require separate handling. No automatic refunds, backdating, proration, tax configuration or sponsor eligibility verification is implemented.
- Do not change the HMAC identity or enable retries with a different customer/secret to bypass a failure; reconcile the Stripe records first.


## Read-only readiness check — October 21

The company-name step calls the same endpoint with `checkOnly: true`. It verifies the private company mapping, live/test mode, Stripe customer, attached saved card and exact recurring price using GET requests only. It cannot create a subscription. A valid result is `{ "ready": true }`; the client can then enter email/attestations and explicitly complete the billing enrollment. Rejected company names are explained before collecting the email. Logs record only safe error codes/status, not company or patient input. This check does not prove the issuer will approve a future charge.

## Email matching without an extra patient step

Future clients type their company and email as before, then book with that same email. The website no longer asks them to copy a reference into the booking reason. Existing billing identities and subscriptions are unchanged.

Staff can run `node scripts/corporate-membership-lookup.mjs` in a trusted local session with the existing production `STRIPE_SECRET_KEY`, `CORPORATE_SPONSORS_JSON`, and `CORPORATE_ENROLLMENT_HMAC_SECRET` loaded securely. Use the same HMAC secret as production; a different secret cannot match existing enrollments. The local ignored environment file has an obsolete Stripe key and lacks the production HMAC secret, so it cannot perform this lookup. Never put production secrets or patient input in Git or command arguments.

The tool prompts for company and email, computes the same opaque reference locally, and uses GET requests only to find an existing subscription. Patient email is not transmitted to Stripe. It cannot create subscriptions, charge, cancel, or refund. Review the matched subscription's paid invoice in Stripe; an active status alone does not prove payment. No new paid service is introduced.

Automatic association inside Charm remains pending supported API access; there is no verified iframe callback or supported appointment prefill in this implementation. Do not claim that this change automatically updates Charm or confirms appointment status.
