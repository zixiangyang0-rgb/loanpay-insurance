import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Insurance Guide: Trip, Medical & Evacuation",
  description: "Learn what travel insurance covers: cancellation, interruption, travel medical, evacuation, pre-existing waivers, and illustrative costs.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/travel-insurance-guide" },
};

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Other insurance • Travel</p>
      <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">Travel insurance guide</h1>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">One cancelled trip or one foreign hospital visit can erase years of careful travel savings, which is why comprehensive travel insurance bundles cancellation, medical, evacuation, and baggage protection behind a single premium. This guide explains each benefit, shows how pre-existing waivers and cancel-for-any-reason upgrades work, provides illustrative cost frames, and gives buying steps that avoid the most common gaps. All figures are illustrative estimates, and provider names are only examples to compare.</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">Updated: October 2026 — reviewed against publicly available 2026 insurer and state sources.</p>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">What travel insurance bundles together</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Comprehensive travel policies bundle trip cancellation and interruption, travel medical and medical evacuation, baggage loss and delay, and 24-hour assistance behind one premium. Cancellation pays prepaid nonrefundable costs when covered reasons such as illness, injury, or listed disruptions intervene, while interruption pays the extra transport and unused nights when trips cut short. Travel medical fills the gap domestic health plans leave abroad, and evacuation coverage funds air-ambulance transfers that can cost tens of thousands without it.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Cancel-for-any-reason and interrupt-for-any-reason upgrades refund a share of costs on any motive but must be bought quickly after the first trip payment and require insuring the full trip cost. Rental-car, adventure-sport, and business-equipment riders cover named gaps the base bundle handles narrowly. Assistance lines coordinate hospitals, translators, and rebooking, which matters more abroad than any single benefit line.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Medical, evacuation, and pre-existing rules</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Domestic health insurance often covers little or nothing outside the country, and Medicare generally does not cover foreign hospital care, so travel medical limits deserve real attention for international trips. Evacuation limits should reflect remoteness: $100,000-plus illustrations suit standard itineraries while expedition or cruise travel argues for higher. Pre-existing waivers forgive stability-period lookbacks when you buy within the required window, commonly about two to three weeks after first payment, and insure full prepaid cost.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Age bands price travel medical steeply for older travelers, andTABLE stakes rise with trip cost since cancellation benefits scale with insured dollars. Adventure exclusions for diving, climbing, and racing surprise athletic travelers, so verify sport schedules before relying on base coverage. Keep home-country deductibles and claim-filing windows in mind, because travel policies coordinate rather than duplicate existing health coverage.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Costs and buying steps that avoid gaps</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Illustratively, comprehensive premiums often fall in the single-digit percent of insured trip cost for middle-aged travelers, rising with age, trip length, medical limits, and cancel-for-any-reason upgrades. A $5,000 trip might illustrate a few hundred dollars in premium, while senior travelers with rich medical limits illustrate more. Single-trip versus annual multi-trip math favors annual plans around three or more qualifying trips per year.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Buy in this order: insure the first payment promptly to unlock pre-existing waivers and cancel-for-any-reason eligibility, list every prepaid cost honestly, match medical and evacuation limits to destination risk, and confirm named-storm and work-reason terms for hurricane-season or business travel. Any provider names here are examples to compare, never a ranked best, because trip cost, age, and destination decide value.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">How travel insurance pricing works in 2026</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Insurers build travel insurance prices from filed rating plans that weigh your personal risk factors, the coverage options you select, and state rules that limit what can be charged. Personal factors usually dominate: age, history, location, and coverage choices explain most of the difference between two shoppers with similar profiles. Carriers then apply discounts, surcharges, fees, and taxes that vary by company and state, which is why identical coverage can produce meaningfully different quotes from different insurers.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Public filings and state department of insurance resources confirm the same shopping lesson every year: compare at least three quotes on identical coverage limits before deciding. Rate filings change over time as loss trends, reinsurance costs, and state approvals evolve, so a carrier that was cheapest for your neighbor two years ago may not be cheapest for you today. Trip cost, traveler age, destination medical risk, medical and evacuation limits, and upgrade choices move travel quotes the most, so compare identical limits across providers.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: define the coverage limits and deductible that fit your budget and risk tolerance, gather the facts insurers ask for, request quotes on identical limits from several insurers or a broker who represents multiple carriers, compare exclusions and claim service alongside price, and confirm everything in the issued policy during any free-look or review period. Keep copies of quotes and the final policy together so you can verify that the issued terms match what you approved.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include buying after the waiver window closes, underinsuring trip cost, assuming domestic health coverage works abroad, and skipping evacuation limits on remote itineraries.</p>
        </section>
        <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Benefit</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">What it pays</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Prioritize when</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Trip cancellation</td><td className="px-4 py-3 text-sm text-slate-300">Prepaid nonrefundable costs for covered reasons</td><td className="px-4 py-3 text-sm text-slate-300">Expensive prepaid trips</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Trip interruption</td><td className="px-4 py-3 text-sm text-slate-300">Extra transport plus unused nights</td><td className="px-4 py-3 text-sm text-slate-300">Complex itineraries</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Travel medical</td><td className="px-4 py-3 text-sm text-slate-300">Care abroad your health plan skips</td><td className="px-4 py-3 text-sm text-slate-300">International travel, especially seniors</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Medical evacuation</td><td className="px-4 py-3 text-sm text-slate-300">Air ambulance and repatriation</td><td className="px-4 py-3 text-sm text-slate-300">Remote, cruise, or expedition travel</td></tr>
              <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">Cancel for any reason</td><td className="px-4 py-3 text-sm text-slate-300">Share of costs on any motive</td><td className="px-4 py-3 text-sm text-slate-300">Uncertain plans; buy early</td></tr>
            </tbody>
          </table>
        </div>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
          <h2 className="text-xl font-semibold text-white">Worked example: cancelled cruise plus foreign clinic visit</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">The Hendersons insure an $8,000 cruise within two weeks of the first payment, unlocking the pre-existing waiver and a cancel-for-any-reason upgrade. When a covered illness cancels the sailing, interruption and cancellation benefits refund the prepaid and nonrefundable share per policy terms. On the rebooked trip, a clinic visit abroad bills $900 that domestic insurance would largely deny, and travel medical pays per its schedule minus the small deductible.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Had they bought months later, the waiver window would have closed and the cardiac history would have been excluded. Timing decides travel claims more than most buyers expect. Figures are illustrative only; covered reasons, lookbacks, and limits in real policies control.</p>
        </section>
        <section aria-label="Frequently asked questions" className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-4 grid gap-4">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Does my health insurance work abroad?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Often minimally or not at all, and Medicare generally excludes foreign hospital care. Travel medical exists precisely for that gap — verify your domestic plan's foreign terms before departing.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">What is cancel for any reason?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">An upgrade refunding a share of insured costs on any motive, bought quickly after first payment with full trip cost insured. It costs more and refunds less than covered-reason cancellation.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">How do pre-existing waivers work?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Buy within the required window after first payment and insure full trip cost, and stability-period lookbacks for pre-existing conditions are waived. Miss the window and exclusions apply.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">How much medical coverage do I need?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Higher for international, senior, cruise, and remote travel. Evacuation limits should reflect distance from capable hospitals, since air ambulances bill tens of thousands.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-white">Does travel insurance cover storms?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Named-storm terms vary: buy before storms are named and read hurricane-season provisions. After naming, new policies generally exclude that storm.</p>
            </div>
          </div>
        </section>
        <section className="mt-10" aria-label="Related guides">
          <h2 className="text-2xl font-semibold text-white">Related guides</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
            <li><Link href="/health-insurance-marketplace-guide-2026" className="text-amber-200 underline hover:text-amber-100">Marketplace guide 2026</Link></li>
            <li><Link href="/insurance-claims-process-guide" className="text-amber-200 underline hover:text-amber-100">Claims process guide</Link></li>
            <li><Link href="/pet-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Pet insurance guide</Link></li>
            <li><Link href="/insurance-deductible-explained" className="text-amber-200 underline hover:text-amber-100">Deductible explained</Link></li>
          </ul>
        </section>
                <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Annual plans, inadmissibility gaps, and cruise specifics</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Annual multi-trip plans cover unlimited qualifying trips within length caps for one premium, winning around three or more trips yearly against single-trip pricing. Per-trip medical maximums and cancellation caps still apply, so high-value trips may need supplemental single-trip coverage. Business travelers should verify electronics, documents, and missed-connection terms against real itineraries.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Cruises concentrate travel-insurance value: missed-port, itinerary-change, cabin-confinement, and medical-evacuation-at-sea benefits address risks land trips avoid. Confirm missed-connection windows against flight-to-port buffers and verify whether the policy treats mechanical itinerary changes as covered. Remote-shore medical facilities bill steeply, making evacuation limits the priority line.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Exclusions to read include war and civil-unrest zones, pandemics under older forms, high-altitude and motorsport activities, and unattended-belongings theft definitions. Pre-departure documentation of health, valuables, and bookings accelerates any claim. Buy before nonrefundable payments accumulate.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Documentation, deadlines, and claim-filing discipline</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Claim success follows documentation discipline: booking receipts, fare rules, medical records linking treatment to trip dates, police reports for theft, and carrier delay confirmations form the standard packet. Photograph luggage contents before departure and retain every receipt during disruptions, since reasonable additional expenses require proof. File within policy windows that can be as short as 20 to 90 days depending on benefit.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Cancel-for-any-reason claims follow separate math from covered-reason claims: expect the stated percentage of insured prepaid cost rather than full recovery, with strict purchase-window and full-cost-insurance conditions precedent. Work-reason and weather riders carry their own documentation triggers worth reading before departure rather than after disruption.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Assistance lines reachable 24 hours coordinate hospitals, translators, evacuations, and rebooking more valuably than any single benefit line. Save the number offline, share itineraries with emergency contacts, and register with embassy traveler programs for high-risk destinations. Annual-plan holders should log every trip's bookings centrally to simplify any claim.</p>
        </section>
        <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Insure the first payment promptly to unlock pre-existing waivers and upgrade eligibility.</li>
              <li>Match medical and evacuation limits to destination remoteness and traveler age.</li>
              <li>Insure full prepaid trip cost honestly to preserve waiver and upgrade terms.</li>
              <li>Domestic health plans and Medicare generally do not cover foreign hospital care.</li>
              <li>Save assistance numbers offline and file within policy windows.</li>
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
