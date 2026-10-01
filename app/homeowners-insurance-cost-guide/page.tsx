import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { ArticleFaqJsonLd } from "../../components/schema";

export const metadata: Metadata = {
  title: "Homeowners Insurance Cost Guide: Rates & Coverage",
  description: "Learn what homeowners insurance costs and covers: rebuilding cost, deductibles, endorsements, illustrative state ranges, and shopping tips.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/homeowners-insurance-cost-guide" },
};

const faqs = [
  {
    q: "Is flood covered by homeowners insurance?",
    a: "No. Flood is excluded from standard policies everywhere and needs separate NFIP or private flood coverage. Even inland homes outside high-risk zones file a large share of flood claims.",
  },
  {
    q: "Should I insure market value or rebuilding cost?",
    a: "Rebuilding cost. Land is not rebuilt, and market value swings with land and demand rather than construction costs. Use a replacement-cost estimator plus contractor cross-checks.",
  },
  {
    q: "What is a hurricane deductible?",
    a: "A percentage of Coverage A, often 1 to 5 percent in coastal states, that applies to wind or named-storm losses. A $400,000 limit with 2 percent means $8,000 out of pocket.",
  },
  {
    q: "Does homeowners cover my belongings outside the home?",
    a: "Usually yes up to limits for theft and some perils worldwide, with sublimits for valuables. Scheduled floaters cover jewelry and collections beyond sublimits.",
  },
  {
    q: "How do I lower premiums without losing protection?",
    a: "Fund higher deductibles, bundle policies, upgrade roofing, install alarms and water shutoff, maintain claims-free history, and re-shop identical limits periodically.",
  },
];

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <ArticleFaqJsonLd
        path="/homeowners-insurance-cost-guide"
        headline="Homeowners insurance cost guide"
        description="Learn what homeowners insurance costs and covers: rebuilding cost, deductibles, endorsements, illustrative state ranges, and shopping tips."
        faqs={faqs}
      />
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Home insurance • Cost guide</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">Homeowners insurance cost guide</h1>
      <p className="mt-3 text-sm text-slate-400">
        By <span className="font-medium text-slate-200">LoanPay Insurance editorial team</span> · Updated October 2026 · Educational estimates only, not quotes
      </p>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Homeowners premiums track rebuilding cost and local catastrophe risk more than market value, which is why two identical floor plans can illustrate wildly different prices in different states. This guide explains what HO-3 policies cover and exclude, shows which home features move premiums most, provides illustrative cost bands, and walks through right-sizing Coverage A with worked numbers. All ranges are illustrative educational estimates, not quotes, and carrier names are only examples to compare.</p>
      <AdSlot slot="TODO-insurance-display-homeowners-top" format="display" />
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">What homeowners insurance covers</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">A standard HO-3 policy bundles dwelling coverage (Coverage A) for rebuilding the structure, other structures (Coverage B), personal property (Coverage C), loss of use (Coverage D), personal liability (Coverage E), and medical payments to others (Coverage F). Covered perils include fire, wind, hail, theft, and burst pipes, while flood and earthquake are excluded everywhere and require separate policies or endorsements. Replacement-cost versus actual-cash-value settlement matters enormously: replacement cost rebuilds without depreciation deduction, while actual cash value subtracts age and wear.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Deductibles split into flat amounts and percentage deductibles for wind or hurricane in coastal states, where 1 to 5 percent of Coverage A is common. A $400,000 Coverage A limit with a 2 percent hurricane deductible means $8,000 out of pocket before hurricane coverage responds. Ordinance, sewer backup, scheduled valuables, and equipment breakdown are common endorsements worth pricing individually.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">What sets your premium</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Rebuilding cost per square foot in your market, construction type, roof age and material, square footage, and prior claims anchor the base rate. Location risk layers on top: distance to fire station and hydrant, wildfire scores, hail belts, hurricane exposure, and local litigation trends all move filed rates. Protective devices, roof upgrades, higher deductibles, and bundling with auto illustrate the largest controllable discounts.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Illustratively, national average premiums for typical coverage often land in the low thousands per year, with coastal, wildfire, and hail-exposed states illustrating multiples of inland averages. Newer hip roofs with impact-resistant shingles can illustrate double-digit percentage savings over older gable roofs in wind states. Credit-based insurance scores affect pricing where permitted, so the same house can illustrate different premiums for different owners.</p>
        </section>
        <AdSlot slot="TODO-insurance-inarticle-homeowners-1" format="in-article" />
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping and right-sizing Coverage A</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insure rebuilding cost, not market value or purchase price: land is not rebuilt and market swings do not track construction costs. Start from the insurer&apos;s replacement-cost estimator, cross-check with a local contractor&apos;s per-square-foot figure, and add extended or guaranteed replacement endorsements where offered. Review Coverage C at 50 to 70 percent of Coverage A defaults and raise it with a home inventory if you own more, and set loss-of-use limits that cover realistic local rents for a rebuild lasting many months.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Raise deductibles only to funded levels, schedule jewelry, art, and collectibles that breach sublimits, and confirm roof-settlement terms, especially actual-cash-value schedules for older roofs. Photograph every room annually, store the inventory off-site, and re-estimate Coverage A after renovations or additions. Compare identical Coverage A, deductibles, and endorsements across at least three carriers, because headline premiums on mismatched limits mislead.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How homeowners insurance pricing works in 2026</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insurers build homeowners insurance prices from filed rating plans that weigh your personal risk factors, the coverage options you select, and state rules that limit what can be charged. Personal factors usually dominate: age, history, location, and coverage choices explain most of the difference between two shoppers with similar profiles. Carriers then apply discounts, surcharges, fees, and taxes that vary by company and state, which is why identical coverage can produce meaningfully different quotes from different insurers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Public filings and state department of insurance resources confirm the same shopping lesson every year: compare at least three quotes on identical coverage limits before deciding. Rate filings change over time as loss trends, reinsurance costs, and state approvals evolve, so a carrier that was cheapest for your neighbor two years ago may not be cheapest for you today. Rebuilding cost, location risk, deductible, roof age, and selected endorsements move homeowners quotes the most, so compare identical Coverage A limits and deductibles across carriers.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: define the coverage limits and deductible that fit your budget and risk tolerance, gather the facts insurers ask for, request quotes on identical limits from several insurers or a broker who represents multiple carriers, compare exclusions and claim service alongside price, and confirm everything in the issued policy during any free-look or review period. Keep copies of quotes and the final policy together so you can verify that the issued terms match what you approved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include insuring market value instead of rebuilding cost, underinsuring contents and loss-of-use, and learning about flood or ordinance exclusions only after a loss.</p>
        </section>
        <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Factor</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Illustrative effect</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">What to do</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Roof age and material</td><td className="px-4 py-3 text-sm text-slate-300">Older roofs can cost far more; impact-resistant can save</td><td className="px-4 py-3 text-sm text-slate-300">Document roof age; price fortified upgrades</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Deductible $1k → $2.5k</td><td className="px-4 py-3 text-sm text-slate-300">Often saves low double-digit percent</td><td className="px-4 py-3 text-sm text-slate-300">Raise only to funded levels</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Bundling with auto</td><td className="px-4 py-3 text-sm text-slate-300">Often saves a meaningful percent</td><td className="px-4 py-3 text-sm text-slate-300">Quote bundled and unbundled</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Wind/hurricane deductible</td><td className="px-4 py-3 text-sm text-slate-300">1–5% of Coverage A in coastal states</td><td className="px-4 py-3 text-sm text-slate-300">Budget the dollar amount, not just the percent</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Protective devices</td><td className="px-4 py-3 text-sm text-slate-300">Alarms, water shutoff can discount</td><td className="px-4 py-3 text-sm text-slate-300">Report every device at quote time</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: right-sizing Coverage A</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">The Nguyen home last sold for $520,000 on land worth roughly $180,000, with local rebuild costs near $250 per square foot for 2,000 square feet. Market value suggests $520,000, but rebuilding math suggests about $500,000 plus debris removal and code upgrades. They insure Coverage A at $500,000 with extended replacement cost, set contents at $300,000 after an inventory, and choose a $2,500 flat deductible with a 2 percent wind deductible they can fund.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Their premium illustrates in the low thousands per year inland, while an identical rebuild on a hurricane-exposed coast could illustrate multiples more. The lesson is to insure the rebuild, fund the deductible, and endorse the gaps. Figures are illustrative only; carriers, inspections, and state filings set real prices.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            {faqs.map((f) => (
              <details key={f.q} className="glass-card rounded-2xl p-5">
                <summary className="cursor-pointer text-base font-semibold text-white">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <AdSlot slot="TODO-insurance-multiplex-homeowners" format="multiplex" />
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/renters-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Renters insurance guide</Link></li>
            <li><Link href="/flood-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Flood insurance guide</Link></li>
            <li><Link href="/bundling-home-auto-insurance" className="text-amber-200 underline hover:text-amber-100">Bundling home and auto</Link></li>
            <li><Link href="/california-homeowners-insurance-guide" className="text-amber-200 underline hover:text-amber-100">California homeowners guide</Link></li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Endorsements worth pricing: water, ordinance, and valuables</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Sewer and sump backup endorsements cover the overflows standard policies exclude, with limits from a few thousand to full Coverage A fractions for modest additional premium. Homes with finished basements, sump systems, or municipal-line histories should treat this endorsement as near-mandatory. Equipment breakdown endorsements cover HVAC, appliances, and systems against mechanical failure that homeowners otherwise excludes.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Ordinance-or-law coverage funds code upgrades that standard Coverage A omits, such as elevation, sprinkler, or electrical requirements triggered by partial losses. Older homes in strict-code jurisdictions need this most, and underinsurance here stalls real rebuilds. Scheduled personal-property floaters cover jewelry, art, watches, and collections above sublimits with broader perils and no deductible, ideal for concentrated valuables.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Service-line, identity-theft, and home-business endorsements close narrower but painful gaps for qualifying households. Price each endorsement individually against standalone alternatives rather than bundling blindly, and photograph valuables with appraisals stored off-site. Annual reviews should revisit endorsement limits as renovations and collections grow.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Replacement-cost estimators and post-renovation reviews</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Carrier replacement-cost estimators translate square footage, construction grade, roofing, and local labor rates into Coverage A, but they miss custom finishes, additions, and code upgrades that contractors price explicitly. Cross-check the estimator against a local builder&apos;s per-square-foot figure for your finishes and add extended or guaranteed replacement endorsements where offered. Revisit the number after kitchens, baths, additions, and ADUs rather than assuming original limits stretch.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Renovations change more than Coverage A: updated electrical, plumbing, and roofing can earn credits while trampolines, pools, and home businesses create exposures needing endorsements. Notify the carrier before construction starts so builder&apos;s-risk and vacancy terms stay coordinated. Keep permits, contracts, and completion photos with the policy file for claim-time valuation.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Inflation-guard endorsements adjust limits automatically but cannot track luxury renovations or local labor spikes precisely. Annual estimator reviews with the agent keep pace honestly, and inventories with video evidence support contents limits that renovations also expand.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Insure rebuilding cost, not market value, verified against contractor figures.</li>
              <li>Convert percentage wind deductibles to dollars and keep the amount funded.</li>
              <li>Endorse flood, ordinance, backup, and valuables gaps individually.</li>
              <li>Document roofs, devices, and inventories to support pricing and claims.</li>
              <li>Compare identical Coverage A and deductibles across at least three carriers.</li>
          </ul>
        </section>
        <section className="glass-panel mt-8 rounded-2xl p-6 sm:p-8" aria-label="Disclaimer notice">
          <h2 className="text-xl font-semibold text-white">General education only</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            This page is general education, not insurance or financial advice. Examples and illustrative
            ranges are educational estimates only — they are not quotes and do not guarantee eligibility or
            pricing from any insurer. Policy language always controls. Before you buy, cancel, or change
            coverage, consult a licensed insurance agent or broker in your state. See our{" "}
            <Link href="/disclaimer" className="text-amber-200 underline hover:text-amber-100">
              full disclaimer
            </Link>
            .
          </p>
        </section>
    </div>
  );
}
