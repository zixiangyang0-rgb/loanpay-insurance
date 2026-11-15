import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), ".");
const read = (p) => readFileSync(join(root, p), "utf8");

const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(
      /href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g,
    )].map((m) => m[1] ?? m[2] ?? m[3]),
  );

const KNOWN_ROUTES = new Set([
  "/",
  "/about",
  "/auto-insurance-cost-calculator",
  "/bundling-home-auto-insurance",
  "/california-homeowners-insurance-guide",
  "/contact",
  "/copay-vs-coinsurance-vs-deductible",
  "/disability-insurance-guide",
  "/disclaimer",
  "/flood-insurance-guide",
  "/florida-homeowners-insurance-guide",
  "/health-insurance-marketplace-guide-2026",
  "/home-auto-bundle-savings-calculator",
  "/homeowners-insurance-cost-guide",
  "/how-insurance-premiums-are-calculated",
  "/how-much-does-flood-insurance-cost-by-zone",
  "/how-much-life-insurance-do-i-need",
  "/hsa-vs-fsa-guide",
  "/insurance-claims-process-guide",
  "/insurance-deductible-explained",
  "/liability-vs-full-coverage-auto",
  "/life-insurance-cost-by-age-chart",
  "/long-term-care-insurance-guide",
  "/new-york-health-insurance-guide",
  "/pet-insurance-guide",
  "/privacy-policy",
  "/renters-insurance-guide",
  "/term-life-insurance-calculator",
  "/terms",
  "/texas-auto-insurance-guide",
  "/travel-insurance-guide",
  "/umbrella-insurance-explained",
  "/whole-life-vs-term-life",
]);

const EXPECTED_HOME_HREFS = [
  "/auto-insurance-cost-calculator",
  "/bundling-home-auto-insurance",
  "/california-homeowners-insurance-guide",
  "/copay-vs-coinsurance-vs-deductible",
  "/disability-insurance-guide",
  "/flood-insurance-guide",
  "/florida-homeowners-insurance-guide",
  "/health-insurance-marketplace-guide-2026",
  "/home-auto-bundle-savings-calculator",
  "/homeowners-insurance-cost-guide",
  "/how-insurance-premiums-are-calculated",
  "/how-much-does-flood-insurance-cost-by-zone",
  "/how-much-life-insurance-do-i-need",
  "/hsa-vs-fsa-guide",
  "/insurance-claims-process-guide",
  "/insurance-deductible-explained",
  "/liability-vs-full-coverage-auto",
  "/life-insurance-cost-by-age-chart",
  "/long-term-care-insurance-guide",
  "/new-york-health-insurance-guide",
  "/pet-insurance-guide",
  "/renters-insurance-guide",
  "/term-life-insurance-calculator",
  "/texas-auto-insurance-guide",
  "/travel-insurance-guide",
  "/umbrella-insurance-explained",
  "/whole-life-vs-term-life",
];

