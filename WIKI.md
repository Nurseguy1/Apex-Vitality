# Apex Vitality Project Wiki

Updated: August 23, 2026

## Live website

- Production site: https://www.goapexvitality.com
- Current service area: California adults physically located in California when care is provided, except that children age 4 and older and teens may be considered only for the Special Needs Nutrition Program with parent or legal-guardian participation and consent.
- Clinical-care fees do not guarantee eligibility, a prescription, medication, laboratory testing, or a particular result.
- Medication, pharmacy charges, supplies, shipping, and clinically appropriate laboratory services are paid separately.

## Current project status

- The membership and scheduling workflow was revised on August 23.
- Everyone begins with a separate, one-time **$39 initial-care payment**, then completes the selected membership checkout.
- Focused Care includes a 15-minute initial appointment. Apex Treatment, Apex Performance, and Apex Private Client Care include a 45-minute comprehensive initial appointment.
- Special Needs Nutrition is now a separate fixed three-month program for parents and caregivers who are concerned about a child's selective or limited diet, digestive routine, or supplements. Teens and adults may also be considered.
- The Special Needs Nutrition pathway is a separate $39 initial-care payment followed by one $597 program payment ($199/month equivalent). It does not renew automatically.
- Special Needs Nutrition includes one 45-minute initial visit and written plan in month 1, one 30-minute follow-up and adjustment in month 2, and one 30-minute follow-up and final update in month 3.
- Clinical messaging is not included in memberships or the Special Needs Nutrition Program. Clinical questions are handled during scheduled visits; administrative channels remain available for scheduling, forms, records, billing, and account support.
- The first full membership month is charged immediately. Canceling stops the next renewal; it does not prorate or reverse a month already purchased.
- The Home-page Care order, Treatments cards, and nutritional bundle paths remain in place.

## Current purchase model

- Initial clinical visit: **$39 one time**.
- Focused Care: **$149 per month**, including a 15-minute initial appointment.
- Apex Treatment: **$499 per month**, including a 45-minute comprehensive initial appointment.
- Apex Performance: **$749 per month**, including a 45-minute comprehensive initial appointment.
- Apex Private Client Care: **$1,250 per month**, including a 45-minute comprehensive initial appointment.
- Special Needs Nutrition Program: **$597 one time for three months** after the separate $39 initial-care payment. This is a fixed program, not an automatically renewing membership.
- Peptide- or NAD+-only patients are directed to Focused Care as the default membership, but they must affirmatively approve its separate recurring checkout.
- The $39 checkout returns to `/purchase-complete`; membership checkouts return to `/membership-complete`.
- The Special Needs Nutrition program checkout returns to `/program-complete`, where a verified California payment opens the included 45-minute scheduling step.
- Stripe verifies the completed checkout before the return page displays the relevant next step.

## Purchase workflow

1. Patient chooses a treatment or membership.
2. Patient confirms California as the location of care and accepts the self-pay terms.
3. Patient pays the one-time $39 initial-care fee in Stripe.
4. Patient returns to Apex Vitality and affirmatively completes the selected membership or fixed-program checkout.
5. Patient schedules the included 15-minute or 45-minute initial appointment based on the selected care option.

Special Needs Nutrition follows the same first three steps, then the patient pays the fixed $597 three-month program fee and schedules the included 45-minute initial visit. Months 2 and 3 each include one 30-minute follow-up. After month 3, continued care is opt-in only; a stable patient may separately choose $149/month Focused Care. Funding or reimbursement is not promised and depends on the patient's approved plan and funding administrator.

Purchase-oriented buttons now move forward without returning patients to a treatment page they already visited. Direct checkout paths were verified for:

- Sermorelin
- NAD+
- Glutathione
- Medical Weight Loss
- Men's Health
- Focused Care Membership
- Metabolic & Gut Health
- Special Needs Nutrition

## August 22 updates

- Connected the live $39-plus-membership Stripe checkout.
- Corrected the dead **Begin Peptide Care** button.
- Sent treatment-card purchase buttons directly into the care-selection and checkout flow.
- Removed unnecessary questionnaire detours from the principal Men's Health and Medical Weight Loss purchase buttons.
- Removed the illustrative-packaging label and description from the Medical Weight Loss lifestyle image.
- Restyled the self-pay agreement with the site's soft teal, blue, and warm neutral palette.
- Kept separate, affirmative acknowledgments for the self-pay terms and automatic monthly renewal.
- Added **Metabolic & Gut Health** and **Special Needs Nutrition** to the $39 initial-care and $149 ongoing-membership pathway.
- Added matching **Metabolic & Gut Health** and **Special Needs Nutrition** cards to the Home-page Care section and Treatments page.
- Kept **Medical Weight Loss** first in the Home-page Care section, followed by Metabolic & Gut Health and Special Needs Nutrition.
- Added direct links from both new cards to their visible bundle sections.
- Added the adult metabolic and digestive Fullscript bundle section to the Metabolic & Gut Health program page.
- Added three visible Special Needs Nutrition bundle examples: Daily Nutrition Foundation, Digestive Routine Support, and Flexible-Format Support.
- Corrected spacing on all purchase-summary prices.
- Reduced the oversized **$149/month** price on the Focused Care purchase summary and placed it inside a padded, rounded inset.
- Fixed the Focused Care **$149/month** price so it stays inside its summary box at responsive widths.
- Published and verified commit `ac1811f` on both the review deployment and the public production site.

## August 23 updates

