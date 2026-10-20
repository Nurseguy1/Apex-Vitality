# Apex Vitality project wiki

Current as of October 20, 2026. This page supersedes the earlier launch notes, which are retained in [the historical wiki](docs/history/WIKI-before-2026-10-16.md). Historical prices and readiness claims are not current instructions.

## Current production and Git workflow

- Public site: https://www.goapexvitality.com (apex domain redirects to the public site).
- GitHub repository: `Nurseguy1/Apex-Vitality`.
- Canonical development baseline: `main`, synchronized with the published men's-health source. Start future work from updated `main` on a focused branch.
- The original redesign was published from `agent/stripe-checkout-preview`; that branch is preserved for history. Current application changes are published from `main`.
- Active local checkout: `/Users/johnbagby/Documents/Codex/2026-07-14/let/apex-vitality-stripe-ready`.
- Canonical Vercel project: `apex-vitality`, team `abcdef4`, project ID `prj_rfbZeOcGshHaq2b7LifA7mDz3V38`.
- The old Vercel project `create-a` also automatically builds the repository and can hold up the build queue. It is not the production target. Duplicate builds were canceled; the project and its Git connection were not deleted or reconfigured.
- The ChatGPT Sites copy and other dated checkouts are not canonical. The local design URLs on port 8766 now lead to the public site.

## Approved public positioning

The men's site is a place to talk and be heard about lifestyle and health concerns. Keep the clinician credential FNP-C. Lead with the free first consultation. Do not add public hormone or medication promotion, promises of outcomes, or language about discussing such services privately. Google Ads approval has not been promised or certified.

The homepage uses the existing Apex photos, with the California badge positioned away from the man's face. Patient-facing design-preview labels were removed. Its eStore link opens https://fm.goapexvitality.com/estore in a separate tab, leaving the men's site available in the original tab.

## Patient pathways and prices

| Path | Current behavior |
| --- | --- |
| First consultation | Free, 30 minutes. Book through `/book-consultation` and select New Patient Consultation in Charm. No membership or payment required. |
| Apex Treatment | $499/month or $4,990/year. |
| Apex Performance | $749/month or $7,490/year. |
| Apex Private Client Care | $1,250/month or $12,500/year. |
| Included member initial visit | 45-minute comprehensive New Patient Visit after enrollment in one of the three tiers. |
| Corporate care | `/corporate-enrollment` requires a typed company name (no dropdown), then opens immediate registration/scheduling for a 45-minute initial visit in Charm after California confirmation. Clients copy the displayed company note into the appointment Reason field. Sponsor pays; no personal card. Apex verifies sponsorship before the visit without delaying scheduling. |

Monthly and annual memberships renew at their selected frequency until canceled. Annual payment is paid in full, not monthly installments. Applicable tax is shown at checkout. The $69 consultation, $80 first month, and CONSULT69 first-month credit are retired. The former Focused Care Stripe product was repurposed for company-sponsored care and must not be used as an individual self-pay route.

The current FAQ and patient-access pages explain the free 30-minute consultation and current memberships. Some older source routes remain archived or redirected by `next.config.ts`; do not restore old offers by copying their text into current pages.

## Stripe: implemented and unverified boundaries

- Monthly payment links for the three tiers were restored and verified active in Stripe. Website enrollment includes California, coverage, care-term, and renewal acknowledgments.
- Annual pages live at `/checkout/annual?tier=treatment`, `performance`, or `private`. Server-side checkout uses fixed amounts/product IDs in `app/lib/membership-catalog.ts`; clients cannot supply prices. Existing annual Stripe prices are looked up by stable keys, or created idempotently at the approved amounts.
- Annual acknowledgments include California, coverage, care terms, annual payment in full, and annual renewal. Checkout metadata records that acknowledgment. The server rejects missing acknowledgments, invalid tiers, and mismatched Stripe prices.
- `STRIPE_SECRET_KEY` was entered privately into Vercel by the owner for Production and Preview. The old local key is unauthorized. Never print or commit either key.
- `/membership-complete` checks a completed paid checkout, a fixed medical membership product ID, and a currently active subscription with a paid latest invoice and an unexpired billing period before rendering member booking. It embeds Charm on the authorized clinic domain. This does not enforce membership inside Charm or establish patient identity; receipt links remain transferable.
- No real payment or paid subscription was submitted during payment verification. Separate explicitly authorized test appointments were created and canceled; see the booking retest below. Annual checkout was checked with mocked server tests, TypeScript, hosted builds, and page-level price checks; a real completed annual payment has not been tested.
- There is no Stripe webhook endpoint, durable enrollment database, or Stripe-to-Charm synchronization implemented in this repository. Do not describe payment verification as full EHR integration.