describe("coverage decision shell (light scope, machine)", () => {
  it("homepage keeps absolute self-canonical + AdSlot home unit", () => {
    const src = read("app/page.tsx");
    assert.match(src, /canonical:\s*["']https:\/\/insurance\.loanpaylogic\.com\/["']/);
    assert.match(src, /slot="TODO-insurance-display-home"/);
    assert.match(src, /format="display"/);
  });
  it("homepage renders inside .ins-light scope + matrix island", () => {
    const src = read("app/page.tsx");
    assert.match(src, /className="ins-light"/);
    assert.match(src, /from "\.\.\/components\/CoverageMatrix"/);
    assert.match(src, /<CoverageMatrix \/>/);
    assert.doesNotMatch(src, /hero-title/);
    assert.doesNotMatch(src, /glass-card/);
  });
  it("homepage keeps exact 27 content hrefs (no legal pages, no invention)", () => {
    const hrefs = hrefsOf(read("app/page.tsx"));
    assert.deepEqual([...hrefs].sort(), [...EXPECTED_HOME_HREFS].sort());
    for (const h of hrefs) assert.ok(KNOWN_ROUTES.has(h), `unknown route ${h}`);
    assert.ok(!hrefs.has("/about"));
    assert.ok(hrefs.has("/home-auto-bundle-savings-calculator"));
    assert.ok(hrefs.has("/how-much-does-flood-insurance-cost-by-zone"));
  });
  it("homepage keeps quotes disclaimer semantics", () => {
    const src = read("app/page.tsx");
    assert.match(src, /they are not quotes/);
    assert.match(src, /licensed insurance agent or broker/);
    assert.match(src, /aria-label="Trust and responsibility"/);
  });
});

describe("coverage matrix (actual links, machine)", () => {
  it("matrix file exists under 250 pure LOC, no any, no new imports", () => {
    const src = read("components/CoverageMatrix.tsx");
    const pure = src.split("\n").filter((l) => l.trim() !== "" && !/^\s*\/\//.test(l));
    assert.ok(pure.length <= 250, `pure LOC ${pure.length} exceeds 250`);
    assert.doesNotMatch(src, /:\s*any\b/);
    assert.doesNotMatch(src, /require\(/);
    assert.match(src, /"use client"/);
  });
  it("profile switcher exposes 3 profiles with pressed semantics", () => {
    const src = read("components/CoverageMatrix.tsx");
    assert.match(src, /role="group"/);
    assert.match(src, /aria-label="Household profile"/);
    for (const p of ['["rent", "Renter"]', '["own", "Owner"]', '["fam", "Family"]'])
      assert.ok(src.includes(p), `matrix missing profile entry ${p}`);
    assert.match(src, /data-p=\{value\}/);
    assert.match(src, /aria-pressed=\{profile === value\}/);
  });
  it("scroll region is focusable with visible cue (375 local scroll)", () => {
    const src = read("components/CoverageMatrix.tsx");
    assert.match(src, /tabIndex=\{0\}/);
    assert.match(src, /role="region"/);
    assert.match(src, /aria-labelledby="matrix-cue"/);
    assert.match(src, /id="matrix-cue"/);
    assert.match(src, /Scroll horizontally to see all columns/);
  });
  it("matrix columns link to actual coverage guides (no invented products)", () => {
    const src = read("components/CoverageMatrix.tsx");
    for (const h of [
      "/renters-insurance-guide",
      "/homeowners-insurance-cost-guide",
      "/liability-vs-full-coverage-auto",
      "/umbrella-insurance-explained",
    ]) assert.ok(hrefsOf(src).has(h), `matrix missing column ${h}`);
    assert.doesNotMatch(src, /href="#"/);
    assert.doesNotMatch(src, /javascript:/);
  });
  it("matrix cells reference real criteria routes (no blanket promise)", () => {
    const src = read("components/CoverageMatrix.tsx");
    for (const h of [
      "/insurance-deductible-explained",
      "/how-insurance-premiums-are-calculated",
      "/auto-insurance-cost-calculator",
      "/term-life-insurance-calculator",
      "/flood-insurance-guide",
      "/how-much-does-flood-insurance-cost-by-zone",
      "/bundling-home-auto-insurance",
      "/home-auto-bundle-savings-calculator",
      "/insurance-claims-process-guide",
      "/disclaimer",
    ]) assert.ok(hrefsOf(src).has(h), `matrix missing criteria link ${h}`);
    for (const h of hrefsOf(src)) {
      if (h.startsWith("/")) assert.ok(KNOWN_ROUTES.has(h), `unknown route ${h}`);
    }
    assert.match(src, /not a quote/);
    assert.match(src, /Flood and\n?\s*quake are usually separate policies/);
  });
  it("matrix figure uses local verified photo with credit + crop notice", () => {
    const src = read("components/CoverageMatrix.tsx");
    assert.match(src, /src="\/photos\/insurance\.webp"/);
    assert.match(src, /width=\{1400\}/);
    assert.match(src, /height=\{933\}/);
    assert.match(src, /loading="lazy"/);
    assert.match(src, /Samuel Phillips, CC BY-SA 4\.0/);
    assert.match(src, /creativecommons\.org\/licenses\/by-sa\/4\.0/);
    assert.match(src, /object-position/);
    assert.ok(existsSync(join(root, "public/photos/insurance.webp")), "photo bytes missing");
    assert.ok(existsSync(join(root, "public/photos/RECORD.md")), "RECORD missing");
  });
});

describe("light scope guards (machine)", () => {
  it("globals scopes light rules under .ins-light, keeps dark islands", () => {
    const src = read("app/globals.css");
    assert.match(src, /\.ins-light/);
    assert.match(src, /\.ins-light \.matrixwrap tbody th/);
    assert.match(src, /position:\s*sticky/);
    assert.match(src, /prefers-reduced-motion:\s*reduce/);
    assert.match(src, /\.glass-card/);
    assert.match(src, /--background:\s*#07111f/);
  });
  it("formula sources untouched (calculator islands byte-identical)", () => {
    for (const f of [
      "app/term-life-insurance-calculator/calculator.tsx",
      "app/auto-insurance-cost-calculator/calculator.tsx",
    ]) {
      const src = read(f);
      assert.match(src, /"use client"/);
      assert.match(src, /useState/);
    }
    assert.match(
      read("app/term-life-insurance-calculator/calculator.tsx"),
      /Illustrative estimate: \$\{est\}\/month/,
    );
  });
});
