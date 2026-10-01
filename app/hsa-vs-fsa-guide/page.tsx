import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HSA vs. FSA Guide: Limits, Rules & Which to Pick",
  description: "Compare HSA vs. FSA accounts: triple tax advantage, ownership, rollover rules, dependent care, and how to choose alongside your 2026 health plan.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/hsa-vs-fsa-guide" },
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Health insurance • HSA vs. FSA</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">HSA vs. FSA: which account fits your health plan?</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Health Savings Accounts and Flexible Spending Accounts both pay medical costs with pre-tax dollars, but they follow opposite philosophies. HSAs reward high-deductible plans with ownership, rollover, and investing, while FSAs offer simple use-it-or-lose-it funds inside any plan type. This guide compares eligibility, tax treatment, contribution frames, and rollover rules, then shows how to size contributions with real numbers. Tax and IRS figures change annually, so verify current-year limits on IRS.gov; any illustrative ranges are educational estimates, and account custodians below appear only as examples to compare.</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">Updated: October 2026 — reviewed against publicly available 2026 insurer and state sources.</p>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How HSAs work and 2026 contribution frames</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">A Health Savings Account pairs with a qualifying high-deductible health plan and offers a rare triple tax advantage: deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses. You own the account, balances roll over every year, and the account travels with you between jobs. For 2026, IRS revenue procedures set contribution frames that historically adjust for inflation each October, so verify the final IRS figures for 2026 before contributing, and note the $1,000 catch-up allowance for account holders 55 and older.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">High-deductible thresholds and out-of-pocket caps are likewise indexed annually, and Marketplace Bronze and Catastrophic plans can now pair with HSAs under expanded 2026 eligibility described by CMS. Employers may seed HSAs with contributions that count against your annual limit, so coordinate payroll elections with any employer funding. Keep receipts indefinitely: HSA withdrawals for qualified expenses remain tax-free with no deadline for reimbursement, which lets invested balances compound for decades.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How FSAs work and where they differ</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">A Flexible Spending Account is employer-owned, use-it-or-lose-it coverage for predictable health costs, with healthcare FSAs for medical, dental, and vision expenses and dependent-care FSAs for childcare under separate rules. Employers may offer a grace period or a limited rollover, but any unspent balance above that limit is forfeited, which punishes over-contribution. Contribution limits are set annually by the IRS and are far lower than HSA ceilings, and job changes generally end access except through COBRA continuation.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">FSAs pair with any health plan type, including low-deductible PPOs, which makes them the fallback when no qualifying high-deductible plan is available. Dependent-care FSAs follow different exclusion limits and qualifying-expense rules focused on care that enables work. Limited-purpose FSAs can sit alongside HSAs for dental and vision only, a combination worth asking your benefits team about during open enrollment. The core tradeoff is flexibility: HSAs reward higher deductibles with ownership and investing, while FSAs offer simplicity inside traditional plans at the cost of forfeiture risk.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Choosing between them with real numbers</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Start with plan math: compare the high-deductible premium savings plus any employer HSA seed against the low-deductible plan's higher premium, then stress-test one bad year at the out-of-pocket maximum. Households with steady prescriptions and planned procedures often keep the traditional plan with an FSA sized to known costs, while healthy households with emergency funds often bank the premium savings in an HSA and invest above a cash buffer. Never contribute more to an FSA than verified recurring costs plus a small cushion.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Invest HSA dollars deliberately: hold one year of deductible in cash and invest the rest in low-cost diversified options if your custodian allows, treating the HSA as a retirement-adjacent account. Name a beneficiary, coordinate with a spouse's coverage so disqualifying plans do not break HSA eligibility, and track every qualified receipt. Contribution, HDHP-definition, and out-of-pocket figures change yearly, so verify current IRS numbers each fall rather than trusting prior-year articles.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How health savings account pricing works in 2026</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insurers build health savings account prices from filed rating plans that weigh your personal risk factors, the coverage options you select, and state rules that limit what can be charged. Personal factors usually dominate: age, history, location, and coverage choices explain most of the difference between two shoppers with similar profiles. Carriers then apply discounts, surcharges, fees, and taxes that vary by company and state, which is why identical coverage can produce meaningfully different quotes from different insurers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Public filings and state department of insurance resources confirm the same shopping lesson every year: compare at least three quotes on identical coverage limits before deciding. Rate filings change over time as loss trends, reinsurance costs, and state approvals evolve, so a carrier that was cheapest for your neighbor two years ago may not be cheapest for you today. Eligibility (qualifying high-deductible coverage for HSAs versus any plan for FSAs), contribution limits, and rollover rules move the decision most, so verify current IRS figures each year.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: define the coverage limits and deductible that fit your budget and risk tolerance, gather the facts insurers ask for, request quotes on identical limits from several insurers or a broker who represents multiple carriers, compare exclusions and claim service alongside price, and confirm everything in the issued policy during any free-look or review period. Keep copies of quotes and the final policy together so you can verify that the issued terms match what you approved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include overfunding an FSA and forfeiting balances, enrolling in an HSA without qualifying coverage, and missing the annual deadline for FSA elections during open enrollment.</p>
        </section>
        <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Feature</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">HSA</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Healthcare FSA</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Eligible plans</td><td className="px-4 py-3 text-sm text-slate-300">Qualifying high-deductible plan only</td><td className="px-4 py-3 text-sm text-slate-300">Any plan type</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Ownership</td><td className="px-4 py-3 text-sm text-slate-300">You own it; portable</td><td className="px-4 py-3 text-sm text-slate-300">Employer owns it; generally lost at job change</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Rollover</td><td className="px-4 py-3 text-sm text-slate-300">Full rollover every year</td><td className="px-4 py-3 text-sm text-slate-300">Limited rollover or grace period; rest forfeited</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">2026 contributions</td><td className="px-4 py-3 text-sm text-slate-300">IRS-indexed family/individual frames; verify current IRS figures</td><td className="px-4 py-3 text-sm text-slate-300">Lower IRS-set limit; verify current IRS figures</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Investing</td><td className="px-4 py-3 text-sm text-slate-300">Often investable above cash buffer</td><td className="px-4 py-3 text-sm text-slate-300">Not investable</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Catch-up 55+</td><td className="px-4 py-3 text-sm text-slate-300">$1,000 additional for HSAs</td><td className="px-4 py-3 text-sm text-slate-300">No catch-up provision</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: premium savings vs. deductible risk</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Amir, 34, compares a $180-per-month high-deductible plan with a $340-per-month traditional plan, a $1,920 annual premium saving, plus a $750 employer HSA seed. He contributes $2,500 more to the HSA and holds the plan deductible in cash. In a healthy year he banks over $4,000 in tax-advantaged savings versus the traditional plan. In a bad year hitting the out-of-pocket maximum, the traditional plan with a right-sized FSA could finish modestly ahead, which is exactly the two-scenario comparison every household should run.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">His colleague with a chronic condition and $3,000 in predictable annual prescriptions keeps the traditional plan and funds the FSA at $3,000, avoiding forfeiture while capturing guaranteed tax savings. Both choices are reasonable because the inputs differ. Verify current IRS limits and plan documents before electing, and treat all figures here as illustrative.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Can I have an HSA and an FSA at the same time?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Generally a full healthcare FSA disqualifies HSA contributions, but a limited-purpose FSA for dental and vision can pair with an HSA. Confirm with your benefits administrator before electing both.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What happens to my HSA if I change jobs?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Nothing: you own it and it travels with you. An FSA generally stays with the employer except for limited COBRA continuation.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Do HSA funds expire?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Balances roll over indefinitely and can be invested. FSA balances above the employer's rollover or grace-period allowance are forfeited.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What are 2026 HSA contribution limits?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">IRS-indexed limits adjust annually for inflation, with a $1,000 catch-up at 55+. Verify the final 2026 figures on IRS.gov or in IRS Revenue Procedure publications rather than relying on prior-year articles.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Which is better for young healthy workers?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Often the HSA paired with a high-deductible plan, if cash reserves cover the deductible and the premium savings plus any employer seed are saved rather than spent. Run both scenarios with your actual plan documents.</p>
            </div>
          </div>
        </section>
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/health-insurance-marketplace-guide-2026" className="text-amber-200 underline hover:text-amber-100">Marketplace guide 2026</Link></li>
            <li><Link href="/copay-vs-coinsurance-vs-deductible" className="text-amber-200 underline hover:text-amber-100">Copay vs. coinsurance vs. deductible</Link></li>
            <li><Link href="/insurance-deductible-explained" className="text-amber-200 underline hover:text-amber-100">Deductible explained</Link></li>
            <li><Link href="/new-york-health-insurance-guide" className="text-amber-200 underline hover:text-amber-100">New York health insurance guide</Link></li>
          </ul>
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Contribution timing, investing, and spouse-coordination traps</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Payroll contributions spread across the year capture employer matching rhythms and smooth cash flow, while lump-sum funding early maximizes invested months at the cost of over-contribution risk if coverage changes. The IRS last-month and testing-period rules penalize mid-year coverage lapses for those who front-loaded full-year contributions, so calendar HDHP start dates before choosing a funding pace. Catch-up contributions after 55 belong to the account holder's own account, which complicates joint planning when only one spouse qualifies.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Custodian choice matters once balances exceed the cash buffer: fee schedules, fund lineups, transfer rules, and debit-card logistics differ widely among banks and brokerages offering HSAs. Consolidate orphaned HSAs from prior employers to simplify beneficiary designations and reduce fee drag. Keep every qualified receipt digitally forever, since reimbursements have no deadline and audit defense depends on documentation decades later.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">The classic disqualifier is a spouse's general-purpose FSA or non-qualifying plan covering you: either can destroy your HSA eligibility even when your own coverage qualifies. Coordinate open enrollments jointly, choose limited-purpose FSA designs where available, and confirm telehealth and direct-primary-care arrangements against current IRS qualifying-coverage guidance.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Receipt discipline, investing glide paths, and beneficiary design</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Receipt discipline makes or breaks HSA strategy: photograph every qualified receipt, log provider, date, and amount, and archive digitally with backups, since reimbursements have no deadline and audits can follow decades later. Pay small expenses from cash flow while letting invested HSA balances compound, then reimburse strategically in high-tax or high-need years. Spouses should coordinate whose expenses justify reimbursement timing against marginal rates.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Investing glide paths treat the HSA as retirement-adjacent: hold one year of deductible in cash equivalents and invest the remainder in diversified low-cost funds aligned with the decades-long horizon. Rebalance alongside retirement accounts rather than in isolation, and name beneficiaries with contingent designations so surviving spouses inherit the account's flexible treatment.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">FSA discipline runs opposite: forecast conservatively from verified recurring costs, schedule elective dental, vision, and orthodontia inside the plan year, and use grace-period or rollover mechanics deliberately. Mid-year election changes follow strict qualifying-event rules, so review elections after births, marriages, and job changes.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>HSAs need qualifying high-deductible coverage; FSAs pair with any plan but follow use-it-or-lose-it rules.</li>
              <li>Verify current IRS contribution limits each fall before electing.</li>
              <li>Keep one year of deductible in cash and invest the HSA remainder for the long horizon.</li>
              <li>Save FSA elections for verified recurring costs plus a small cushion.</li>
              <li>Coordinate spouses so one partner's FSA does not disqualify the other's HSA.</li>
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
