import type { Metadata } from "next";
import Link from "next/link";
import NeedsEstimator from "./calculator";

export const metadata: Metadata = {
  title: "How Much Life Insurance Do I Need? DIME Worksheet",
  description: "Work out how much life insurance you need with the DIME method: debts, income multiples, mortgage, education, minus assets and existing coverage.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/how-much-life-insurance-do-i-need" },
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Life insurance • Coverage amount</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">How much life insurance do I need?</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Ten to twelve times your income is a starting point, not an answer. The amount your family actually needs depends on debts, mortgage, education goals, years of dependency, and the assets and coverage you already hold. This guide walks through the DIME worksheet with real numbers, adjusts the frame for single earners, dual incomes, stay-at-home parents, and near-retirees, and shows how to turn the result into term lengths or a laddered stack of policies. Every figure is an illustrative educational estimate, not a quote, and carrier examples are only examples of insurers people compare — compare quotes for your own profile rather than trusting any best-insurer claim.</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">Updated: October 2026 — reviewed against publicly available 2026 insurer and state sources.</p>
      <NeedsEstimator />
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">The DIME worksheet step by step</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">List each DIME component with real numbers. Debts: credit cards, auto loans, student loans, and any co-signed obligations, excluding the mortgage if you count it separately. Income: multiply gross annual income by 10 to 12 as a starting frame, adjusting upward for young children and downward for short dependency horizons. Mortgage: the full remaining balance if survivors should stay in the home. Education: a lump sum per child reflecting your realistic college funding goal, from tens of thousands for partial help to six figures per child for fuller funding.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Then subtract offsets: liquid savings, existing life insurance including group coverage, and any survivor benefits you can verify. The remainder is your gap and the face amount to shop. A household earning $110,000 with a $380,000 mortgage, $30,000 in debts, $200,000 in college goals, $80,000 in savings, and $150,000 of group coverage lands near $1.5 million. Round to the nearest shoppable face amount such as $1.25 or $1.5 million, then test 20- versus 30-year pricing before deciding.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Adjusting for your household type</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Single earners with a non-working spouse and young children need the largest multiples, often 12 to 15 times income plus mortgage, because one income supports everyone. Dual-income households can net the surviving income against expenses and typically need lower multiples, though childcare replacement costs surprise many families. Single parents should weight heavily toward longer terms and contingent guardianship planning, since no second earner backstops the gap.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Stay-at-home parents need real coverage too: value childcare, transportation, household management, and the working spouse's lost income during disruption, which commonly justifies $250,000 to $500,000 even with no earned income. Near-retirees with grown children and a nearly paid mortgage may need only final-expense plus a small income bridge, while business owners add buy-sell and key-person needs. Revisit the worksheet after births, home purchases, promotions, and divorces rather than setting a number once.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">From worksheet to policy: term lengths and laddering</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Match the term to the longest need: children reaching independence, mortgage payoff, or a spouse reaching retirement assets. When needs have different horizons, laddering splits coverage into stacked policies, for example $750,000 for 20 years plus $500,000 for 30 years, so protection steps down as obligations shrink. Laddering often costs less over time than one large 30-year policy while tracking the real risk curve.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Budget-check the result against sustainable premiums using the illustrative tables on our term and by-age pages, and remember that a slightly smaller affordable policy in force beats a perfect number never purchased. If health issues raise premiums, prioritize the longest essential need first, then add a second layer when budget allows. Lock in while young and healthy: re-entering the market a decade later at an older age with new health history is the most expensive path.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How life insurance pricing works in 2026</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insurers build life insurance prices from filed rating plans that weigh your personal risk factors, the coverage options you select, and state rules that limit what can be charged. Personal factors usually dominate: age, history, location, and coverage choices explain most of the difference between two shoppers with similar profiles. Carriers then apply discounts, surcharges, fees, and taxes that vary by company and state, which is why identical coverage can produce meaningfully different quotes from different insurers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Public filings and state department of insurance resources confirm the same shopping lesson every year: compare at least three quotes on identical coverage limits before deciding. Rate filings change over time as loss trends, reinsurance costs, and state approvals evolve, so a carrier that was cheapest for your neighbor two years ago may not be cheapest for you today. Underwriting classes, tobacco status, and exam results move life quotes the most, so apply with full disclosure and ask each carrier how it treats your specific health history.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: define the coverage limits and deductible that fit your budget and risk tolerance, gather the facts insurers ask for, request quotes on identical limits from several insurers or a broker who represents multiple carriers, compare exclusions and claim service alongside price, and confirm everything in the issued policy during any free-look or review period. Keep copies of quotes and the final policy together so you can verify that the issued terms match what you approved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include buying only enough to cover the mortgage while ignoring income replacement, naming no contingent beneficiary, letting an old policy lapse before replacement coverage is issued, and relying solely on one to two times salary in employer group coverage that ends with employment.</p>
        </section>
        <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Household</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Starting multiple of income</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Notes</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Single earner, young children</td><td className="px-4 py-3 text-sm text-slate-300">12–15x plus mortgage</td><td className="px-4 py-3 text-sm text-slate-300">Largest gap; favor 30-year terms</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Dual income, young children</td><td className="px-4 py-3 text-sm text-slate-300">8–10x per earner plus mortgage</td><td className="px-4 py-3 text-sm text-slate-300">Net surviving income; add childcare costs</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Single parent</td><td className="px-4 py-3 text-sm text-slate-300">12–15x plus mortgage</td><td className="px-4 py-3 text-sm text-slate-300">Long term; name guardian and contingent beneficiary</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Stay-at-home parent</td><td className="px-4 py-3 text-sm text-slate-300">$250k–$500k flat</td><td className="px-4 py-3 text-sm text-slate-300">Values unpaid care; covers transition costs</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Empty nesters, small mortgage</td><td className="px-4 py-3 text-sm text-slate-300">3–5x or final-expense plus bridge</td><td className="px-4 py-3 text-sm text-slate-300">Focus on survivor income gap and debts</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: dual-income family with two kids</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Jordan earns $120,000 and Casey earns $85,000, with a $400,000 mortgage, $35,000 in debts, and college goals of $100,000 per child. For Jordan: 10 times income ($1,200,000) plus half the mortgage ($200,000) plus half the debts ($17,500) plus $200,000 education totals about $1,617,500, minus $100,000 savings share and $180,000 group coverage, for a gap near $1.34 million, rounded to a shoppable $1.25 or $1.5 million face. Casey runs the mirror calculation and lands near $900,000, rounded to $1 million.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">A laddered structure fits: $1 million for 20 years covering peak dependency plus $500,000 for 30 years covering the mortgage tail for Jordan, and a single $1 million 20-year policy for Casey. Both examples are illustrative worksheets only; underwriting, carrier choice, and state rules set real premiums, so confirm with licensed quotes.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Is 10x income really enough?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">It is a starting frame, not a verdict. Add mortgage, debts, and education, subtract assets and existing coverage, and adjust for years of dependency. Young families with big mortgages often need more than 10x.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Should a stay-at-home parent carry life insurance?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Usually yes. Replacing childcare, transport, and household management plus the working spouse's disruption commonly justifies $250,000 to $500,000 even with no earned income.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What is laddering?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Stacking policies with different terms, such as $750,000 for 20 years plus $500,000 for 30 years, so coverage steps down as obligations shrink. It often costs less than one large long policy.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Does group coverage through work count?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Count only what you verified, and remember it typically ends with employment and pays just one to two times salary. Most families with young children need individual coverage beyond it.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">How often should I revisit my number?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">After births, home purchases, raises, divorces, and every three to five years. Re-shop before health changes make new coverage expensive.</p>
            </div>
          </div>
        </section>
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/term-life-insurance-calculator" className="text-amber-200 underline hover:text-amber-100">Term life insurance calculator</Link></li>
            <li><Link href="/whole-life-vs-term-life" className="text-amber-200 underline hover:text-amber-100">Whole life vs. term life</Link></li>
            <li><Link href="/life-insurance-cost-by-age-chart" className="text-amber-200 underline hover:text-amber-100">Life insurance cost by age chart</Link></li>
            <li><Link href="/disability-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Disability insurance guide</Link></li>
          </ul>
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Special situations: business owners, divorce, and special-needs planning</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Business owners add layers the DIME worksheet misses: buy-sell funding so surviving partners can purchase a deceased owner's share, key-person coverage protecting the company against losing its rainmaker, and loan guarantees that survive the borrower. Each needs its own face amount, ownership structure, and beneficiary designations coordinated with operating agreements and lenders. Review these whenever ownership percentages, valuations, or debt change rather than on a fixed calendar.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Divorce decrees often mandate life insurance securing alimony or child support, specifying face amounts, beneficiaries, and proof-of-coverage duties that override personal preferences. Court-ordered coverage must stay in force regardless of remarriage or new policies, and trustees should hold copies of every decree alongside every policy. Special-needs families pair larger face amounts with special-needs trusts so death benefits supplement rather than disqualify means-tested programs.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Final-expense needs persist after all other obligations fade: funeral costs, probate liquidity, and small debts argue for retaining modest permanent or convertible term coverage into later decades. Document the purpose of each policy in a one-page cover sheet so survivors and executors understand which obligation each face amount serves.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Income-replacement math versus needs-based math</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Income-multiplier methods estimate protection as a multiple of salary, commonly 10 to 15 times, which is fast but blind to mortgages, college goals, and existing assets. Needs-based methods like DIME price each obligation explicitly and subtract offsets, producing tailored answers that diverge from multiples by hundreds of thousands. Educators recommend starting with the multiplier for orientation and finishing with needs analysis for the purchase decision.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Present-value thinking refines income replacement further: discounting future income needs at conservative rates and netting survivor earnings, pensions, and Social Security survivor benefits. A $100,000 income over 20 years is not $2 million of need once taxes, saved expenses, and survivor income adjust the total. Online present-value calculators illustrate the mechanics, but verify assumptions with an advisor before treating outputs as orders.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Whatever method you choose, revisit the number after every major life event and re-shop before health changes narrow options. Document assumptions alongside the face amount so future reviews adjust inputs rather than starting over.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Start with 10–12x income, then finish with the DIME worksheet minus assets and existing coverage.</li>
              <li>Round to shoppable face amounts and test 20- versus 30-year pricing.</li>
              <li>Value stay-at-home labor explicitly, commonly justifying $250,000–$500,000.</li>
              <li>Ladder policies when obligations have different horizons.</li>
              <li>Revisit after births, purchases, raises, and divorces.</li>
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
