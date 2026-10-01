import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";

export const metadata: Metadata = {
  title: "Insurance Guides & Cost Estimators",
  description:
    "Browse plain-English insurance guides and estimators for life, health, auto, home, and specialty coverage. Educational estimates, not quotes.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/" },
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
      { href: "/health-insurance-marketplace-guide-2026", title: "Marketplace Guide 2026", description: "Open enrollment Nov 1\u2013Jan 15, metal tiers, and premium credits tied to 2026 poverty levels." },
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
      { href: "/umbrella-insurance-explained", title: "Umbrella Insurance Explained", description: "How $1M+ liability layers stack over auto and home \u2014 and who needs them." },
      { href: "/insurance-claims-process-guide", title: "Claims Process Guide", description: "From filing to payout: documentation, valuation, denials, and appeals." },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <section className="py-14 text-center sm:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">
          Educational insurance hub
        </p>
        <h1 className="hero-title mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Understand insurance costs before you talk to an agent
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          LoanPay Insurance offers simple estimators and plain-English guides
          for auto, home, life, pet, and renters coverage. Explore realistic
          cost ranges, learn the vocabulary insurers use, and arrive prepared
          for a productive conversation with a licensed professional.
        </p>
      </section>

      {groups.slice(0, 2).map((group) => (
        <section key={group.heading} aria-label={`${group.heading} insurance guides`} className="pb-8">
          <h2 className="text-2xl font-semibold">{group.heading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{group.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.links.map((item) => (
              <Link key={item.href} href={item.href} className="glass-card rounded-2xl p-6 text-left transition hover:border-amber-200/40">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-amber-200/70">
                  Read the guide
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <AdSlot slot="TODO-insurance-display-home" format="display" />

      {groups.slice(2).map((group) => (
        <section key={group.heading} aria-label={`${group.heading} insurance guides`} className="pb-8">
          <h2 className="text-2xl font-semibold">{group.heading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{group.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.links.map((item) => (
              <Link key={item.href} href={item.href} className="glass-card rounded-2xl p-6 text-left transition hover:border-amber-200/40">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-amber-200/70">
                  Read the guide
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section
        aria-label="Trust and responsibility"
        className="glass-panel mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-xl font-semibold text-white">
          A careful note on insurance decisions
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Insurance is a regulated product, and prices depend on personal risk
          factors, carrier filings, and state rules that change over time. Our
          figures are educational estimates built from publicly described rating
          factors — they are not quotes, and they do not guarantee eligibility
          or pricing from any carrier. Policy language always controls over any
          summary you read here. Before you buy, cancel, or change coverage,
          please consult a licensed insurance agent or broker in your state who
          can review your situation and confirm details with the carrier.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Disclaimer: content on insurance.loanpaylogic.com is for general
          education only and is not professional insurance, legal, or financial
          advice. Coverage availability and rates vary by insurer and location.
        </p>
      </section>

      <div className="py-10" />
    </div>
  );
}
