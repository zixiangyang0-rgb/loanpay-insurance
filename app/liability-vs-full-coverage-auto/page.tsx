import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liability vs. Full Coverage Auto Insurance Compared",
  description: "Understand liability vs. full coverage car insurance: what each pays, illustrative cost gaps, and when liability-only makes sense.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/liability-vs-full-coverage-auto" },
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Auto insurance • Coverage types</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">Liability vs. full coverage auto insurance</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Liability-only pays others when you cause harm; full coverage adds protection for your own vehicle. The price gap is large and the right choice depends on vehicle value, loan status, savings, and how much liability risk you carry. This guide defines each coverage, shows illustrative cost gaps by driver profile, and gives a decision framework you can apply to every car you own. All figures are illustrative estimates, not quotes, and carrier names are only examples to compare.</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">Updated: October 2026 — reviewed against publicly available 2026 insurer and state sources.</p>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Liability coverage in plain English</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Bodily-injury liability pays others' medical costs when you cause a crash, up to per-person and per-accident limits, while property-damage liability pays for others' vehicles and property you damage. Limits read as three numbers such as 100/300/100: $100,000 per injured person, $300,000 per accident, and $100,000 for property. Everything above your limits becomes your personal responsibility, which is why minimum limits leave real exposure for anyone with wages or savings.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Uninsured and underinsured motorist coverage, required in some states and optional in others, pays your household when an at-fault driver carries too little insurance. Medical-payments or personal-injury protection covers immediate medical and sometimes wage-loss costs regardless of fault, with PIP mandatory in no-fault states. None of these pay for your own vehicle's damage, which is the gap collision and comprehensive fill.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">What full coverage adds and costs</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Collision pays for your vehicle's crash damage minus deductible regardless of fault, while comprehensive pays for non-crash losses such as theft, hail, flood, fire, vandalism, and animal strikes. Lenders and lessors typically require both with maximum allowable deductibles until the loan is satisfied. Rental reimbursement, roadside assistance, and gap coverage round out many full-coverage stacks for modest additional premium.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Illustratively, adding collision and comprehensive with $500 deductibles to a clean-record adult policy often roughly doubles to triples the liability-only premium, with the spread tracking vehicle value. A $45,000 SUV costs far more to cover physically than a $9,000 sedan because repair parts, labor, and total-loss exposure scale with value. Glass, hail, and theft frequency in your territory further tune comprehensive pricing.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Choosing between them without regret</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Keep full coverage when a total loss would strand you: financed vehicles, daily drivers worth well above your emergency fund, and high-theft or hail territories. Consider liability-only when the vehicle is paid off, worth only a few thousand dollars, and replaceable from savings, especially if annual physical-damage premiums approach a third or more of the car's value. Middle paths exist: keep comprehensive for cheap hail-and-theft protection while dropping expensive collision on older cars.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Whatever you choose, keep liability strong even when physical damage is dropped, because injury verdicts dwarf fender-benders. Match uninsured-motorist limits to your liability limits, carry medical-payments or PIP that fits your health insurance deductibles, and revisit the choice yearly as the vehicle depreciates. Document the decision with the numbers so future-you remembers why the tradeoff made sense.</p>
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
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Coverage</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Pays for</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Required when</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Bodily injury liability</td><td className="px-4 py-3 text-sm text-slate-300">Others' injuries you cause</td><td className="px-4 py-3 text-sm text-slate-300">Required in nearly every state</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Property damage liability</td><td className="px-4 py-3 text-sm text-slate-300">Others' vehicles/property you damage</td><td className="px-4 py-3 text-sm text-slate-300">Required in nearly every state</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Collision</td><td className="px-4 py-3 text-sm text-slate-300">Your car after a crash, minus deductible</td><td className="px-4 py-3 text-sm text-slate-300">Usually required by lenders/lessors</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Comprehensive</td><td className="px-4 py-3 text-sm text-slate-300">Theft, hail, flood, fire, animals</td><td className="px-4 py-3 text-sm text-slate-300">Usually required by lenders/lessors</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Uninsured motorist</td><td className="px-4 py-3 text-sm text-slate-300">Your injuries from uninsured drivers</td><td className="px-4 py-3 text-sm text-slate-300">Required in some states; wise everywhere</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: when dropping collision pencils out</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Marcus owns a 13-year-old hatchback worth about $4,500 with no loan. His full-coverage quote illustrates $205 per month while liability-only plus uninsured-motorist illustrates $85, a $1,440 annual difference. The most collision could ever pay is about $4,000 after his $500 deductible, so one claim-free year nearly covers a third of the car's value and three years exceed it. He drops to liability-only, keeps strong 100/300/100 limits, and directs the savings to a replacement fund.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">His partner leases a new crossover worth $38,000 and must carry full coverage by contract, illustrating about $230 per month with $500 deductibles. Different cars, different answers, same framework. Both illustrations are educational only; your record, territory, and carrier set real prices.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Does liability cover my own car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No. Liability pays others you harm. Only collision and comprehensive, part of full coverage, pay for your own vehicle's damage and non-crash losses.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What limits should I carry?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Many educators suggest at least 100/300/100 for drivers with assets or income, with an umbrella policy above that for higher net worth. State minimums rarely survive a serious injury claim.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Is full coverage legally required?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">No state requires collision and comprehensive as such, but lenders and lessors require them by contract until loans are satisfied. Liability minimums are the legal requirement.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Can I keep comprehensive but drop collision?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Often yes, and it can be smart for older cars in hail or theft territories, since comprehensive is usually cheaper than collision. Ask your insurer for that split quote.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Will full coverage pay off my loan?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Only gap coverage pays the difference between loan balance and actual cash value after a total loss. Standard collision pays market value, not the loan balance.</p>
            </div>
          </div>
        </section>
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/auto-insurance-cost-calculator" className="text-amber-200 underline hover:text-amber-100">Auto insurance cost calculator</Link></li>
            <li><Link href="/texas-auto-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Texas auto insurance guide</Link></li>
            <li><Link href="/umbrella-insurance-explained" className="text-amber-200 underline hover:text-amber-100">Umbrella insurance explained</Link></li>
            <li><Link href="/bundling-home-auto-insurance" className="text-amber-200 underline hover:text-amber-100">Bundling home and auto</Link></li>
          </ul>
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Uninsured motorist, medical payments, and umbrella coordination</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Uninsured and underinsured motorist coverage deserves limits matching your liability limits, because the drivers most likely to injure you carry the least insurance. Stacking rules, where states permit, multiply per-vehicle UM limits across household cars for broader protection. Hit-and-run and phantom-vehicle claims follow strict notice and corroboration rules, so report promptly and document everything at the scene.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Medical-payments and personal-injury protection bridge health-insurance deductibles and lost-income gaps regardless of fault, with PIP mandatory in no-fault states and elective elsewhere. Coordinate these limits with your health plan deductible so one product does not overpay for gaps the other already covers. Pedestrians and cyclists in your household benefit from these coverages even without a vehicle involved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Umbrella policies extend liability above auto limits in million-dollar increments for an illustratively modest premium, completing the protection stack for households with assets or income. Raising auto liability to umbrella-required floors usually illustrates small premium steps with large protection gains. Review the full stack annually as net worth grows.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Collision deductibles, rental, and roadside math</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Collision deductibles trade directly against premium: $250 deductibles illustrate the most premium with the least claim shock, while $1,000 deductibles save meaningfully for funded households. Break-even math over five claim-free years decides the step, and multi-vehicle households should fund the per-claim exposure across every car since one hailstorm can trigger several deductibles at once.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Rental reimbursement pays daily transportation allowances with per-day and per-event caps that rarely cover full-size rentals in expensive markets. Compare the rider price against emergency-fund capacity and workplace flexibility before adding it to every vehicle. Roadside assistance duplicates many manufacturer, phone-plan, and motor-club benefits, so audit existing coverage before paying twice.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Gap coverage closes the loan-lease shortfall when actual cash value trails the payoff balance, essential for low-down-payment and long-term loans. Cancel gap once amortization crosses above market value rather than paying indefinitely.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Liability pays others; only collision and comprehensive pay for your own vehicle.</li>
              <li>Keep full coverage while loans require it or a total loss would strand you.</li>
              <li>Consider liability-only for paid-off low-value cars you can replace from savings.</li>
              <li>Match uninsured-motorist limits to liability limits.</li>
              <li>Revisit the choice yearly as vehicles depreciate.</li>
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
