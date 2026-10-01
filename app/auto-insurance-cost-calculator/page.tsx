import type { Metadata } from "next";
import Link from "next/link";
import AutoEstimator from "./calculator";

export const metadata: Metadata = {
  title: "Auto Insurance Cost Calculator: Estimate Your Premium",
  description: "Estimate auto insurance costs: how liability limits, deductibles, age, record, and vehicle value shape illustrative monthly premiums.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/auto-insurance-cost-calculator" },
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Auto insurance • Cost calculator</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">Auto insurance cost calculator: estimate your premium</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Car insurance premiums reflect who you are, what you drive, where you garage it, and how much protection you buy. This guide explains liability versus full coverage, shows which inputs move estimates most, provides comparison tables by driver profile, and includes a simple on-page estimator that labels every result clearly as an estimate. All figures are illustrative educational ranges, not quotes, and any carrier names are only examples of insurers people compare — compare quotes for your own record and vehicle.</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">Updated: October 2026 — reviewed against publicly available 2026 insurer and state sources.</p>
      <AutoEstimator />
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">What full coverage and liability-only really mean</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Liability-only coverage pays others when you cause a crash: bodily injury per person and per accident plus property damage, up to your limits. It never pays for your own vehicle, so a totaled car leaves you replacing it out of pocket. Full coverage conventionally means liability plus collision and comprehensive with deductibles you choose, plus any uninsured-motorist, medical-payments, or personal-injury protection your state requires or you elect.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">The price gap is wide: liability-only illustrations for clean-record adult drivers often fall in the tens of dollars per month for state minimums, while full coverage with $500 deductibles commonly illustrates two to three times that. Vehicle value drives the spread, because collision and comprehensive price directly from repair and replacement cost. Older paid-off vehicles are the classic liability-only candidates, while financed or leased vehicles almost always require full coverage by contract.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">The inputs that move your estimate</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Age and driving history dominate: youthful and senior brackets, at-fault crashes, DUIs, and speeding tickets raise filed rates sharply, while continuous coverage and defensive-course completions can help. Annual mileage, commute distance, garaging ZIP code, vehicle safety and theft ratings, credit-based insurance scores where permitted, marital status, and multi-policy bundling each add smaller but stackable adjustments. Liability limits and deductibles are the two levers you control most directly at quote time.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Raising liability from state minimums such as 25/50/25 to 100/300/100 illustrates a modest premium increase for a large protection gain, which is why educators and agents alike recommend testing that step. Raising collision and comprehensive deductibles from $250 to $1,000 illustrates the reverse: meaningful premium savings in exchange for more out-of-pocket risk per claim. Telematics programs that price from measured braking, speed, and phone use can cut costs for genuinely calm drivers but raise them for aggressive ones, so enroll with eyes open.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Using the estimator and reading the result</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Enter your age band, vehicle value, liability choice, deductible, and record honestly, then read the output as a planning band rather than a price promise. The estimator below illustrates how each lever moves the monthly figure so you arrive at real quotes knowing which tradeoffs you prefer. Thin-file or high-risk drivers should expect wider bands, because nonstandard carriers price the same inputs very differently from preferred carriers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Take the resulting band to real quotes: request identical limits and deductibles from at least three carriers plus one independent broker, ask about every discount you might qualify for, and verify the VIN, mileage, and garaging details before binding. If the estimator suggests full coverage costs more than your vehicle's annual depreciation, price liability-only plus a dedicated replacement fund as an alternative. Every figure here is illustrative, and carrier names appear only as examples to compare, never as a ranked best.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How auto insurance pricing works in 2026</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insurers build auto insurance prices from filed rating plans that weigh your personal risk factors, the coverage options you select, and state rules that limit what can be charged. Personal factors usually dominate: age, history, location, and coverage choices explain most of the difference between two shoppers with similar profiles. Carriers then apply discounts, surcharges, fees, and taxes that vary by company and state, which is why identical coverage can produce meaningfully different quotes from different insurers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Public filings and state department of insurance resources confirm the same shopping lesson every year: compare at least three quotes on identical coverage limits before deciding. Rate filings change over time as loss trends, reinsurance costs, and state approvals evolve, so a carrier that was cheapest for your neighbor two years ago may not be cheapest for you today. Driving record, mileage, garaging location, vehicle value, and liability limits move auto quotes the most, so gather those facts and compare identical limits across carriers.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: define the coverage limits and deductible that fit your budget and risk tolerance, gather the facts insurers ask for, request quotes on identical limits from several insurers or a broker who represents multiple carriers, compare exclusions and claim service alongside price, and confirm everything in the issued policy during any free-look or review period. Keep copies of quotes and the final policy together so you can verify that the issued terms match what you approved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include buying state minimums that leave assets exposed, setting deductibles without the savings to cover them, and forgetting to re-shop after moves, birthdays, or record improvements.</p>
        </section>
        <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Driver profile</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Liability-only, state minimum (illustrative)</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Full coverage, $500 deductibles (illustrative)</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Clean record, 35, sedan</td><td className="px-4 py-3 text-sm text-slate-300">$60–$95/mo</td><td className="px-4 py-3 text-sm text-slate-300">$150–$220/mo</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Clean record, 22, sedan</td><td className="px-4 py-3 text-sm text-slate-300">$130–$200/mo</td><td className="px-4 py-3 text-sm text-slate-300">$280–$420/mo</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">One at-fault crash, 35</td><td className="px-4 py-3 text-sm text-slate-300">$95–$150/mo</td><td className="px-4 py-3 text-sm text-slate-300">$220–$330/mo</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">DUI on record, 35</td><td className="px-4 py-3 text-sm text-slate-300">$150–$250/mo</td><td className="px-4 py-3 text-sm text-slate-300">$330–$520/mo</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Senior 70, clean record</td><td className="px-4 py-3 text-sm text-slate-300">$70–$110/mo</td><td className="px-4 py-3 text-sm text-slate-300">$160–$240/mo</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: deductible tradeoff on a $9,000 sedan</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Priya, 34, with a clean record illustrates full coverage near $185 per month with $250 deductibles versus about $155 with $1,000 deductibles, a $360 annual saving. Over five claim-free years the higher deductible saves roughly $1,800 in premiums while risking an extra $750 per claim. With a solid emergency fund, she takes the $1,000 deductibles and banks the difference. Without one, the $500 middle ground fits better.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Her brother drives a paid-off 12-year-old sedan worth about $4,000 and prices liability-only near $75 per month against full coverage near $190. Dropping collision and comprehensive saves roughly $1,380 per year against a maximum $4,000-minus-deductible payout, so liability-only plus a replacement fund wins if he can self-insure. Both illustrations are educational only; real quotes depend on record, territory, and carrier.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What raises auto premiums the most?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Youthful age, at-fault crashes, DUIs, high mileage, expensive-to-repair vehicles, low deductibles, high limits, and high-risk garaging territories. Credit-based insurance scores also matter where permitted.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Is state-minimum liability enough?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Rarely for anyone with assets or income to protect. Minimums like 25/50/25 can be exhausted by a single emergency-room visit, leaving you personally liable. Test 100/300/100 quotes before deciding.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Should I drop full coverage on an old car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Consider it when annual collision-plus-comprehensive premiums approach a large share of the car's value minus deductible and you can self-insure replacement. Keep it when a loss would strand you without transport.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Do quotes affect my credit?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Auto insurance quotes generally use soft inquiries or insurance scores that do not affect credit the way hard lending inquiries do. Shopping quotes will not harm your credit score.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">How can I lower premiums without losing protection?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Raise deductibles only to funded levels, keep liability strong, bundle home and auto, drive cleanly, reduce mileage honestly, and re-shop identical limits every one to two years.</p>
            </div>
          </div>
        </section>
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/liability-vs-full-coverage-auto" className="text-amber-200 underline hover:text-amber-100">Liability vs. full coverage</Link></li>
            <li><Link href="/texas-auto-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Texas auto insurance guide</Link></li>
            <li><Link href="/bundling-home-auto-insurance" className="text-amber-200 underline hover:text-amber-100">Bundling home and auto</Link></li>
            <li><Link href="/how-insurance-premiums-are-calculated" className="text-amber-200 underline hover:text-amber-100">How premiums are calculated</Link></li>
          </ul>
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Telematics, usage-based programs, and discount stacking</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Telematics programs price from measured behavior such as braking, acceleration, cornering, speed, phone use, and time of day rather than proxy variables alone. Calm commuters with consistent daytime mileage can illustrate meaningful savings, while night-shift workers, aggressive brakers, and high-mileage drivers can illustrate increases or minimal benefit. Trial periods without penalty let you test the technology before committing, and unenrolling simply returns you to standard rating.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Discount stacking rewards households that combine multi-policy, multi-vehicle, paid-in-full, paperless, good-student, defensive-course, and affinity credits on one account. Each credit is modest alone, but stacked households can illustrate double-digit percentage differences against identical unbundled profiles. Ask agents to itemize every applied and missed discount at quote time, because undisclosed credits are the most common correctable overcharge.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Annual mileage verification, garaging accuracy, and driver-list hygiene sustain the illustration: understated mileage or omitted household drivers risk claim denial that dwarfs any premium saving. Re-shop every one to two years with identical limits, since carriers re-tier territories and vehicle symbols on schedules that reward comparison.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Credit, continuous coverage, and re-shopping rhythms</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Credit-based insurance scores influence auto pricing in most states, rewarding stable payment histories with preferred tiers while penalizing collections and delinquencies. States restricting or banning the practice create different competitive dynamics worth understanding before moving. Improving underlying credit habits over 12 to 24 months can shift tiers at renewal, so re-shop after material score improvements rather than assuming loyalty pricing follows.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Continuous coverage history signals reliability to underwriters, and lapses invite higher quotes plus reinstatement friction. Military deployments, study abroad, and vehicle storage deserve non-owner or comprehensive-only treatment rather than outright cancellation. Keep at least minimum protection or named non-owner coverage active through every garaged month.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Re-shop every one to two years and after each life event: moves, marriages, birthdays crossing tier thresholds, record improvements, vehicle changes, and mileage shifts all re-tier households. Compare identical limits across several carriers plus an independent broker, verify VIN and garaging details, and confirm discounts itemized on the declarations page.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Liability limits and deductibles are your two most direct premium levers.</li>
              <li>Test 100/300/100 against state minimums; the protection gain usually exceeds the premium step.</li>
              <li>Raise deductibles only to funded levels and bank the difference.</li>
              <li>Re-shop identical limits every one to two years across several carriers.</li>
              <li>Keep mileage, garaging, and driver lists honest to protect claim payment.</li>
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
