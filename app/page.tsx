import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import CoverageMatrix from "../components/CoverageMatrix";

export const metadata: Metadata = {
  title: "Insurance Guides & Cost Estimators",
  description:
    "Browse plain-English insurance guides and estimators for life, health, auto, home, and specialty coverage. Educational estimates, not quotes.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/" },
  openGraph: {
    images: [
      {
        url: "https://insurance.loanpaylogic.com/photos/insurance.webp",
        width: 1400,
        height: 933,
        alt: "Rain on window glass at sunset — no people, no gore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://insurance.loanpaylogic.com/photos/insurance.webp"],
  },
};

const groups: { heading: string; blurb: string; links: { href: string; title: string; description: string }[] }[] = [
  {
    heading: "Life",
    blurb: "Coverage amounts, term choices, and illustrative costs by age.",
    links: [
      { href: "/term-life-insurance-calculator", title: "Term Life Insurance Calculator", description: "Estimate coverage and illustrative monthly premiums by age, amount, and term." },
      { href: "/whole-life-vs-term-life", title: "Whole Life vs. Term Life", description: "Compare costs, cash value, conversion, and which households each suits." },
      { href: "/how-much-life-insurance-do-i-need", title: "How Much Life Insurance Do I Need?", description: "Work the DIME worksheet with real numbers for your household type." },
      { href: "/life-insurance-cost-by-age-chart", title: "Life Insurance Cost by Age Chart", description: "Illustrative term premiums by issue age, health class, and term length." },
    ],
  },
  {
    heading: "Health",
    blurb: "Marketplace dates, subsidies, and account rules for 2026.",
    links: [
      { href: "/health-insurance-marketplace-guide-2026", title: "Marketplace Guide 2026", description: "Open enrollment Nov 1–Jan 15, metal tiers, and premium credits tied to 2026 poverty levels." },
      { href: "/hsa-vs-fsa-guide", title: "HSA vs. FSA Guide", description: "Compare triple tax advantage, ownership, rollover rules, and which account fits your plan." },
      { href: "/copay-vs-coinsurance-vs-deductible", title: "Copay vs. Coinsurance vs. Deductible", description: "Decode health cost-sharing layers with worked numbers and plan-picking scenarios." },
      { href: "/new-york-health-insurance-guide", title: "New York Health Insurance Guide", description: "NY State of Health, Essential Plan eligibility, networks, and enrollment steps." },
    ],
  },
  {
    heading: "Auto",
    blurb: "Premiums, coverage choices, bundling, and state rules.",
    links: [
      { href: "/auto-insurance-cost-calculator", title: "Auto Insurance Cost Calculator", description: "Estimate premiums from liability limits, deductibles, age, and vehicle value." },
      { href: "/liability-vs-full-coverage-auto", title: "Liability vs. Full Coverage", description: "What each pays, illustrative cost gaps, and when liability-only makes sense." },
      { href: "/bundling-home-auto-insurance", title: "Bundling Home & Auto", description: "How multi-policy discounts work, when bundles lose, and honest comparison steps." },
      { href: "/home-auto-bundle-savings-calculator", title: "Bundle Savings Calculator", description: "Estimate bundled vs. split totals with a 4-step worksheet and worked examples." },
      { href: "/texas-auto-insurance-guide", title: "Texas Auto Insurance Guide", description: "30/60/25 minimums, UM and PIP choices, hail realities, and shopping steps." },
      { href: "/how-insurance-premiums-are-calculated", title: "How Premiums Are Calculated", description: "Loss costs, rating factors, discounts, filings, and what you control." },
    ],
  },
  {
    heading: "Home",
    blurb: "Rebuilding cost, deductibles, flood gaps, and state markets.",
    links: [
      { href: "/homeowners-insurance-cost-guide", title: "Homeowners Insurance Cost Guide", description: "What HO-3 covers, what moves premiums, and right-sizing Coverage A." },
      { href: "/renters-insurance-guide", title: "Renters Insurance Guide", description: "Contents, liability, replacement cost, roommates, and claims tips." },
      { href: "/flood-insurance-guide", title: "Flood Insurance Guide", description: "NFIP vs. private coverage, zones, waits, and buying steps." },
      { href: "/how-much-does-flood-insurance-cost-by-zone", title: "Flood Cost by Zone", description: "Illustrative NFIP vs. private cost bands by FEMA zone and what moves them." },
      { href: "/california-homeowners-insurance-guide", title: "California Homeowners Guide", description: "Wildfire market, mitigation that restores options, and FAIR Plan basics." },
      { href: "/florida-homeowners-insurance-guide", title: "Florida Homeowners Guide", description: "Hurricane deductibles, roof rules, Citizens fallback, and flood gaps." },
      { href: "/insurance-deductible-explained", title: "Insurance Deductible Explained", description: "Flat vs. percentage deductibles, break-even math, and sizing to savings." },
    ],
  },
  {
    heading: "Other",
    blurb: "Income protection, umbrella, specialty lines, and claims.",
    links: [
      { href: "/disability-insurance-guide", title: "Disability Insurance Guide", description: "Short- vs. long-term protection, benefit sizing, and claim realities." },
      { href: "/long-term-care-insurance-guide", title: "Long-Term Care Guide", description: "Benefit pools, inflation riders, hybrid alternatives, and buying windows." },
      { href: "/pet-insurance-guide", title: "Pet Insurance Guide", description: "Plan types, reimbursement math, exclusions, and illustrative costs." },
      { href: "/travel-insurance-guide", title: "Travel Insurance Guide", description: "Cancellation, travel medical, evacuation, and waiver windows." },
      { href: "/umbrella-insurance-explained", title: "Umbrella Insurance Explained", description: "How $1M+ liability layers stack over auto and home — and who needs them." },
      { href: "/insurance-claims-process-guide", title: "Claims Process Guide", description: "From filing to payout: documentation, valuation, denials, and appeals." },
    ],
  },
];

