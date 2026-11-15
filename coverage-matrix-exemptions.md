# CoverageMatrix coverage — covered vs gaps (2026-11-15)

Own path only: `loanpay-insurance/coverage-matrix-exemptions.md`.
Machine contract for gap routes. No prose pins, no formula changes.

## Covered (28 routes reference CoverageMatrix or coverage-shell)

- Home (`app/page.tsx`): `from "../components/CoverageMatrix"` + `<CoverageMatrix />`
  (matrix table `id="coverage-matrix"` lives inside the component; no native
  `<table>` in `app/page.tsx` itself — intentional, not a gap).
- 27 interiors via `from "../../components/coverage-shell"` + `<CoverageShell>`:
  auto-insurance-cost-calculator, bundling-home-auto-insurance,
  california-homeowners-insurance-guide, copay-vs-coinsurance-vs-deductible,
  disability-insurance-guide, flood-insurance-guide,
  florida-homeowners-insurance-guide, health-insurance-marketplace-guide-2026,
  home-auto-bundle-savings-calculator, homeowners-insurance-cost-guide,
  how-insurance-premiums-are-calculated, how-much-does-flood-insurance-cost-by-zone,
  how-much-life-insurance-do-i-need, hsa-vs-fsa-guide,
  insurance-claims-process-guide, insurance-deductible-explained,
  liability-vs-full-coverage-auto, life-insurance-cost-by-age-chart,
  long-term-care-insurance-guide, new-york-health-insurance-guide,
  pet-insurance-guide, renters-insurance-guide, term-life-insurance-calculator,
  texas-auto-insurance-guide, travel-insurance-guide, umbrella-insurance-explained,
  whole-life-vs-term-life.

## Gaps with documented opt-out (5 routes, 0 tables each — exempt)

No `<table>` in any of these 5 (verified `grep -c '<table' == 0`).
Legal/info pages carry no comparison matrix, so neither `CoverageMatrix`
nor `coverage-shell` applies. Opt-out is intentional:

- about (`app/about/page.tsx`) — 0 tables — exempt (info page)
- contact (`app/contact/page.tsx`) — 0 tables — exempt (info page)
- disclaimer (`app/disclaimer/page.tsx`) — 0 tables — exempt (legal page)
- privacy-policy (`app/privacy-policy/page.tsx`) — 0 tables — exempt (legal page)
- terms (`app/terms/page.tsx`) — 0 tables — exempt (legal page)

Rule: any future `<table>` added to one of these 5 MUST first wrap the route
with `coverage-shell`/`CoverageMatrix` (see `components/coverage-shell.tsx`,
`components/CoverageMatrix.tsx`) before shipping.

## AdSlots preserved

All `slot="TODO-insurance-*"` AdSlot usages untouched (13 usages across
`app/page.tsx`, `app/layout.tsx`, auto/term-life/homeowners calculators).
No slot renamed, removed, or rewired by this change (this file adds no code).

## Verify

- `grep -rL "CoverageMatrix\|coverage-shell" app --include="page.tsx"`
  → exactly the 5 exempt routes above.
- `node --test coverage-interiors.test.mjs` → 11 pass.
- `node --test coverage-decision.test.mjs` → 12 pass.
- `npx tsc --noEmit` → 0 errors.
