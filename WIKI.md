# Apex Vitality Project Wiki

Updated: August 22, 2026

## Live website

- Production site: https://www.goapexvitality.com
- Current service area: California adults physically located in California when care is provided.
- Clinical-care fees do not guarantee eligibility, a prescription, medication, laboratory testing, or a particular result.
- Medication, pharmacy charges, supplies, shipping, and clinically appropriate laboratory services are paid separately.

## Current purchase model

- Initial clinical visit: **$39 today**.
- Focused-care membership: **$149 per month beginning after 30 days unless canceled**.
- If the clinician determines the patient is ineligible for the selected care pathway, the $39 initial payment is refunded and the membership does not begin.
- Stripe checkout is active and returns patients to `/purchase-complete` after payment.
- Checkout collects a billing address but does not require a phone number.

## Purchase workflow

1. Patient chooses a treatment.
2. Patient confirms California as the location of care.
3. Patient reviews and accepts the self-pay and recurring-payment terms.
4. The site automatically opens the secure Stripe checkout.
5. After payment, the patient returns to Apex Vitality for patient-access instructions.

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
- Added a prominent Special Needs Nutrition card to the Treatments page.
- Added the adult metabolic and digestive Fullscript bundle section to the nutrition-support page.
- Corrected spacing on all purchase-summary prices.
- Reduced the oversized **$149/month** price on the Focused Care purchase summary and placed it inside a padded, rounded inset.
- Published and verified commit `138507e` on both the preview deployment and the public production site.

## Fullscript status

The following general-wellness collections are published in the Apex Vitality Fullscript storefront:

- **Adult Nutrition Foundation:** O.N.E. Multivitamin, OmegaGenics 3-in-1 Fish Oil 720 mg EPA-DHA, Vitamin D3 25 mcg (1,000 IU), and Magnesium Glycinate 120 mg.
- **Adult Digestive Support:** Ther-Biotic Complete Probiotic, Digestive Enzymes Ultra, Organic Whole Husk Psyllium, and Peppermint Oil G.I.
- **Adult Metabolic Wellness:** Berberine 500 mg, Alpha-Lipoic Acid 300, Magnesium Glycinate 120 mg, and O.N.E. Omega.

Fullscript products and bundles are paid for separately by the patient. The website should describe them as clinician-recommended general nutrition or wellness support and should not promise that supplements diagnose, treat, cure, or prevent disease.

## Deployment status

- Working branch: `agent/stripe-checkout-preview`
- Latest published commit: `138507e` — **Fix focused care summary pricing layout**
- Review site: https://review.goapexvitality.com
- Public production deployment was promoted in Vercel and verified at https://www.goapexvitality.com.
- The Focused Care summary now renders with the compact 36 px price, 12 × 18 px padding, and a rounded inset on the public site.

## Next-conversation handoff

- Repository folder: `/Users/johnbagby/Documents/Codex/2026-07-14/let/apex-vitality-stripe-ready`
- Continue from this wiki and the `agent/stripe-checkout-preview` branch.
- Keep responses concise and action oriented; the owner prefers the shortest practical workflow.
- Close temporary testing and verification tabs as work is completed. Keep active Fullscript, Charm, GitHub, Stripe, Strive, and Vercel working tabs when they are still needed.
- Before stating that a website change is finished, verify both the preview deployment and the public `www.goapexvitality.com` page.
- Obtain explicit approval before pushing a new commit or promoting a preview deployment to the public site.

## Operating notes

- Do not publish a personal phone number on the site.
- Patient medical information and care communication should use the secure Charm patient portal.
- Strive medication and pharmacy pricing remain separate from Apex clinical-care charges.
- LegitScript certification remains relevant to future advertising and partner requirements; certification is not represented as complete.
