Historical operations notes retained October 18, 2026. Earlier pricing, visit names, and availability are historical; current policies are in WIKI.md.

# Charm Operations

[Back to wiki home](README.md)

## Completed July 18, 2026

- Renamed both the Charm practice and facility to **Apex Vitality**.
- Set the provider time zone to US/Pacific.
- Set regular provider availability to Monday–Friday, 8:00 a.m.–4:00 p.m.
- Left Saturday and Sunday unavailable.
- Enabled patient online appointment booking for FNP John Bagby at Apex Vitality.
- Left the existing Pediatric Questionnaire unassigned because the practice does not treat minors.

## Medicare private-contract draft

- Created a Charm Consent Form named **DRAFT – Medicare Private Contract – DO NOT USE**.
- Added a prominent compliance-review warning.
- The draft is not assigned to patients and is not approved for use.
- Before approval, add the complete CMS-required terms, verified practitioner identity, Medicare exclusion-status statement, verified opt-out effective dates, beneficiary acknowledgment, and signature/date fields.
- Obtain legal/compliance review and confirm the practitioner’s Medicare opt-out status with the applicable Medicare Administrative Contractor before assigning the form.

## Two-visit telehealth workflow — July 28, 2026

- Created **New Patient Lab-Planning Visit**.
- Mode: Video Consult.
- Duration: 15 minutes.
- Charge: $59.
- Assigned the visit type to FNP John Bagby.
- Enabled it for public online self-scheduling without manual approval.
- Kept public availability Monday-Friday, 8:00 a.m.-4:00 p.m.
- Removed the older 45-minute New Patient Visit from public self-scheduling.
- The older 45-minute visit remains available internally for the comprehensive results-and-treatment stage.

### Intended patient journey

1. Patient completes the adult history, medication, allergy, symptom, goal, and telehealth-consent forms.
2. Patient makes the one-time $39 initial-care payment, selects the applicable membership, and schedules the appointment included with that membership.
3. Clinician confirms identity, location, consent, history, safety considerations, goals, and appropriate laboratory orders during the applicable clinical-care visit.
4. Patient completes laboratory testing when ordered.
5. Apex reviews incoming results and escalates urgent abnormalities without waiting for a routine follow-up.
6. Clinician interprets the results in context, develops the plan, prescribes when clinically appropriate, documents recommendations, and establishes monitoring and follow-up.

The former 15-minute **New Patient Lab-Planning Visit** at $59 was retired September 4, 2026. It should remain unavailable for public self-scheduling and be preserved only for historical appointment records.

## July 30, 2026 live booking test

- Completed a live new-patient test through the Apex Vitality website and embedded Charm scheduler.
- The $59 payment-complete page opened the correct **New Patient Lab-Planning Visit** calendar.
- Booked the 11:00–11:15 a.m. appointment as a new patient.
- Charm sent a confirmation, marked the visit **Confirmed**, removed the slot from public availability, and created a new patient record.
- The streamlined **Apex Vitality – Brief New Patient Intake**, Consent to Care/Telehealth/Communications, and HIPAA acknowledgment are assigned to both new-patient visit types.
- The clinician-side Questionnaire view contains no answers until the patient submits the forms; this is expected.

## Online scheduling still needed

- Test the confirmation-message portal/forms link with the test patient when the test partner is available.
- Confirm that all three assigned forms appear and submit correctly on the patient side.
- Confirm the patient confirmation message, laboratory instructions, reminders, cancellation policy, buffers, and lead time.
- Decide whether the internal 45-minute visit should be renamed **Comprehensive Results & Treatment Visit**.
- Continue testing the active journey: $39 initial-care payment → membership enrollment → forms → video link → included visit → laboratory order → results review.
- Test the complete scheduling and forms experience on common phone widths. Pay special attention to the Charm iframe, horizontal overflow, button sizing, text legibility, and calendar interaction.

## Quest laboratory templates — September 4, 2026

Quest is connected in Charm. A dummy-chart ordering test reached the expected laboratory workflow, and the diagnosis-selection problem was corrected. No real order was transmitted.

### Men's Health Baseline

The existing **Apex Vitality – Men's Health Baseline** contains:

- TESTOSTERONE, FREE, BIOAVAILABLE AND TOTAL, MS [14966]
- ESTRADIOL,ULTRASENSITIVE, LC/MS [30289]
- DHEA SULFATE [402]
- CBC (INCLUDES DIFF/PLT) [6399]
- COMPREHENSIVE METABOLIC PANEL [10231]
- Lipid Panel [7600]
- PSA (FREE AND TOTAL) [31348]
- Hemoglobin A1c [496]
- Insulin [561]
- VITAMIN D,25-OH,TOTAL,IA [17306]
- VITAMIN B12/FOLATE, SERUM PANEL [7065]
- HS CRP [10124]
- TSH W/REFLEX TO FT4 [36127]

Pending revision: add Luteinizing Hormone (LH) [615] and FSH [470].

### Women’s Health Baseline

The saved **Apex Vitality – Women’s Health Baseline (Draft)** contains:

- CBC (INCLUDES DIFF/PLT) [6399]
- COMPREHENSIVE METABOLIC PANEL [10231]
- DHEA SULFATE [402]
- ESTRADIOL,ULTRASENSITIVE, LC/MS [30289]
- FSH [470]
- Hemoglobin A1c [496]
- HS CRP [10124]
- Insulin [561]
- Lipid Panel [7600]
- Luteinizing Hormone (LH) [615]
- TESTOSTERONE, FREE, BIOAVAILABLE AND TOTAL, MS [14966]
- TSH W/REFLEX TO FT4 [36127]
- VITAMIN B12/FOLATE, SERUM PANEL [7065]
- VITAMIN D,25-OH,TOTAL,IA [17306]

The template comment states that it is a baseline draft and that the clinician must individualize orders based on age, menstrual or menopausal status, symptoms, medications, pregnancy status, and clinical indication.

Still to build: metabolic-health, gut-health, and longevity templates. All templates require clinician review and individualization before use; template creation does not itself place a patient order.

## Safety notes

- Do not assign the pediatric form unless the practice begins treating minors and completes the appropriate pediatric workflows.
- Do not assign or publish the Medicare private-contract draft until all required terms and dates are verified and the form is approved.
