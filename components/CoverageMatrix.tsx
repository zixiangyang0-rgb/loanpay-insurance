"use client";

import { useState } from "react";
import Link from "next/link";

type Profile = "rent" | "own" | "fam";

const COPY: Record<Profile, string> = {
  rent: "Renter view: liability + belongings carry the weight; dwelling drops away.",
  own: "Owner view: dwelling + liability lead; belongings caps deserve a second look.",
  fam: "Family view: extra living costs join the core three; check daily caps.",
};

const COLUMNS: { key: string; profiles: Profile[]; label: string; href: string }[] = [
  { key: "rent", profiles: ["rent", "fam"], label: "Renter essentials", href: "/renters-insurance-guide" },
  { key: "own", profiles: ["own", "fam"], label: "Owner essentials", href: "/homeowners-insurance-cost-guide" },
  { key: "auto", profiles: ["rent", "own", "fam"], label: "Auto liability choice", href: "/liability-vs-full-coverage-auto" },
  { key: "extra", profiles: ["fam"], label: "Extra layer", href: "/umbrella-insurance-explained" },
];

export default function CoverageMatrix() {
  const [profile, setProfile] = useState<Profile>("rent");
  const [hideUnused, setHideUnused] = useState(false);

  function cellOn(col: (typeof COLUMNS)[number]): boolean {
    return col.profiles.includes(profile);
  }

  return (
    <section aria-label="Coverage decision matrix" className="ins-matrix">
      <div className="switch" role="group" aria-label="Household profile">
        {(
          [
            ["rent", "Renter"],
            ["own", "Owner"],
            ["fam", "Family"],
          ] as [Profile, string][]
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            data-p={value}
            aria-pressed={profile === value}
            onClick={() => setProfile(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="matrixwrap" tabIndex={0} role="region" aria-labelledby="matrix-cue">
        <p className="scrollcue" id="matrix-cue">
          Scroll horizontally to see all columns
        </p>
        <table id="coverage-matrix">
          <thead>
            <tr>
              <th scope="col">Standard</th>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  data-c={col.profiles.join(" ")}
                  style={
                    !cellOn(col)
                      ? hideUnused
                        ? { display: "none" }
                        : { opacity: 0.45 }
                      : undefined
                  }
                >
                  <Link href={col.href}>{col.label}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">What it covers</th>
              <td data-c="rent fam" style={!cellOn(COLUMNS[0]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                Liability for guests + belongings. <Link href="/renters-insurance-guide">Renters guide</Link>
              </td>
              <td data-c="own fam" style={!cellOn(COLUMNS[1]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                Dwelling rebuild + other structures. <Link href="/homeowners-insurance-cost-guide">Homeowners guide</Link>
              </td>
              <td data-c="rent own fam">
                Others you harm (100/300/100 frame). <Link href="/liability-vs-full-coverage-auto">Liability vs. full</Link>
              </td>
              <td data-c="fam" style={!cellOn(COLUMNS[3]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                $1M+ above auto + home. <Link href="/umbrella-insurance-explained">Umbrella guide</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Typical limit shape</th>
              <td data-c="rent fam" style={!cellOn(COLUMNS[0]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                Per-occurrence + category sub-limits. <Link href="/insurance-deductible-explained">Deductible guide</Link>
              </td>
              <td data-c="own fam" style={!cellOn(COLUMNS[1]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                Coverage A rebuild estimate. <Link href="/how-insurance-premiums-are-calculated">How premiums work</Link>
              </td>
              <td data-c="rent own fam">
                Split limits; test 100/300/100. <Link href="/auto-insurance-cost-calculator">Auto estimator</Link>
              </td>
              <td data-c="fam" style={!cellOn(COLUMNS[3]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                $1M first, then cheaper millions. <Link href="/term-life-insurance-calculator">Term estimator</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Common exclusion</th>
              <td data-c="rent fam" style={!cellOn(COLUMNS[0]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                The building itself; wear. <Link href="/flood-insurance-guide">Flood is separate</Link>
              </td>
              <td data-c="own fam" style={!cellOn(COLUMNS[1]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                Wear, earth movement, floods. <Link href="/how-much-does-flood-insurance-cost-by-zone">Flood cost by zone</Link>
              </td>
              <td data-c="rent own fam">
                Your own car under liability-only. <Link href="/bundling-home-auto-insurance">Bundling guide</Link>
              </td>
              <td data-c="fam" style={!cellOn(COLUMNS[3]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                Business + intentional acts. <Link href="/insurance-claims-process-guide">Claims guide</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Start here</th>
              <td data-c="rent fam" style={!cellOn(COLUMNS[0]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                <Link href="/renters-insurance-guide">Read renters guide</Link>
              </td>
              <td data-c="own fam" style={!cellOn(COLUMNS[1]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                <Link href="/homeowners-insurance-cost-guide">Read homeowners guide</Link>
              </td>
              <td data-c="rent own fam">
                <Link href="/home-auto-bundle-savings-calculator">Bundle worksheet</Link>
              </td>
              <td data-c="fam" style={!cellOn(COLUMNS[3]) ? (hideUnused ? { display: "none" } : { opacity: 0.45 }) : undefined}>
                <Link href="/umbrella-insurance-explained">Read umbrella guide</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="matrixnote">
        <p>
          <strong>Read before choosing.</strong> <span id="matrix-prose">{COPY[profile]}</span> Flood and
          quake are usually separate policies. This page compares categories — it is not a quote and
          names no insurer. Policy language always controls; confirm with a licensed agent. See{" "}
          <Link href="/disclaimer">full disclaimer</Link>.
        </p>
        <p className="hide-row">
          <label>
            <input type="checkbox" checked={hideUnused} onChange={(e) => setHideUnused(e.target.checked)} /> Hide
            columns my profile does not use
          </label>
        </p>
      </div>
      <figure className="matrix-figure">
        <img
          src="/photos/insurance.webp"
          width={1400}
          height={933}
          alt="Rain on window glass at sunset — no people, no gore"
          loading="lazy"
        />
        <figcaption>
          Rain on window glass at sunset. Photo:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Dripping_rain_water_on_window_glass.jpg">
            Samuel Phillips, CC BY-SA 4.0, via Wikimedia Commons
          </a>
          . License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Display
          crop: CSS object-position 50% 70% (file unaltered).
        </figcaption>
      </figure>
    </section>
  );
}