## Corporate care: pending activation

The owner approved company-paid billing based on the number of active enrolled clients. The sponsor manages eligibility and unauthorized signups; Apex should not add verification codes. Sponsor pricing and billing details are private and must stay out of public site copy and public Git documentation.

The corporate Stripe product and an empty sponsor customer placeholder exist. No sponsor card, billing email, or paid corporate subscription has been set up. No automatic enrollment counting, sponsor quantity updates, or account synchronization is implemented. Do not bill based on page visits or merely booked consultations. Sponsor identity and billing details require confirmation outside this public repository.

## Charm: what works and what is pending

Historical clinical operations are retained in `docs/history/charm-operations-before-redesign.md`. The older operations wiki records that Charm video was tested successfully and Quest was connected, with a dummy-chart lab-order workflow tested September 4 (no real order transmitted in that recorded test). The owner reports video visits and Quest ordering worked on the prior site. These existing EHR functions are separate from the unfinished website/Stripe API synchronization; the redesign does not require rebuilding them. Do not reset or replace the active Charm account. Earlier prices and visit durations in the archive are superseded by the current offer below.

- The public embed calendar loads on the authorized clinic site. Both consultation and 45-minute initial member visits are offered.
- New Patient Consultation was changed in Charm to 30 minutes with charge 0.00; the public label was verified. New Patient Visit remains 45 minutes. No existing appointments were edited.
- Brief New Patient Intake, Consent to Care/Telehealth/Communications, and HIPAA acknowledgment are assigned to both new-patient visit types.
- Portal, booking, intake forms, and consent forms are available through Charm. This does not mean Stripe records synchronize with Charm.
- No API keys were configured in the practice settings. Adding one requires a registered developer OAuth2 client ID.
- With explicit owner approval, a Charm API-access request was submitted October 16, 2026. The form confirmed: “Thank you for your interest. We will contact you soon.” It requested existing-access confirmation, onboarding, license costs, sandbox, supported administrative/patient endpoints, and event notifications. Developer access is not yet approved or connected.
- Clinical decisions and clinical records stay in Charm. Future Stripe integration should use administrative references and membership status, not diagnoses or clinical notes.
- The calendar embed digest is configured in `app/book-consultation/page.tsx` and `app/lib/charm.ts`. Regenerating the embed in Charm can change the digest; update both locations together and verify on an authorized domain.

## Shared eStore return path

The `fm` subdomain is hosted on HighLevel: Namecheap's CNAME target is `sites.ludicrous.cloud`. Namecheap only manages DNS for that site; its banner links require HighLevel/agency editor access.

The women's site uses the same eStore. Its current logo/Home links return to the functional-medicine homepage. Owner will request editor access from the builder next week. No DNS settings or shared-store banner links were changed. For now, closing the separate store tab returns visitors to the still-open men's site. A conditional return-script draft exists outside the repository, but it is not installed; the men's link is not yet tagged with a return parameter. Do not claim visitor-origin return routing is active.

## Recovery and historical preservation

