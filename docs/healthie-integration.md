# Healthie integration handoff

The public website is prepared for a Healthie-hosted patient workflow. No patient data should be sent through the website itself until the clinic has completed its privacy, security, and vendor configuration.

## Links needed from Healthie

Add these values in the Vercel project’s environment-variable settings. Do not commit them to the repository.

- `NEXT_PUBLIC_HEALTHIE_PORTAL_URL`: the branded Client Portal URL from Healthie Settings → Business → Branding → Client Portal.
- `NEXT_PUBLIC_HEALTHIE_BOOKING_URL`: the clinic’s Healthie appointment or package booking link.
- `NEXT_PUBLIC_HEALTHIE_INTAKE_URL`: the Healthie sharing link for the clinic’s complete intake flow.

After adding the values, redeploy the site. The `/patient-access` buttons will activate automatically.

## Forms to recreate in Healthie

Create these as Healthie Intake Forms and place them in the appropriate Intake Flows:

1. Men’s Vitality & Endocrine Screening
2. Metabolic & Weight Management Screening
3. Functional Gut & Cellular Health Intake
4. Medication & Contraindication Review (required for all programs)

Use Healthie Smart Fields where appropriate to avoid duplicate demographic and medication entry. Healthie’s shared intake flow already collects first name, last name, email, and phone, so those fields should not be duplicated in the custom forms.

## Recommended rollout

1. Configure business branding and the branded patient portal.
2. Create the four forms and three program-specific intake flows.
3. Add the universal medication review to every intake flow.
4. Attach each intake flow to the corresponding booking type or package.
5. Test with non-patient sample data in a test account.
6. Add the three public links to Vercel and redeploy.
7. Confirm provider notifications, chart placement, form status, consent, and retention settings before opening intake.

## Future server-to-server integration

The repository includes blank server-only settings for a later Healthie GraphQL and webhook integration. API keys must remain server-side and must never use the `NEXT_PUBLIC_` prefix. Before implementing an API connection, confirm the clinic’s Healthie plan/API access, execute required HIPAA/BAA agreements, create a least-privilege service account, define audit and retention requirements, and obtain the webhook signature secret. Do not log request bodies containing PHI.
