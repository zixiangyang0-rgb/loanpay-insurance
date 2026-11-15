// coverage-interiors — Coverage Decision Aid interior integration (local, 2026-11-15).
// Own path only: loanpay-insurance/coverage-interiors.test.mjs
// Reads loanpay-insurance sources read-only. Machine fields only, no prose pins.
// Covers: (S1 happy) 27 interiors explicitly opt into fog/humanist-sans reading
// shell via CoverageShell; (S2 edge) labeled focusable local table scroll with
// visible cue, no new document clipping; (S3 adjacent) estimator islands +
// metadata/links/consent/ad slots byte-preserved.
// Run: node --test coverage-interiors.test.mjs
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), ".");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const sha256rel = (rel) =>
  createHash("sha256").update(readFileSync(join(root, rel))).digest("hex");

const INTERIORS = [
  "auto-insurance-cost-calculator",
  "bundling-home-auto-insurance",
  "california-homeowners-insurance-guide",
  "copay-vs-coinsurance-vs-deductible",
  "disability-insurance-guide",
  "flood-insurance-guide",
  "florida-homeowners-insurance-guide",
  "health-insurance-marketplace-guide-2026",
  "home-auto-bundle-savings-calculator",
  "homeowners-insurance-cost-guide",
  "how-insurance-premiums-are-calculated",
  "how-much-does-flood-insurance-cost-by-zone",
  "how-much-life-insurance-do-i-need",
  "hsa-vs-fsa-guide",
  "insurance-claims-process-guide",
  "insurance-deductible-explained",
  "liability-vs-full-coverage-auto",
  "life-insurance-cost-by-age-chart",
  "long-term-care-insurance-guide",
  "new-york-health-insurance-guide",
  "pet-insurance-guide",
  "renters-insurance-guide",
  "term-life-insurance-calculator",
  "texas-auto-insurance-guide",
  "travel-insurance-guide",
  "umbrella-insurance-explained",
  "whole-life-vs-term-life",
];

const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(
      /href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g,
    )].map((m) => m[1] ?? m[2] ?? m[3]),
  );

const EXPECTED_CALC_SHA256 = {
  "app/term-life-insurance-calculator/calculator.tsx":
    "f136563700f5926b86ab2e615abe2e3a3213d949e541bbfe51b2e5a2ebd4917b",
  "app/auto-insurance-cost-calculator/calculator.tsx":
    "a7544e11c0caa5dbb8fef4eab7055e0a02076dc460182c09651cfc5da66e0e3d",
  "app/how-much-life-insurance-do-i-need/calculator.tsx":
    "2b6266698dcb92a179cc71ccefe1808d5a013bdd7101a46c4b846d1ce5d5c1a8",
};