- Tag `production-before-redesign-2026-10-16`: `49637eecb91778f27f34e1da2807e7303ed1b030`, the source before tonight's men's redesign.
- Tag `production-mens-launch-2026-10-16`: `afb308ff1b7b052635a8e7396b502b378749f9be`, the published design with the eStore link.
- The previous production deployments are retained in Vercel. Use the canonical project for rollback; do not force-push Git history.
- Old-site file backup is outside Git at `/Users/johnbagby/Documents/Codex/2026-10-13/doe/outputs/backups/apex-before-redesign-2026-10-16.tar.gz` (140 files, excluding credentials and generated dependencies).
- A named Git stash retains the pre-organization local working tree, including unused copied image assets and generated TypeScript cache. All app files were byte-for-byte identical to published GitHub source before synchronizing. Do not blindly apply this stash over current `main`.
- Older branches remain intact; no branch history was deleted or rewritten.

## Before the next application change

### Booking confirmation investigation — October 17, 2026

The owner reported that two successful test submissions returned to the booking form without an obvious confirmation. Both test appointments were confirmed in Charm and subsequently canceled through Cancel Appointment. No patient details belong in this repository. The owner subsequently clarified that a confirmation appeared briefly before the calendar returned to booking. The exact wording and cause of the reset remain unverified. The website has no booking redirect handler; the calendar is a cross-origin Charm iframe. Embed settings expose no custom success-message editor. Guidance above the calendar now directs visitors to their confirmation email and asks them to contact Apex instead of submitting a duplicate if the calendar resets. This is guidance, not detection or proof of successful booking. Do not implement an unconditional success state on iframe load. A real success screen still requires a supported, verified Charm callback or integration.

1. Fetch GitHub and start from current `main`; inspect local changes before switching branches.
2. Keep environment files, patient records, sponsor billing information, and caches out of Git.
3. Follow the source map in README. Use the pnpm lockfile and supported Node version.
4. Run TypeScript and the production build for application changes; test the affected patient path without creating real records or charges.
5. Verify a preview from the canonical Vercel project, publish intentionally, then verify the public domain. Keep the source commit and deployment traceable.
6. Treat corporate automation and EHR sync as unfinished until Charm access, durable state, authentication, idempotent event handling, cancellation behavior, and integration testing are actually in place.

## Original Charm integration restored — October 18, 2026

Compared the pre-redesign tag with the current booking components after the owner reported the old site did not reset after confirmation. The iframe wrapper is identical (eager loading and strict-origin-when-cross-origin referrer policy); the saved original calendar digest differs from the replacement. Restored the original calendar URL from the tag in both booking URL locations, and restored the original CaliforniaBooking component without the temporary duplicate-booking warning. Free 30-minute consultation copy and the California gate remain. No redirect handler was added, and the digest difference is not established as the cause of the reset. Verify public calendar availability and the final confirmation behavior separately; do not claim the reset is fixed based on calendar loading alone.

## Preserve all existing integrations — October 18, 2026

Owner instruction: the redesign must preserve all previously working external services, including Charm, telehealth, Quest, pharmacy, Fullscript, payment services, and the shared eStore. A design change is not authorization to replace accounts, create duplicate clinical workflows, or reset vendor configuration.

Source audit against `production-before-redesign-2026-10-16`: all 12 literal external URLs in the original application source remain present. No pharmacy or Fullscript API/client implementation or direct Fullscript URL was present in that baseline website code. Fullscript is documented as enabled through Charm, with an active practitioner account and Fullscript Labs. Preserve that account-level workflow. The source audit does not prove live account connectivity or successful fulfillment.

Historical pharmacy notes: Strive/LifeFile onboarding progressed in August; September 16 records the owner's report of a Strive clinic-billing/patient-shipping option. Pharmacy Hub was an earlier candidate. These notes are not a current end-to-end verification. Do not reset the pharmacy connection or advertise a new integration based on these notes. Verify the actual existing account and prescription routing before claiming operational pharmacy fulfillment.