const SITE_URL = "https://insurance.loanpaylogic.com";
const HERO_IMAGE_URL = `${SITE_URL}/photos/insurance.webp`;

/**
 * Home hero ImageObject JSON-LD (additive SEO only — renders a <script>,
 * zero visual change; the visible figure lives in CoverageMatrix).
 * Mirrors public/photos/RECORD.md: insurance.webp 1400x933,
 * Samuel Phillips, CC BY-SA 4.0, via Wikimedia Commons.
 */
function HomeHeroJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Insurance Guides & Cost Estimators",
        description:
          "Browse plain-English insurance guides and estimators for life, health, auto, home, and specialty coverage. Educational estimates, not quotes.",
        primaryImageOfPage: { "@id": `${HERO_IMAGE_URL}#image` },
      },
      {
        "@type": "ImageObject",
        "@id": `${HERO_IMAGE_URL}#image`,
        contentUrl: HERO_IMAGE_URL,
        url: HERO_IMAGE_URL,
        width: 1400,
        height: 933,
        caption: "Rain on window glass at sunset — no people, no gore",
        creditText: "Samuel Phillips, CC BY-SA 4.0, via Wikimedia Commons",
        creator: { "@type": "Person", name: "Samuel Phillips" },
        license: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="ins-light">
      <HomeHeroJsonLd />
      <div className="ins-wrap">
        <section className="ins-hero">
          <p className="ins-eyebrow">Educational insurance hub</p>
          <h1 className="ins-h1">Understand insurance costs before you talk to an agent</h1>
          <p className="ins-lede">
            LoanPay Insurance offers simple estimators and plain-English guides
            for auto, home, life, pet, and renters coverage. Explore realistic
            cost ranges, learn the vocabulary insurers use, and arrive prepared
            for a productive conversation with a licensed professional.
          </p>
        </section>

        <CoverageMatrix />

        {groups.slice(0, 2).map((group) => (
          <section key={group.heading} aria-label={`${group.heading} insurance guides`} className="ins-group">
            <h2 className="ins-h2">{group.heading}</h2>
            <p className="ins-blurb">{group.blurb}</p>
            <div className="ins-grid">
              {group.links.map((item) => (
                <Link key={item.href} href={item.href} className="ins-card">
                  <h3 className="ins-card-title">{item.title}</h3>
                  <p className="ins-card-desc">{item.description}</p>
                  <p className="ins-card-cta">Read the guide</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <AdSlot slot="TODO-insurance-display-home" format="display" />

        {groups.slice(2).map((group) => (
          <section key={group.heading} aria-label={`${group.heading} insurance guides`} className="ins-group">
            <h2 className="ins-h2">{group.heading}</h2>
            <p className="ins-blurb">{group.blurb}</p>
            <div className="ins-grid">
              {group.links.map((item) => (
                <Link key={item.href} href={item.href} className="ins-card">
                  <h3 className="ins-card-title">{item.title}</h3>
                  <p className="ins-card-desc">{item.description}</p>
                  <p className="ins-card-cta">Read the guide</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section aria-label="Trust and responsibility" className="ins-note">
          <h2 className="ins-h2">A careful note on insurance decisions</h2>
          <p className="ins-note-text">
            Insurance is a regulated product, and prices depend on personal risk
            factors, carrier filings, and state rules that change over time. Our
            figures are educational estimates built from publicly described rating
            factors — they are not quotes, and they do not guarantee eligibility
            or pricing from any carrier. Policy language always controls over any
            summary you read here. Before you buy, cancel, or change coverage,
            please consult a licensed insurance agent or broker in your state who
            can review your situation and confirm details with the carrier.
          </p>
          <p className="ins-note-text ins-note-muted">
            Disclaimer: content on insurance.loanpaylogic.com is for general
            education only and is not professional insurance, legal, or financial
            advice. Coverage availability and rates vary by insurer and location.
          </p>
        </section>

        <div className="ins-spacer" />
      </div>
    </div>
  );
}
