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

## August 22 updates

- Connected the live $39-plus-membership Stripe checkout.
- Corrected the dead **Begin Peptide Care** button.
- Sent treatment-card purchase buttons directly into the care-selection and checkout flow.
- Removed unnecessary questionnaire detours from the principal Men's Health and Medical Weight Loss purchase buttons.
- Removed the illustrative-packaging label and description from the Medical Weight Loss lifestyle image.
- Restyled the self-pay agreement with the site's soft teal, blue, and warm neutral palette.
- Kept separate, affirmative acknowledgments for the self-pay terms and automatic monthly renewal.

## Operating notes

- Do not publish a personal phone number on the site.
- Patient medical information and care communication should use the secure Charm patient portal.
- Strive medication and pharmacy pricing remain separate from Apex clinical-care charges.
- LegitScript certification remains relevant to future advertising and partner requirements; certification is not represented as complete.