- Charm calendar: restored the saved original URL and iframe, with the current free 30-minute consultation. Public calendar loading verified; final confirmation persistence not retested.
- Charm portal, forms, video, Quest and Fullscript: retain the same EHR account and existing native workflows; no vendor settings were changed in the source restoration. Historical video/Quest test evidence is archived above.
- Stripe: keep the same account and restored current tier checkout paths; do not reintroduce retired consultation prices or promotions. Automated Stripe-to-Charm sync remains separate and unfinished.
- eStore: retain `https://fm.goapexvitality.com/estore` in a separate tab, with the shared women's-store setup preserved.
- Scalerize: keep the existing separate coaching invitation path; do not migrate medical records to it.

## Live integration audit — October 18, 2026

These signed-in observations supersede historical assumptions of present connectivity:

| Service | Current observed status |
|---|---|
| Charm public calendar | Both visit types load. Successful booking confirmation was observed, followed by an iframe reset to service selection after 30 seconds. Test appointment canceled; vendor support issue remains open. |
| Quest | Bidirectional live interface active. Saved 13-test panel reached electronic order review in a nonclinical test chart; canceled before transmission and test order marked Expired. No order sent or charge created. Delivery/results remain untested. |
| Charm TeleHealth | Provider is Enabled for California. No live video session started. |
| Fullscript | Disabled at owner request on October 18 due to concern about add-on costs. Account link removed; Add-ons now shows Enable Now. No supplement order transmitted. Earlier linked/enabled observations below are historical. |
| Charm eRx | Provider shows Not Enabled. |
| EPCS | Manager asks for facility landline/fax configuration before enrollment. No enrollment started or submitted. |
| Pharmacy fulfillment | Owner uses Strive. Existing LifeFile provider account opened successfully and eRx reached Patient Selection. No prescription or fulfillment order submitted; end-to-end delivery untested. Charm-native eRx remains separate. |
| Fax | Incoming and outgoing services enabled. |
| Patient email | Confirmation, reschedule, cancellation, reminder, shared labs/documents/visit summaries, PHR welcome and appointment questionnaire notifications enabled. |
| Stripe monthly plans | All three live checkouts load the correct membership and monthly amount: 499, 749, 1250 USD. No payment submitted. |
| Shared eStore | Public access-request page loads at fm.goapexvitality.com/estore. No request or purchase submitted. |

Do not interpret restoring the website source as verifying account-level authorization, clinical ordering, fulfillment, or end-to-end patient use. No clinical orders, prescriptions, paid subscriptions, or new account enrollments were created during this audit.

Strive official provider portal verified from its Account link: `https://host5d.lifefile.net/application_main_zfw/login/login/vendor_name/strivepharmacy/access/doctor`. Existing account must be used; do not create a replacement. Fullscript consent is awaiting explicit approval to send patient identifying/contact details and prescriptions.

### Strive account verification — October 18, 2026

Owner signed into the existing Strive LifeFile account. The portal identifies Apex Vitality and John Bagby, with StriveAZ-Gilbert selected and StriveMO-St.Louis also available. The provider control panel is accessible; opening eRx reaches Patient Selection. No patient was selected or created, no prescription or order was submitted, and no pharmacy, billing, or shipping setting was changed. This confirms provider portal access, not prescription fulfillment or automatic Charm/website synchronization. Fullscript data-sharing approval remains pending.

### Fullscript connection attempt — October 18, 2026

Owner explicitly approved the described patient-data sharing. Consent checkbox was selected, but Choose your Fullscript Account did not open a dialog or authorization tab using native and Playwright button interactions, including after one page reload. Browser reported a Charm prescription-script error: Identifier PrescriptionHtml has already been declared. Whether that error causes the button failure is unproven. No OAuth authorization or provider association has completed; Fullscript must not be marked connected. Owner was shown the setup page to attempt the account-selector button directly.

### Fullscript connection confirmed — October 18, 2026

After the owner continued the setup and requested a refresh, the signed-in Charm Fullscript settings showed John Bagby’s existing Fullscript account Linked to Apex Vitality and FNP John Bagby mapped with status Enabled. No Associate, Delete, patient-information update, or prescription-transmission action was performed during verification. This supersedes the earlier disconnected/setup-blocked observation. No supplement order was transmitted as a test.

