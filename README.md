# Apex Vitality website

The active men's-health site is https://www.goapexvitality.com. Start with [WIKI.md](WIKI.md) for current product decisions, integration limits, and the next work items.

## Source of truth

- Repository: `Nurseguy1/Apex-Vitality` on GitHub.
- Canonical branch: `main` (synchronized with the published October 16, 2026 design).
- Active checkout: `/Users/johnbagby/Documents/Codex/2026-07-14/let/apex-vitality-stripe-ready`.
- Production Vercel project: `apex-vitality`, team `abcdef4`.
- Older dated folders and the ChatGPT Sites copy are historical; do not deploy from them.

## Local development

Use the Node version required in `package.json` and the checked-in `pnpm-lock.yaml`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Before publishing application changes:

```sh
pnpm exec tsc --noEmit
pnpm run build
```

Create a focused branch from updated `main`, inspect its diff, and verify the Vercel preview before publishing through the `apex-vitality` project. Check the public URL after publication. Do not substitute the legacy `create-a` project. Preserve old production deployments for rollback.

## Key files

| Area | Source |
| --- | --- |
| Homepage and men's-health landing page | `app/MensLanding.tsx`, `app/page.tsx`, `app/mens-health/page.tsx` |
| Consultation calendar | `app/book-consultation/page.tsx`, `app/components/CaliforniaBooking.tsx` |
| Monthly enrollment | `app/start/`, `app/lib/product-checkouts.ts`, `app/lib/product-offers.ts` |
| Annual enrollment | `app/checkout/annual/`, `app/lib/membership-catalog.ts` |
| Post-payment verification and booking | `app/membership-complete/page.tsx`, `app/lib/stripe-checkout.ts` |
| Corporate entry | `app/corporate-enrollment/page.tsx` |
| Patient instructions | `app/faq/page.tsx`, `app/patient-access/page.tsx` |
| Shared header/footer and search metadata | `app/components.tsx`, `app/layout.tsx` |

## Secrets

Keep credentials in Vercel environment variables and ignored `.env.local`. Never commit keys, patient records, sponsor billing details, or environment dumps. `.env.example` is a variable-name template, not proof that an integration is configured. The local Stripe key is not usable; do not replace it with a live key in Git.
