# Apex Vitality project wiki

Current as of October 16, 2026. This page supersedes the earlier launch notes, which are retained in [the historical wiki](docs/history/WIKI-before-2026-10-16.md). Historical prices and readiness claims are not current instructions.

## Current production and Git workflow

- Public site: https://www.goapexvitality.com (apex domain redirects to the public site).
- GitHub repository: `Nurseguy1/Apex-Vitality`.
- Canonical development baseline: `main`, synchronized with the published men's-health source. Start future work from updated `main` on a focused branch.
- Tonight's application changes were published from `agent/stripe-checkout-preview`; this branch is preserved for history, not the baseline for new work.
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
| Corporate care | `/corporate-enrollment` leads to secure consultation booking. The sponsoring company pays; clients do not enter personal payment cards. Booking alone does not activate corporate membership. |

Monthly and annual memberships renew at their selected frequency until canceled. Annual payment is paid in full, not monthly installments. Applicable tax is shown at checkout. The $69 consultation, $80 first month, and CONSULT69 first-month credit are retired. The former Focused Care Stripe product was repurposed for company-sponsored care and must not be used as an individual self-pay route.

The current FAQ and patient-access pages explain the free 30-minute consultation and current memberships. Some older source routes remain archived or redirected by `next.config.ts`; do not restore old offers by copying their text into current pages.

## Stripe: implemented and unverified boundaries

- Monthly payment links for the three tiers were restored and verified active in Stripe. Website enrollment includes California, coverage, care-term, and renewal acknowledgments.
- Annual pages live at `/checkout/annual?tier=treatment`, `performance`, or `private`. Server-side checkout uses fixed amounts/product IDs in `app/lib/membership-catalog.ts`; clients cannot supply prices. Existing annual Stripe prices are looked up by stable keys, or created idempotently at the approved amounts.
- Annual acknowledgments include California, coverage, care terms, annual payment in full, and annual renewal. Checkout metadata records that acknowledgment. The server rejects missing acknowledgments, invalid tiers, and mismatched Stripe prices.
- `STRIPE_SECRET_KEY` was entered privately into Vercel by the owner for Production and Preview. The old local key is unauthorized. Never print or commit either key.
- `/membership-complete` verifies the Stripe checkout server-side before displaying member booking. It embeds Charm on the authorized clinic domain rather than sending patients to an unauthorized direct calendar URL.
- No real payment, paid subscription, patient legal acceptance, or appointment was submitted during verification. Annual checkout was checked with mocked server tests, TypeScript, hosted builds, and page-level price checks; a real completed annual payment has not been tested.
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