### Original-URL new-patient confirmation retest — October 18, 2026

With explicit owner approval, completed one clearly labeled new-patient workflow booking using owner-provided test/contact details; owner also approved CAPTCHA completion. Charm displayed: Your Appointment has been confirmed with FNP. John Bagby, followed by the visit date/time and timezone. After a 30-second untouched observation period, the same iframe displayed step 1 / service selection again. Restoring the pre-redesign digest therefore did not eliminate the reset. The outer website URL remained /book-consultation; no outer-page navigation was observed. The test appointment was then canceled through Charm Cancel Appointment and disappeared from the active calendar. The labeled test chart remains; no chart deletion was performed. No more bookings are needed to establish this behavior. Evidence is saved outside the repository; keep patient details out of Git. The earlier support request about this issue remains the vendor escalation; no follow-up was sent during this test.


## Member booking payment checks — October 18, 2026

Website member booking now verifies a completed paid Stripe checkout, the fixed medical membership product ID, and the current subscription on every request. The subscription must be active with a paid latest invoice and an unexpired billing period. A product name alone, an old receipt for a canceled/past-due subscription, and test-mode checkout under a live secret do not grant access. Stripe errors fail closed. The retired `/schedule/lab-review` calendar now forwards to the same verification (it previously redirected to the men’s homepage via the global legacy-route rule); `/schedule` forwards to patient access instead of advertising the obsolete $39 flow. Free first consultations and company-sponsored enrollment remain separate.

This is a website gate, not patient identity verification or Charm enforcement. A receipt link is transferable, and the same publicly accessible Charm calendar is still embedded on the free consultation page and offers the configured visit types. Restricting paid visit types in Charm or using a separate free-consult-only calendar remains necessary for full enforcement. Existing portal appointment requests also need practice-side payment review. Do not claim that every unpaid booking is prevented. No automatic Stripe-to-Charm updates, corporate billing, patient records, or functional-medicine workflows were added or changed.

Verification: mocked Stripe payment/subscription regression tests in `tests/member-booking.test.mjs`; production build. No live charge or patient booking is required for these checks.


Published and verified: production deployment `Em6xPgyMetSdTkTRPwAtJHpiYjcT` (commit `3f4060d`) reached Ready; the live `/membership-complete` page without a receipt shows membership-verification help and renders no calendar. All 15 mocked Stripe regression checks and the production build passed; no live payment was submitted. Owner chose to keep instant booking after reviewing Charm’s alternative free-consult-only request form, which would require manual appointment confirmation. No Charm calendar setting or embed was saved or replaced. The shared-calendar limitation therefore remains explicit.


## End-of-day handoff — October 18, 2026

- Published booking copy in commit `6997e34`, verified on the live `/book-consultation` page: **“For your free first consultation, select New Patient Consultation (30 mins).”** The following sentence clarifies that the 45-minute New Patient Visit is for enrolled members. Production build passed. This is guidance, not a technical restriction of Charm’s shared calendar.
- Owner elected to keep instant booking. The available free-consult-only embed alternative would collect preferred times and require manual confirmation; no replacement embed or calendar setting was saved. Review active paid membership before providing member care when a patient books through the shared calendar or portal.
- Website payment checks are deployed and covered by 15 mocked Stripe regression checks; the live no-receipt screen renders no member calendar. Actual completed live payments remain untested.
- Quest walkthrough used the saved 13-test Men’s Health Baseline panel in an existing explicitly nonclinical chart. Electronic review showed the configured Quest account, tests, billing choices, and LIS/PSC actions. Neither final transmission button was used. The newly created internal test order was marked Expired; the older test order was left unchanged. No new diagnosis mapping or specimen collection details were entered. No real lab order or billing action was performed.
- Remaining work: Charm API access and automatic Stripe-to-Charm administrative membership synchronization; booking-confirmation reset with Charm support; sponsor billing details and corporate enrollment accounting; end-to-end payment, lab-result, telehealth, and pharmacy fulfillment verification as appropriate. Existing native services and provider access do not prove every end-to-end workflow.
- Scope for future synchronization: only the three men’s-health medical memberships and separately mapped corporate members. Functional medicine/coaching clients must not be automatically enrolled into Charm based on Stripe email or general account activity.
- Preserve the existing vendor accounts, original-site backup, and Git history. Do not put patient details, credentials, or private sponsor rates in Git. An unrelated untracked duplicate test file was observed during this documentation update and was left untouched.


