# Corporate enrollment billing

## Owner-approved flow

1. Client types a configured company name at `/corporate-enrollment`.
2. Client supplies their email, confirms California location and requests sponsored enrollment. The form explains company billing starts when enrollment completes, even if scheduling occurs later. No personal card is collected.
3. `POST /api/corporate-enrollment` creates one recurring monthly subscription on the configured company customer and saved card. Each client has their own enrollment-date billing cycle.
4. After enrollment is recorded, the existing Charm calendar opens. The client copies the company and opaque enrollment reference into the appointment Reason field. Apex manually checks sponsorship before the visit.

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
- Clients must copy the company/reference note into Charm to preserve the company/client relationship. A future reconciliation task needs access to that relationship; opaque Stripe references alone cannot identify patients to staff.
- Stripe currently permits up to 500 active/scheduled subscriptions per customer. Revisit the model before that limit.
- Automatic invoice collection may require company action or fail. `needs_attention` means enrollment/subscription exists but does not establish payment. Monitor Stripe for failed payments; no new alerting service has been configured.
- Appointment cancellation does not automatically cancel membership or refund payments. Membership cancellation and refund policy require separate handling. No automatic refunds, backdating, proration, tax configuration or sponsor eligibility verification is implemented.
- Do not change the HMAC identity or enable retries with a different customer/secret to bypass a failure; reconcile the Stripe records first.
