import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disability Insurance Guide: Short vs. Long Term",
  description: "Learn how disability insurance replaces income: own-occupation definitions, elimination periods, illustrative costs, and shopping tips.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/disability-insurance-guide" },
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Other insurance • Disability</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">Disability insurance guide</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">An illness or injury that keeps you from working threatens every financial plan faster than almost any other risk, yet disability coverage gets a fraction of the attention life insurance receives. This guide explains short-term versus long-term protection, shows how benefit amounts and waiting periods set premiums, and walks through underwriting and claims with worked numbers. All figures are illustrative estimates, not quotes, and carrier names are only examples to compare.</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">Updated: October 2026 — reviewed against publicly available 2026 insurer and state sources.</p>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Short-term versus long-term disability</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Short-term disability replaces a share of income for weeks to months after illness, injury, or childbirth, often through employer plans with brief elimination periods. Long-term disability takes over for years or to retirement age when conditions persist, and it is the protection most households lack. A common stack pairs employer short-term coverage with individual long-term coverage so each layer handles the horizon it prices best.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Definitions matter more than headlines: own-occupation pays when you cannot perform your specific job, while any-occupation pays only when you cannot perform any reasonable work. Benefit periods, cost-of-living riders, residual partial-disability benefits, and future-increase options shape real payouts far more than small premium differences. Group long-term plans typically cap monthly benefits and taxable treatment in ways individual policies can supplement.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How much benefit you need and what it costs</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Target the gap between essential expenses and income that continues during disability, such as a working spouse's pay or paid leave, since carriers cap issue amounts around 60 percent of gross income. Elimination periods trade directly against premium: 90-day waits illustrate far less than 30-day waits, and most emergency funds bridge 90 days comfortably. Benefit periods to age 65 or 67 illustrate more than 5-year periods but match the true risk horizon for primary earners.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Illustratively, individual long-term coverage for white-collar workers often falls in the low single-digit percent of covered income per year, rising with hazardous occupations, shorter waits, richer definitions, and younger benefit structures. Women illustrate higher premiums than men at the same class because of higher claim incidence. Non-cancelable, guaranteed-renewable language locks rates and renewability and is worth the premium over conditionally renewable alternatives.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping, underwriting, and claim realities</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Apply while healthy and steadily employed, because recent treatment, unstable conditions, and hazardous hobbies complicate offers. Disclose fully: material omissions risk rescission when claims arrive years later. Compare elimination period, benefit period, occupation definition, residual benefits, and increase options on identical terms rather than on premium alone, and verify whether benefits are taxable based on who pays premiums.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">At claim time, medical documentation of functional limits, not diagnosis alone, drives decisions, so treating physicians should describe what you cannot do in work terms. Coordinate employer leave, Social Security Disability Insurance offsets, and any group benefits before assuming the individual check covers everything. Review coverage after raises and career changes, since outdated benefit amounts silently erode against rising expenses.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How disability insurance pricing works in 2026</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insurers build disability insurance prices from filed rating plans that weigh your personal risk factors, the coverage options you select, and state rules that limit what can be charged. Personal factors usually dominate: age, history, location, and coverage choices explain most of the difference between two shoppers with similar profiles. Carriers then apply discounts, surcharges, fees, and taxes that vary by company and state, which is why identical coverage can produce meaningfully different quotes from different insurers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Public filings and state department of insurance resources confirm the same shopping lesson every year: compare at least three quotes on identical coverage limits before deciding. Rate filings change over time as loss trends, reinsurance costs, and state approvals evolve, so a carrier that was cheapest for your neighbor two years ago may not be cheapest for you today. Underwriting classes, tobacco status, and exam results move life and health quotes the most, so apply with full disclosure and compare identical benefits across carriers.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: define the coverage limits and deductible that fit your budget and risk tolerance, gather the facts insurers ask for, request quotes on identical limits from several insurers or a broker who represents multiple carriers, compare exclusions and claim service alongside price, and confirm everything in the issued policy during any free-look or review period. Keep copies of quotes and the final policy together so you can verify that the issued terms match what you approved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include buying on price alone, ignoring elimination periods and benefit caps, letting old coverage lapse before replacement is issued, and skipping contingent beneficiaries.</p>
        </section>
        <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Feature</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Short-term disability</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Long-term disability</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Pays for</td><td className="px-4 py-3 text-sm text-slate-300">Weeks to months</td><td className="px-4 py-3 text-sm text-slate-300">Years or to retirement age</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Typical source</td><td className="px-4 py-3 text-sm text-slate-300">Employer plans</td><td className="px-4 py-3 text-sm text-slate-300">Employer base plus individual supplement</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Elimination period</td><td className="px-4 py-3 text-sm text-slate-300">Days to weeks</td><td className="px-4 py-3 text-sm text-slate-300">30–180 days; 90 is common</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Benefit target</td><td className="px-4 py-3 text-sm text-slate-300">Share of salary, capped</td><td className="px-4 py-3 text-sm text-slate-300">Around 60% of income, capped</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Key wording</td><td className="px-4 py-3 text-sm text-slate-300">Simpler definitions</td><td className="px-4 py-3 text-sm text-slate-300">Own-occupation vs. any-occupation matters most</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: sizing a long-term benefit</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Daniel earns $120,000 and targets 60 percent, or $6,000 per month, with a 90-day elimination period and benefits to age 67. His employer group plan covers $3,000 monthly taxable, so he shops individual coverage for the remaining $3,000 with own-occupation language and residual benefits. The illustrative individual premium falls in the low hundreds per month, far less than the income gap it protects.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">When a back condition limits him two years later, the 90-day emergency fund bridges the wait, short-term group benefits help first, then group plus individual long-term checks combine toward the target. Documentation of functional work limits, not just imaging, sustains the claim. Figures are illustrative only; occupation, health, and contract terms set real offers.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">How much disability coverage do I need?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Cover essential expenses minus income that continues during disability. Carriers generally cap new coverage near 60 percent of gross income, so start there and subtract group benefits.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What is own-occupation?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">A definition that pays when you cannot perform your specific occupation rather than any work at all. It costs more and protects specialists, trades, and high-skill workers far better.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">How long is the elimination period?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">The wait before benefits start: days for short-term, commonly 90 days for individual long-term. Longer waits illustrate lower premiums if savings bridge the gap.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Are disability benefits taxed?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">It depends on who paid premiums with what dollars. Employer-paid benefits are often taxable while individually paid after-tax benefits are often tax-free. Confirm with a tax professional.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Can I buy coverage with a health condition?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Often with exclusions, ratings, or modified offers depending on stability and severity. Apply early, disclose fully, and compare several carriers, since appetites differ widely.</p>
            </div>
          </div>
        </section>
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/term-life-insurance-calculator" className="text-amber-200 underline hover:text-amber-100">Term life insurance calculator</Link></li>
            <li><Link href="/long-term-care-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Long-term care guide</Link></li>
            <li><Link href="/how-much-life-insurance-do-i-need" className="text-amber-200 underline hover:text-amber-100">How much life insurance do I need?</Link></li>
            <li><Link href="/insurance-claims-process-guide" className="text-amber-200 underline hover:text-amber-100">Claims process guide</Link></li>
          </ul>
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Group coverage gaps and taxation of benefits</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Employer group long-term plans commonly cap monthly benefits near $5,000 to $10,000, define disability narrowly after two years, and offset Social Security payments, leaving high earners and specialists materially underinsured. Supplemental individual policies with own-occupation language fill exactly this gap. Bonus, commission, and equity income often escapes group definitions, so verify which compensation counts before assuming 60 percent protection.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Taxation follows premium dollars: employer-paid premiums generally produce taxable benefits while employee-paid after-tax premiums generally produce tax-free benefits. Gross-up strategies and imputed-income elections shift this math, so model after-tax replacement rather than headline benefit amounts. State benefits and workers compensation interact with private checks through offset provisions that require coordination.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Portability is the hidden risk: group coverage ends with employment precisely when health may be fragile. Individual non-cancelable policies travel across jobs and guarantee renewability, which justifies their higher illustration for primary earners. Layer individual coverage early while healthy.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Elimination-period funding and partial-disability math</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Elimination periods function as time deductibles: 30-day waits illustrate the most premium while 180-day waits illustrate the least, with 90 days the common funded middle ground. Size emergency reserves to the chosen wait plus one extra month, since claim approval itself consumes weeks after the wait ends. Short-term group benefits and paid leave can bridge shorter waits but rarely replace funded reserves.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Partial and residual benefits pay proportionally when conditions reduce hours or income without ending work entirely, which is how most careers actually deteriorate. Recovery and rehabilitation provisions fund retraining, workplace modification, and phased returns that protect lifetime earnings. Future-increase options let benefits track raises without fresh underwriting, essential for early-career buyers whose incomes will double.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Cost-of-living adjustments compound benefits during long claims and matter most for buyers in their 30s facing potential decades-long horizons. Coordinate offsets with Social Security, group plans, and workers compensation so the stack matches targets rather than overshooting into benefit caps.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Protect roughly 60% of income with benefits to retirement age for primary earners.</li>
              <li>Prefer own-occupation, non-cancelable language with residual benefits.</li>
              <li>Fund a 90-day elimination period with emergency reserves.</li>
              <li>Supplement capped group plans with individual coverage while healthy.</li>
              <li>Document functional work limits, not just diagnoses, at claim time.</li>
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