describe("S1 happy — 27 interiors opt into fog Coverage shell", () => {
  it("Given 27 routes When listed Then all 27 page.tsx exist", () => {
    assert.equal(INTERIORS.length, 27);
    for (const slug of INTERIORS) {
      assert.ok(existsSync(join(root, "app", slug, "page.tsx")), `missing ${slug}`);
    }
  });
  it("Given 27 interiors When read Then each opts into CoverageShell exactly once", () => {
    for (const slug of INTERIORS) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(
        src.includes('from "../../components/coverage-shell"'),
        `${slug}: missing coverage-shell import`,
      );
      assert.equal((src.match(/<CoverageShell>/g) || []).length, 1, `${slug}: open tag`);
      assert.equal((src.match(/<\/CoverageShell>/g) || []).length, 1, `${slug}: close tag`);
    }
  });
  it("Given 27 interiors When read Then gradient hero replaced by fog title hook", () => {
    for (const slug of INTERIORS) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(!src.includes("hero-title"), `${slug}: gradient hero-title remains`);
      assert.ok(src.includes("ins-interior-title"), `${slug}: missing ins-interior-title`);
    }
  });
  it("Given shell component When read Then bounded pure-component file, no any/deps", () => {
    const rel = "components/coverage-shell.tsx";
    assert.ok(existsSync(join(root, rel)), "missing coverage-shell.tsx");
    const src = read(rel);
    const pureLoc = src.split("\n").filter((l) => l.trim() !== "" && !l.trim().startsWith("//")).length;
    assert.ok(pureLoc <= 250, `shell too large: ${pureLoc}`);
    assert.ok(!src.includes("any"), "shell must not use any");
    assert.ok(src.includes("CoverageShell"), "missing CoverageShell export");
    assert.ok(src.includes("ins-interior"), "missing ins-interior scope hook");
  });
  it("Given globals.css When read Then scoped fog/humanist-sans treatment exists", () => {
    const css = read("app/globals.css");
    assert.ok(css.includes(".ins-interior"), "missing .ins-interior scope");
    assert.ok(css.toLowerCase().includes("#f2f4f6"), "missing fog #F2F4F6");
    assert.ok(css.includes("#1E2732") || css.includes("#1e2732"), "missing ink #1E2732");
    assert.ok(css.includes("#1D4ED8") || css.includes("#1d4ed8"), "missing blue #1D4ED8");
    assert.ok(css.includes(".ins-interior-title"), "missing .ins-interior-title");
    assert.ok(css.includes(".ins-twrap"), "missing .ins-twrap");
    assert.ok(css.includes(".ins-scrollcue"), "missing .ins-scrollcue");
    assert.ok(css.includes("prefers-reduced-motion"), "missing reduced-motion");
    assert.ok(!css.match(/(^|[^a-zA-Z-])body\s*\{[^}]*background:\s*#f2f4f6/i), "must not globally invert body to fog");
    assert.ok(!css.match(/\*\s*\{[^}]*[;{\s]color\s*:/m), "must not add blanket * color selector");
  });
});

describe("S2 edge — labeled focusable local table scroll, no new doc clip", () => {
  it("Given 27 interiors When read Then each table sits in labeled focusable ins-twrap with visible cue", () => {
    let tables = 0;
    for (const slug of INTERIORS) {
      const src = read(`app/${slug}/page.tsx`);
      const tableCount = (src.match(/<table/g) || []).length;
      const wrapCount = (src.match(/ins-twrap/g) || []).length;
      const cueCount = (src.match(/ins-scrollcue/g) || []).length;
      tables += tableCount;
      assert.ok(tableCount >= 1, `${slug}: expected >=1 table`);
      assert.ok(wrapCount >= tableCount, `${slug}: table without ins-twrap`);
      assert.ok(cueCount >= tableCount, `${slug}: table without visible cue`);
      assert.ok(src.includes("tabIndex={0}"), `${slug}: missing tabIndex={0}`);
      assert.ok(src.includes('role="region"'), `${slug}: missing role=region`);
      assert.ok(src.includes("aria-label="), `${slug}: missing aria-label`);
      assert.ok(src.includes("Scroll horizontally"), `${slug}: missing visible cue text`);
    }
    assert.equal(tables, 27, `expected exactly 27 tables, saw ${tables}`);
  });
  it("Given globals.css When read Then table wrap is overflow-x auto, no new doc clip", () => {
    const css = read("app/globals.css");
    const wrapIdx = css.indexOf(".ins-twrap");
    assert.ok(wrapIdx >= 0, "missing .ins-twrap");
    assert.ok(css.slice(wrapIdx, wrapIdx + 400).includes("overflow-x"), "wrap missing overflow-x");
    const clips = (css.match(/overflow-x:\s*clip/g) || []).length;
    assert.equal(clips, 2, `doc clip count changed (html+body pre-existing =2), saw ${clips}`);
  });
});

describe("S3 adjacent — estimator islands/metadata/links/consent/ad slots preserved", () => {
  it("Given 3 estimator islands When hashed Then bytes unchanged (no formula drift)", () => {
    for (const [rel, expected] of Object.entries(EXPECTED_CALC_SHA256)) {
      assert.equal(sha256rel(rel), expected, rel);
    }
  });
  it("Given 3 estimator islands When read Then dark contrast + labels intact", () => {
    for (const rel of Object.keys(EXPECTED_CALC_SHA256)) {
      const src = read(rel);
      assert.ok(src.includes("glass-card"), `${rel}: dark island class removed`);
      assert.ok(src.includes("estimator"), `${rel}: estimator label removed`);
      assert.ok(src.includes("Illustrative"), `${rel}: Illustrative string removed`);
      assert.ok(src.includes("htmlFor"), `${rel}: label htmlFor removed`);
    }
    assert.ok(
      read("app/term-life-insurance-calculator/calculator.tsx").includes("Illustrative estimate: ${est}/month"),
      "term result string drift",
    );
  });
  it("Given 27 interiors When parsed Then canonicals + disclaimer + schema preserved", () => {
    for (const slug of INTERIORS) {
      const src = read(`app/${slug}/page.tsx`);
      const m = src.match(/canonical\s*:\s*["']([^"']+)["']/);
      assert.ok(m, `${slug}: canonical missing`);
      assert.equal(m[1], `https://insurance.loanpaylogic.com/${slug}`, `${slug}: canonical drift`);
      assert.ok(src.includes("/disclaimer"), `${slug}: disclaimer link removed`);
    }
  });
  it("Given layout + consent + schema When read Then no interior scope leaks into chrome", () => {
    assert.ok(!read("app/layout.tsx").includes("ins-interior"), "layout must not gain interior scope");
    assert.ok(!read("app/layout.tsx").includes("CoverageShell"), "layout must not import shell");
    assert.ok(read("components/consent.tsx").length > 100, "consent unexpectedly small");
    assert.ok(read("components/schema.tsx").length > 500, "schema unexpectedly small");
  });
});
