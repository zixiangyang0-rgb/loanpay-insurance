# loanpay-insurance DESIGN.md — codifies network contract before code

Source: `.omo/upgrade-20261115/DESIGN.md` (sole upstream, X04) + `CONTRACT.md` + `AUDIT-SYNTHESIS.md`.
Scope: showcase only. No product edits, no formula changes, no canonical/consent changes in this task.

## Tokens: surface / ink / accent / line

| Token | Value | Usage cap |
|---|---|---|
| Surface navy | `#07111F` → `#0B1627` → `#050A12` gradient (existing `globals.css`) | Page + ToolIsland islands stay dark; do not invert |
| Ink ivory | `#F7F4EE` | Body text on dark; result figures |
| Muted | `#94A3B8`-class / `#CBD5E1` secondary | Ledes, hints, table meta; never for primary results |
| Line | `rgba(255,248,235,.12)` | Borders, dividers |
| Accent steel-blue | `#8FB7FF` | Links / focus rings / active ONLY, max 10% pixels |
| Signal red (errors only) | Dark-bg `#FFB4A8` message; ivory-insert `#B42318` on `#F7F4EE` | Field-level errors only; never decoration, badges, CTAs |
| Ivory scoped | `#F7F4EE` bg with `#1B2A45` / `#4A5A75` ink | Hero figure placeholder ONLY (contract §3: hero figure only) |
| CTA | Steel-blue solid `#8FB7FF` bg + `#0A1526` ink | Primary action only; hover darken 8% via brightness filter |

Contrast pairs verified (author-checked, not measured render PASS):
- `#F7F4EE` on `#07111F` — body.
- `#8FB7FF` on `#07111F` — links/focus (large + UI affordance; body links underlined).
- `#0A1526` on `#8FB7FF` — primary button text.
- `#B42318` on `#F7F4EE` — ivory-insert error specimen.
- `#FFB4A8` on `#0A1526`/`#07111F` — dark-bg error message.
Claim no Lighthouse numbers, no CMP compliance, no measured visual PASS (per task MUST NOT).

## Type

- Display: `Georgia, "Times New Roman", "Source Serif 4", serif`, tracking `-0.01em`, weights 600–700. Used for wordmark accent, hero H1, section H2, card titles.
- Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`, line-height 1.6–1.75; tool labels 1.4.
- Numeric hierarchy (binding): `font-variant-numeric: tabular-nums`; primary 28px / secondary 22px / meta 16px; never gradient-filled amounts. Eyebrow labels 12–13px uppercase `0.08em` only.
- Mono: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` for code/technical labels only (12px/1.6).

## Spacing / radius / depth / motion

- Scale 4/8/12/16/24/32/48/64/96. Section rhythm 64 desktop / 40 mobile. Island padding 24 desktop / 16 mobile. Container `max-w-5xl` (existing header/footer pattern); hero media `max-w-6xl`. Gutters 24 / 16.
- Radius: 4px inputs, 8–12px cards, 16–20px hero/figure media only.
- Depth: single `0 10px 28px -18px rgba(0,0,0,.25)` class only. No multi-glow, no full-page backdrop-blur on scrolling content.
- Motion: `color/background/border-color 150ms ease, transform 200ms ease`; `transform/opacity` only. `prefers-reduced-motion: reduce` disables all transform. Focus visible always: `2px solid #8FB7FF + 2px offset`, never removed.

## Primitives map: local classes → 8 network primitives + states

Existing local patterns preserved (`app/layout.tsx` Header/Footer + `max-w-5xl`, `globals.css` dark navy/glass). Showcase harness re-expresses them with zero-dep inline CSS; product mapping happens at rollout, not here.

1. `SiteHeader` → `.sitehead` + `.wordmark.serif` + `.nav-inline` + `.hamb` + `.nav-panel`. States: default / hover (underline offset 3px) / focus-visible ring / expanded (in-flow panel pushes content, `aria-expanded`, never overlays inputs) / disabled n/a. Mobile ≤760px: inline nav hidden, hamburger shown.
2. `SiteFooter` → `footer#footer`. Network row preserves existing destinations (About, Privacy Policy, Terms, Disclaimer, Contact + LoanPay Logic Network: Mortgage & Loan, Auto Financing, Home Upkeep, Pet Care). No sticky behavior. No canonical changes.
3. `HomeHero` → `.hero` split 55/45 desktop, stacked tablet/mobile; media max-height 420 / 300 / 220. Eyebrow + serif display + lede + 1 primary CTA + 1 secondary link. No inputs inside hero. Longest-title stress string wraps ≤3 lines at 375px. Scrim rule: no text-over-unchecked-photo; current specimen is ivory placeholder, not a photo.
4. `ToolIsland` → `.island` + `form#demof` + `.ledger` + `.skel`. Illustrative DEMO only: `monthly illustration = annual DEMO ÷ 12`; deductible shown as separate arithmetic line. Labels for every input, `aria-describedby`, value preserved on error. States: default / hover (button darken 8%) / focus-visible / error (ruby message + `aria-describedby`) / disabled (`opacity .55` + `not-allowed`) / calculating (`aria-busy` + inline skeleton in result area only) / reduced-motion (instant swap). Results carry unit + assumption + methodology link. Formulas, links, canonical, consent untouched.
5. `LedgerTable` → `.tscroll` + sticky first column. Illustrative coverage comparison (Liability / Full / Umbrella-DEMO rows). Header ivory-on-dark `#0E1C33`; row hover wash only. Mobile horizontal scroll, `tabindex="0"` with label.
6. `Figure` → `.figbox` placeholder (ABSENT). Explicit sizing reserved (`width/height + aspect-ratio + sizes` at insertion). Requires before any insertion: source page, creator, license, local AVIF/WebP ×3 under `public/photos/` + `RECORD.md` row. Topic-true candidate direction only: rainy windshield detail, no crash gore; no staff/client/reviewer faces. Decorative → `alt=""`; informative → meaningful alt.
7. `GuideCard` → `.grid3` + `.gcard` + `.badge`. Title serif 2-line clamp + 1-line desc + badge (Guide/Calculator) + SVG-free arrow `→` (text glyph, no emoji). Hover `translateY(-2px)` + shadow only; none under reduced-motion. Grid 3 / 2 / 1 col.
8. `Disclosure/Consent` → `.consent[role=dialog]` + `#cstate`. Methodology + ad-choice + consent-state line. Never in hero; never auto-dismissed; visible dialog semantics. AdSlot positions preserved; ads never between inputs and results.