## Fullscript disabled and cost preference — October 18, 2026

Owner requested disabling the Charm Fullscript add-on after learning it may involve charges. Removed the existing Fullscript association from Charm. Verified the setup screen returned to “Choose your Fullscript Account” and Charm Add-ons displays “Enable Now” for Fullscript. The independent Fullscript account was not closed, and no patient record or supplement order was deleted. This supersedes earlier linked/enabled status. No invoice, refund, cancellation fee, or previously accrued charge was verified; do not claim prior charges were reversed.

Owner preference: disclose setup fees, subscription fees, usage charges, and possible costs before enabling or subscribing to services. If pricing is unclear, say so and check before proceeding. Do not reactivate Fullscript without discussing costs and obtaining the owner’s authorization.


## Simple corporate enrollment — October 20, 2026

Owner chose a typed company-name entry, not a dropdown, invitation, verification code, approval queue, or automated eligibility service. Any nonblank company name can continue; this is self-reported sponsorship, not proof of eligibility. Scheduling proceeds immediately; Apex will text the company separately before the actual visit. No automated message to any company is authorized or implemented.

The page embeds the existing Charm calendar for patient registration and scheduling and instructs corporate clients to select New Patient Visit (45 mins). The browser-only company entry is not saved, sent to Stripe, or automatically inserted into Charm. The page provides a copy button for “Corporate Care — [company]” and instructs clients to paste it into Reason for appointment so it reaches the practice with the booking. Do not claim automatic company attribution or enrollment counting. A refresh clears the local company entry. No clinical data is collected by the website form.

No new paid service, database, email provider, Stripe subscription, sponsor charge, or company account was created for this change. Each sponsor’s billing details, approved enrolled-client count, and billing activation still need separate setup. Existing Stripe processing/Billing charges remain applicable when corporate billing is activated. Functional medicine, self-pay membership payment checks, and Charm settings are unchanged.


## Corporate automatic billing implementation — October 20, 2026

Owner clarified the trigger: company-name entry unlocks scheduling; a successfully confirmed corporate appointment starts one recurring subscription for that client on the sponsoring company's card. Eligibility is checked manually before the visit and must not delay scheduling. Calendar loading, abandoned signup, and company-name entry alone must not charge. Repeated bookings for an already enrolled client must not create additional monthly subscriptions.

Implemented a signed server-to-server booking receiver and Stripe subscription service, disabled by default. Private server configuration maps companies to sponsor customers and the approved corporate price. Stripe stores opaque duplicate references, avoiding a new database subscription. The existing public corporate page remains unchanged. No real subscription, card entry, financial authorization, company charge, or new paid service was performed.

This is **not connected end to end**. Charm must provide a trustworthy confirmed appointment and company attribution through a supported integration/adapter; no native callback was assumed. No API-access instruction matched the clinic mailbox search at the latest check. Sponsor customer/card setup, company recurring-charge authorization, private configuration and a test-mode booking-to-billing exercise remain prerequisites. See [corporate billing implementation and activation](docs/integrations/corporate-billing.md). Any added vendor costs must be checked and disclosed before activation. Do not describe this as live automatic billing.


Corporate setup follow-through: updated the existing zero-subscription sponsor customer in Stripe with the owner-provided legal/business name, billing email, billing address, contact name and registered office. Verified the saved record still shows no subscriptions, no payments, no invoices and no payment methods. Private company details remain in Stripe, not this repository. The billing implementation and existing member-booking tests passed 39 checks; production build and targeted lint passed. No event adapter or live configuration was enabled, and no funds moved.
