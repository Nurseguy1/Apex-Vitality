# Corporate appointment billing

Status: implementation tested with mocked Stripe responses; not connected to a booking source and live charging is disabled.

## Owner-approved flow

1. Client types the sponsoring company name on `/corporate-enrollment`.
2. Client registers and books through the existing Charm calendar without a personal payment card or eligibility approval delay.
3. A verified confirmation of that corporate appointment creates one monthly subscription on the sponsor's Stripe customer, anchored to creation time. Manual company verification occurs before the clinical visit.
4. A later appointment, reschedule, refresh, or repeated event must not create another subscription for the same sponsor/client email.

The private monthly amount is configured server-side, never accepted from the browser or advertised publicly. The company starts with zero subscriptions until an actual enrollment books. Do not create a quantity-zero placeholder subscription.

## Components

- `app/lib/corporate-billing.ts`: private sponsor mapping, exact price/customer checks, persistent duplicate lookup through all Stripe subscription statuses, stable HMAC reference, and Stripe idempotency keys.
- `app/api/integrations/corporate-appointments/route.ts`: signed, timestamped server-to-server receiver. It rejects unauthenticated browser requests and limits event size to 4 KiB.
- `tests/corporate-billing.test.mjs`: mocked Stripe regression tests and signature tests. No live subscription is created by tests.
- `.env.example`: server-only configuration names, with billing off by default.

This endpoint's JSON is an internal adapter contract, **not a documented native Charm event format**. A trusted adapter still must verify the actual Charm appointment and translate its data into this contract. Never connect an arbitrary unauthenticated form, iframe load, success-button click, or patient-reported completion to it.

## Event contract

Body fields: `type` equal to `corporate.appointment.confirmed`, `company`, `email`, `appointmentId`, and `confirmed` equal to `true`. All must come from the verified appointment source. Only corporate bookings qualify; free consultations, self-pay members, functional medicine and coaching must be excluded. The company must be captured in the Charm appointment's Reason field or another reliable field. If the company is missing or ambiguous, do not charge.

Set `x-apex-timestamp` to Unix seconds and `x-apex-signature` to hex HMAC-SHA256 of `timestamp + '.' + exact_raw_body` with `CORPORATE_BOOKING_EVENT_SECRET`. Events outside a five-minute window are rejected. Delivery retries should be re-signed with a fresh timestamp, preserving the same client identity. A signature authenticates the adapter, not the patient's eligibility.

The adapter must retry non-2xx responses and alert the practice when delivery fails. No adapter, queue, retry scheduler or native Charm callback has been configured. Do not advertise working end-to-end automation until one has been connected and tested. Any vendor API or automation fees must be disclosed before purchase or activation.

## Private configuration and activation

- `STRIPE_SECRET_KEY`: test key for testing; live key only after authorization.
- `CORPORATE_BILLING_MODE`: `off` (default), `test`, or `live`.
- `CORPORATE_LIVE_BILLING_APPROVED`: must explicitly equal `true` for live charging.
- `CORPORATE_SPONSORS_JSON`: private list of company name, optional aliases, Stripe customer, price, and `liveAuthorized`. Exact normalized mapping only; no client-supplied Stripe IDs. Do not put real company billing details into Git.
- `CORPORATE_UNIT_AMOUNT`: approved monthly amount in cents; must match the configured Stripe price exactly.
- `CORPORATE_STRIPE_PRODUCT_ID`: must match the corporate product, not an individual membership product.
- `CORPORATE_ENROLLMENT_HMAC_SECRET`: stable random server-only key, at least 32 characters. Do not rotate casually: changing it changes client duplicate references.
- `CORPORATE_BOOKING_EVENT_SECRET`: separate random signing key, at least 32 characters.

Before activation, complete the sponsor's customer record, obtain its authorization for enrollment-triggered recurring charges and set its default payment method securely in Stripe. Verify the configured price, mode and product. Complete a test-mode end-to-end booking, retry, repeated booking, failed-payment and cancellation exercise. The owner must complete any consequential live financial activation in the relevant dashboard.

No new database or email service is required by this implementation. Standard Stripe payment and Billing fees still apply. Any Charm API/provider costs remain unverified. This does not resolve the existing hosting-plan question.

## Operational limits

- Only the normalized email plus sponsor customer determines duplicate identity. Different addresses for one person can produce different subscriptions. A shared address cannot identify two people. This needs review before scaling.
- Canceled and expired subscriptions block automatic reenrollment; staff must review rather than silently restarting billing.
- Store only opaque references in Stripe metadata; never send patient names, email addresses, diagnoses, appointment reasons, medications or clinical notes to Stripe.
- The company/client relationship remains in Charm. A future reconciliation task needs access to that relationship; opaque Stripe references alone cannot identify patients to staff.
- Stripe currently permits up to 500 active/scheduled subscriptions per customer. Revisit the model before that limit.
- Automatic invoice collection may require company action or fail. `needs_attention` means enrollment/subscription exists but does not establish payment. Monitor Stripe for failed payments; no new alerting service has been configured.
- Appointment cancellation does not automatically cancel membership or refund payments. Membership cancellation and refund policy require separate handling. No automatic refunds, backdating, proration, tax configuration or sponsor eligibility verification is implemented.
- Do not change the HMAC identity or enable retries with a different customer/secret to bypass a failure; reconcile the Stripe records first.