## Hero

- Chosen photo: NONE (absent pending verification). Placeholder ivory panel states required record row before insertion.
- Max-height: 420 desktop / 300 tablet / 220 mobile. Split text 55% / figure 45% at 1280.
- Longest-title stress: "Understanding How Annual Premiums, Deductibles, Liability Limits, and Multi-Policy Discounts Interact Across Auto and Home Coverage" — must wrap ≤3 lines at 375px with no overflow, no document overflow.
- Longest-result stress: `9,999,999.00 USD — DEMO illustration only` at 375px, tabular numerals, wraps without overflow.

## Responsive: 375 / 768 / 1280 notes

- 1280: hero split; LedgerTable full width; Guide grid 3-col; ToolIsland prioritized below compact intro (no large hero before tool on tool routes — showcase hero is a type specimen only).
- 768: hero stacks (text over media, 300px); guide 2-col; header condensed inline if ≤6 links else hamburger; ToolIsland full width.
- 375: single column; media 220px; GuideCard 1-col; LedgerTable scroll + sticky first col; header hamburger + in-flow panel; no new fixed bottom bar; consent behavior preserved. No document overflow with stress strings.
- Harness screenshot targets (approval requires real renders — NOT claimed here): 375 / 768 / 1280 full-page captures of `showcases/insurance/index.html` + longest-title stress visible.

## Harness

- Path: `.omo/upgrade-20261115/showcases/insurance/index.html` (single file, inline CSS/JS, zero dependencies).
- Screenshot paths (reserved, not captured in this task): same directory `375.png`, `768.png`, `1280.png` + `375-longest-title.png`.
- Approval sign-off: pending real-browser renders. This task claims no measured visual PASS.

## Boundaries

- Formulas / links / canonical / consent preserved; no new deps; no product-route edits.
- Only 2 files owned by this task: this DESIGN.md + the harness above.
- Photography: no hotlinking, no generated images as photography, no stock faces as staff/clients/reviewers, no endorsement implication.
- No `aggregateRating`/credential claims in copy or captions; no fake reviewers/dates/verified stamps.
- No commits/push/deploy/AdSense review/account changes. Preserve `next-env.d.ts` + all uncommitted work. No `.omo/plans` writes. No product code/tests/formulas/next-env/git/deploy writes. No compliant-CMP or measured-PASS claims.

## Local rollout 2026-11-15 — Coverage Decision Aid (homepage only, per DISTINCT row 4)

- Tokens (homepage `.ins-light` scope only): fog `#F2F4F6` bg, ink `#1E2732`, line `#CBD4DE`,
  deep `#2B3542` (thead + pressed profile), accent blue `#1D4ED8` links/focus/rings (≤10%),
  cards/note `#FFFFFF`. Body + 32 guide/tool routes + `.glass-*` dark islands unchanged.
- Type: humanist system sans site-wide on `/`, no serif display; tabular numerals where amounts
  appear (matrix inherits, no gradient-filled amounts).
- Composition: hero (eyebrow + H1 + lede + licensed figure) → profile switcher → sticky-col
  matrix → group indexes (27 links) → home AdSlot (same slot/position) → trust note. No inputs
  in hero; no sticky-bottom sheet; ads never between tool inputs/results.
- Nav: coverage switcher (Renter/Owner/Family, `aria-pressed`) + column dim/hide + 5 group
  indexes; layout chrome + 10 hrefs + `/` canonical dirt preserved byte-identical.
- Photo: `public/photos/insurance.webp` 1400x933 (byte copy of verified finance asset, CC BY-SA 4.0,
  Samuel Phillips via Wikimedia Commons); caption carries source + license links + CSS-crop notice;
  interior reuse must change crop/position, never repeat composition.
- Matrix criteria (all actual routes, no blanket promise): columns renters/homeowners/liability-vs-full/
  umbrella; rows covers/limit-shape/exclusion/start-here with 14 deep links; inline exclusions
  (flood/quake separate, own-car gap, business/intentional); `not a quote` + disclaimer link inline.
- Responsive: matrix 640px min-width inside focusable `tabindex=0` region + visible scroll cue;
  grids 3/2/1 col; reduced-motion disables transforms. 375/768/1280 captures: parent browser 15.
- Boundaries honored: estimators + bundle worksheet + bundling explainer + all canonicals/robots/
  sitemap/consent/AdSlots untouched; `coverage-decision.test.mjs` 12/12 + discovery 13/13 +
  baseline 19/19 + `tsc --noEmit` clean + `next build` 37/37. Report:
  `.omo/upgrade-20261115/rollout/insurance.md`.
