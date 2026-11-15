import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), ".");
const read = (p) => readFileSync(join(root, p), "utf8");

const SELF_CANONICAL = {
  "app/about/page.tsx": "https://insurance.loanpaylogic.com/about",
  "app/contact/page.tsx": "https://insurance.loanpaylogic.com/contact",
  "app/privacy-policy/page.tsx": "https://insurance.loanpaylogic.com/privacy-policy",
  "app/terms/page.tsx": "https://insurance.loanpaylogic.com/terms",
  "app/disclaimer/page.tsx": "https://insurance.loanpaylogic.com/disclaimer",
};

describe("self-canonical (happy)", () => {
  for (const [file, url] of Object.entries(SELF_CANONICAL)) {
    it(`${file} exposes absolute self-canonical ${url}`, () => {
      const src = read(file);
      assert.match(
        src,
        new RegExp(`canonical:\\s*["']${url.replace(/[./]/g, (c) => `\\${c}`)}["']`),
        `${file} must contain alternates.canonical = "${url}"`,
      );
    });
  }
});

describe("discoverability (happy)", () => {
  it("homepage links flood-zone cost page", () => {
    assert.match(read("app/page.tsx"), /\/how-much-does-flood-insurance-cost-by-zone/);
  });
  it("homepage links bundle calculator page", () => {
    assert.match(read("app/page.tsx"), /\/home-auto-bundle-savings-calculator/);
  });
  it("flood-insurance-guide links zone cost page", () => {
    assert.match(
      read("app/flood-insurance-guide/page.tsx"),
      /href="\/how-much-does-flood-insurance-cost-by-zone"/,
    );
  });
  it("bundling-home-auto-insurance links bundle calculator page", () => {
    assert.match(
      read("app/bundling-home-auto-insurance/page.tsx"),
      /href="\/home-auto-bundle-savings-calculator"/,
    );
  });
});

describe("edge: canonical hygiene", () => {
  it("utility pages use absolute https canonical (no bare slash)", () => {
    for (const file of Object.keys(SELF_CANONICAL)) {
      const src = read(file);
      assert.doesNotMatch(src, /canonical:\s*["']\/["']/);
      assert.match(src, /canonical:\s*["']https:\/\/insurance\.loanpaylogic\.com\//);
    }
  });
  it("exactly one canonical declaration per utility page", () => {
    for (const file of Object.keys(SELF_CANONICAL)) {
      const count = (read(file).match(/canonical:/g) ?? []).length;
      assert.equal(count, 1, `${file} must declare canonical exactly once`);
    }
  });
});

describe("regression: untouched contracts", () => {
  it("root layout canonical stays '/'", () => {
    assert.match(read("app/layout.tsx"), /canonical:\s*["']\/["']/);
  });
  it("existing guide/calculator canonicals unchanged", () => {
    assert.match(
      read("app/flood-insurance-guide/page.tsx"),
      /canonical:\s*["']https:\/\/insurance\.loanpaylogic\.com\/flood-insurance-guide["']/,
    );
    assert.match(
      read("app/bundling-home-auto-insurance/page.tsx"),
      /canonical:\s*["']https:\/\/insurance\.loanpaylogic\.com\/bundling-home-auto-insurance["']/,
    );
    assert.match(
      read("app/how-much-does-flood-insurance-cost-by-zone/page.tsx"),
      /canonical:\s*["']https:\/\/insurance\.loanpaylogic\.com\/how-much-does-flood-insurance-cost-by-zone["']/,
    );
    assert.match(
      read("app/home-auto-bundle-savings-calculator/page.tsx"),
      /canonical:\s*["']https:\/\/insurance\.loanpaylogic\.com\/home-auto-bundle-savings-calculator["']/,
    );
  });
});