- Separated the $39 initial-care payment from recurring membership enrollment.
- Removed the 30-day Focused Care trial language and configured the first full membership month to be due immediately.
- Added all four memberships and their separate live Stripe checkouts.
- Added verified purchase-complete and membership-complete return pages.
- Added clear 15-minute versus 45-minute initial-appointment guidance throughout the memberships, agreements, and scheduling flow.
- Preserved separate affirmative consent for recurring membership charges.
- Added `https://www.goapexvitality.com` and `https://review.goapexvitality.com` to the Charm Web Embed Hosting Websites list while retaining the original Vercel preview host.
- Connected Charm's regenerated public scheduler link in Vercel for general, Focused Care, and comprehensive booking.
- Enabled both existing Charm online visit types: **New Patient Lab-Planning Visit (15 mins)** and **New Patient Visit (45 mins)**, so patients can select the duration included with their membership.
- Created the live Stripe product **Apex Special Needs Nutrition - 3-Month Program** (`prod_V84PWupOAv1RA1`) with one-time price `price_1U7oGOLaIe44L2p90hxykf8F` at $597.
- Created live Stripe Payment Link `https://buy.stripe.com/cNi6oIdkr0TC84Tf48fnO0k`, collecting full name and billing address and returning to `/program-complete?session_id={CHECKOUT_SESSION_ID}`.
- Repositioned Special Needs Nutrition primarily for parents and caregivers of children age 4+ while retaining possible teen and adult eligibility. All other Apex care remains adult-only.
- Replaced the former $149/month Special Needs Nutrition membership presentation with a fixed three-month program: 45-minute initial visit and written plan, then one 30-minute follow-up in each of months 2 and 3.
- Corrected the Treatments page so Metabolic & Gut Health remains $149/month while Special Needs Nutrition shows $597 total and links to the dedicated three-month program page.
- Removed public promises of clinical messaging from membership, contact, privacy, consent, and care-standard pages. Clinical care is delivered through scheduled visits.

## Fullscript status

The following general-wellness collections are published in the Apex Vitality Fullscript storefront:

- **Adult Nutrition Foundation:** O.N.E. Multivitamin, OmegaGenics 3-in-1 Fish Oil 720 mg EPA-DHA, Vitamin D3 25 mcg (1,000 IU), and Magnesium Glycinate 120 mg.
- **Adult Digestive Support:** Ther-Biotic Complete Probiotic, Digestive Enzymes Ultra, Organic Whole Husk Psyllium, and Peppermint Oil G.I.
- **Adult Metabolic Wellness:** Berberine 500 mg, Alpha-Lipoic Acid 300, Magnesium Glycinate 120 mg, and O.N.E. Omega.

Fullscript products and bundles are paid for separately by the patient. The website should describe them as clinician-recommended general nutrition or wellness support and should not promise that supplements diagnose, treat, cure, or prevent disease.

## Deployment status

- Working branch: `agent/stripe-checkout-preview`
- Review site: https://review.goapexvitality.com
- Public production is deployed through Vercel at https://www.goapexvitality.com.
- Live Stripe and Charm URLs are configured as Vercel environment variables for both Production and Preview.
- The new public $597 Special Needs Nutrition Payment Link is connected through `NEXT_PUBLIC_STRIPE_SPECIAL_NEEDS_PROGRAM_CHECKOUT_URL` when configured, with the verified live Payment Link as a public fallback.
- The Home-page **Explore options** flow now lands on Care cards ordered Medical Weight Loss, Metabolic & Gut Health, then Special Needs Nutrition.
- The Treatments page includes both nutrition-program cards, and both cards link to visible bundle sections.
- The review and public sites were verified after the production promotion.

## Next-conversation handoff

- Repository folder: `/Users/johnbagby/Documents/Codex/2026-07-14/let/apex-vitality-stripe-ready`
- Continue from this wiki and the `agent/stripe-checkout-preview` branch.
- Begin with this wiki and verify both the Vercel review deployment and public site before declaring future changes complete.
- The Metabolic & Gut Health and Special Needs Nutrition cards are published on the Home-page Care section and Treatments page.
- The Special Needs Nutrition page shows Daily Nutrition Foundation, Digestive Routine Support, and Flexible-Format Support bundle examples with age, medication, clinical-review, and separate-purchase safeguards.
- The Metabolic & Gut Health cards link directly to the adult Fullscript bundle section.
- The full production build passed, and the Home **Explore options** flow, Treatments cards, metabolic bundle section, and Special Needs Nutrition bundle cards were verified on both review and public domains.
- Keep responses concise and action oriented; the owner prefers the shortest practical workflow.
- Close temporary testing and verification tabs as work is completed. Keep active Fullscript, Charm, GitHub, Stripe, Strive, and Vercel working tabs when they are still needed.
- Before stating that a website change is finished, verify both the preview deployment and the public `www.goapexvitality.com` page.
- The owner has given a standing instruction to publish completed, verified website changes so they can review them on the live site.
- Charm Web Embed authorizes the live `www.goapexvitality.com` host, the `review.goapexvitality.com` host, and the original Vercel preview host. If Charm regenerates the embed code, update all three `NEXT_PUBLIC_CHARM_*_BOOKING_URL` values in Vercel.
- Keep both the 15-minute and 45-minute new-patient visit types enabled in Charm Online Appointments unless the membership scheduling model changes.
- Keep all non-nutrition care adult-only. The only minor-care exception is Special Needs Nutrition for children age 4+ and teens with parent or legal-guardian participation and consent.
- Keep Special Needs Nutrition as a fixed, nonrenewing three-month program. Do not describe it as a $149/month membership or promise clinical messaging.

## Operating notes

- Do not publish a personal phone number on the site.
- Patient medical information and care communication should use the secure Charm patient portal.
- Strive medication and pharmacy pricing remain separate from Apex clinical-care charges.
- LegitScript certification remains relevant to future advertising and partner requirements; certification is not represented as complete.
