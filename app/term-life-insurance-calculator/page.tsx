import type { Metadata } from "next";
import Link from "next/link";
import TermEstimator from "./calculator";
import AdSlot from "../../components/AdSlot";
import { ArticleFaqJsonLd } from "../../components/schema";

export const metadata: Metadata = {
  title: "Term Life Insurance Calculator: Estimate Your Coverage",
  description: "Estimate term life insurance coverage and costs: how term length, coverage amount, age, and health class shape illustrative monthly premiums.",
  alternates: { canonical: "https://insurance.loanpaylogic.com/term-life-insurance-calculator" },
};

const faqs = [
  {
    q: "How much term life insurance do most people buy?",
    a: "Face amounts of $250,000 to $1 million with 20- or 30-year terms are commonly compared starting points, but the right amount is personal. Use the DIME worksheet above, subtract existing assets and coverage, and test two or three term lengths before deciding.",
  },
  {
    q: "Does term life build cash value?",
    a: "No. Term has no cash value; premiums buy pure death-benefit protection. That is why it costs far less than whole life for the same face amount, and why outliving the term means coverage simply ends.",
  },
  {
    q: "Can I renew or convert after the term ends?",
    a: "Most policies offer annual renewal at higher attained-age rates plus a conversion window to permanent coverage without new underwriting, often until around age 65 to 70. Check your policy for exact deadlines since they vary by carrier.",
  },
  {
    q: "Will vaping affect my rate?",
    a: "Many carriers now treat vaping and nicotine pouches like tobacco use, which raises premiums substantially. Disclose honestly and compare carriers, since definitions and rate impacts differ.",
  },
  {
    q: "How long does approval take?",
    a: "Accelerated underwriting can approve healthy applicants in days with no exam, while full underwriting with an exam and records review can take two to six weeks. Apply before cancelling any existing coverage.",
  },
];

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:flex lg:gap-8">
      <ArticleFaqJsonLd
        path="/term-life-insurance-calculator"
        headline="Term life insurance calculator: estimate coverage and cost"
        description="Estimate term life insurance coverage and costs: how term length, coverage amount, age, and health class shape illustrative monthly premiums."
        faqs={faqs}
      />
      <div className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Life insurance • Term life</p>
          <h1 className="hero-title mt-4 text-3xl font-bold leading-tight sm:text-4xl">Term life insurance calculator: estimate coverage and cost</h1>
          <p className="mt-3 text-sm text-slate-400">
            By <span className="font-medium text-slate-200">LoanPay Insurance editorial team</span> · Updated October 2026 · Educational estimates only, not quotes
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">Term life insurance is temporary protection that pays a death benefit if you die during the policy term, typically 10, 20, or 30 years. It is the most affordable way for most families to secure a large death benefit during the years when dependents rely on their income, and this guide walks through how to estimate both the coverage amount and the illustrative monthly cost. You will learn which inputs move premiums the most, see comparison tables by age and health class, work through two numeric examples, and try a simple on-page estimator that labels every result clearly as an estimate. All figures here are illustrative educational ranges, not quotes, and actual offers depend on underwriting, carrier filings, and state rules. Throughout, we use an examples framing: carrier names appear only as examples of the kinds of insurers people compare, never as a ranked best choice, because the right carrier for you depends on your health profile and the quotes you actually receive.</p>
          <TermEstimator />
          <AdSlot slot="TODO-insurance-display-term-top" format="display" />
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">How term life insurance works</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">A term policy has three core promises: a level premium for the length of the term, a fixed death benefit, and a defined end date. If you outlive the term, coverage ends with no cash value, which is exactly why term is so much cheaper than permanent insurance. Most policies let you choose a term length that matches a financial obligation, such as a 30-year mortgage or the years until a youngest child finishes college, and many include a conversion option that lets you switch to permanent coverage without new underwriting before a stated age.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Underwriting sorts applicants into health classes such as Preferred Plus, Preferred, Standard Plus, and Standard, plus separate tobacco and non-tobacco tracks. Your class, age at issue, coverage amount, and term length explain most of the price difference between two applicants. A 20-year, $500,000 policy for a healthy 30-year-old non-smoker sits in the lowest illustrative band, while the same face amount for a 50-year-old smoker can cost several times more. Guaranteed-issue or simplified-issue products skip the exam but charge higher premiums for smaller face amounts, so fully underwritten term is usually the value choice for healthy applicants.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">What coverage amount to enter in the calculator</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Start with the DIME method as a rough frame: add Debts (excluding mortgage if counted separately), Income replacement (10 to 12 times annual income is a common starting multiple), Mortgage balance, and Education costs, then subtract liquid assets and existing coverage. A household earning $90,000 with a $320,000 mortgage, $25,000 in other debts, and two young children might land between $900,000 and $1.2 million before offsets, which is why 20- and 30-year terms at $500,000 to $1 million are the most commonly compared face amounts.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Then sanity-check the result against your budget and insurability. A larger face amount with a shorter term often costs less than a smaller amount with a longer term, so test combinations: $750,000 for 20 years versus $500,000 for 30 years, for example. If anyone depends on you for more than 20 years, lean toward the longer term even if the premium is higher, because re-entering the market at an older age is far more expensive. Families also commonly ladder coverage, pairing a large 20-year policy for peak need years with a smaller 30-year policy that extends into the mortgage tail.</p>
          </section>
          <AdSlot slot="TODO-insurance-inarticle-term-1" format="in-article" />
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">How term life premiums are set</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Carriers file base rates by age, sex, and health class, then adjust for term length, face-amount band discounts, tobacco use, and riders. Face-amount bands matter more than shoppers expect: per-$1,000 rates often fall as you move from $100,000 to $250,000 to $500,000, because fixed underwriting costs spread over more coverage. Riders such as child term, waiver of premium, or accelerated death benefit add modest cost and should be weighed against standalone alternatives.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Two underwriting trends shape 2026 shopping. First, accelerated underwriting lets many healthy applicants skip the paramedical exam using prescription histories, MIB records, motor-vehicle reports, and electronic health data, with decisions in days rather than weeks. Second, tobacco definitions have widened at some carriers to include vaping and nicotine pouches, so disclose honestly and compare how different carriers treat your profile. Marijuana, build (height-to-weight ratios), family history, hazardous hobbies, and driving records also move your class. Because each carrier weights these factors differently, comparing three to five quotes is the single highest-value step you can take.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Term lengths compared: 10, 20, and 30 years</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Ten-year term suits short, defined needs such as covering a small business loan or bridging the gap until a pension vests, and it offers the lowest illustrative monthly cost. Twenty-year term is the workhorse for parents of young children, covering the dependency years at a moderate premium. Thirty-year term locks in insurability the longest and costs the most per month, but protects against the risk that health changes make future coverage unaffordable.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Renewability deserves attention: most term policies renew annually after the level period at sharply higher attained-age rates, and conversion windows typically close around age 65 to 70 depending on the carrier. If permanent coverage might ever appeal to you, confirm the conversion deadline and the eligible permanent products before you buy, because conversion privileges differ widely. Re-entry or re-entry-term features at a handful of carriers let healthy insureds re-qualify for lower rates mid-term, which is a useful but uncommon perk to ask about.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Shopping checklist and mistakes to avoid</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Shop in this order: decide the face amount and term using the worksheet below, gather your health facts (medications, height and weight, tobacco history, family history), request quotes from several carriers or a broker who represents multiple carriers, compare the financial-strength ratings and conversion terms alongside price, and apply with full disclosure so the issued class matches the illustration. Keep the illustration and the issued policy together so you can verify the health class and premium before the free-look period expires.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Common mistakes include buying only enough to cover the mortgage while ignoring income replacement, naming no contingent beneficiary, letting an old policy lapse before the replacement is issued, and assuming employer group coverage is enough. Group coverage of one to two times salary rarely covers a family with young children, and it usually ends when employment ends. Another frequent error is rounding down the term to save a few dollars a month, only to need new coverage at age 50 when rates are multiples higher.</p>
          </section>
          <div className="glass-card mt-6 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Age at issue</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Preferred Plus (illustrative)</th><th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-amber-200/80">Standard (illustrative)</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">25</td><td className="px-4 py-3 text-sm text-slate-300">$18–$26</td><td className="px-4 py-3 text-sm text-slate-300">$30–$45</td></tr>
                <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">30</td><td className="px-4 py-3 text-sm text-slate-300">$20–$30</td><td className="px-4 py-3 text-sm text-slate-300">$35–$55</td></tr>
                <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">35</td><td className="px-4 py-3 text-sm text-slate-300">$24–$36</td><td className="px-4 py-3 text-sm text-slate-300">$45–$70</td></tr>
                <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">40</td><td className="px-4 py-3 text-sm text-slate-300">$34–$52</td><td className="px-4 py-3 text-sm text-slate-300">$65–$100</td></tr>
                <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">45</td><td className="px-4 py-3 text-sm text-slate-300">$55–$85</td><td className="px-4 py-3 text-sm text-slate-300">$105–$160</td></tr>
                <tr className="border-t border-white/10"><td className="px-4 py-3 text-sm text-slate-300">50</td><td className="px-4 py-3 text-sm text-slate-300">$95–$145</td><td className="px-4 py-3 text-sm text-slate-300">$180–$270</td></tr>
              </tbody>
            </table>
          </div>
          <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Worked example">
            <h2 className="text-xl font-semibold text-white">Worked example: sizing coverage for a young family</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Consider Maya, 33, earning $95,000, with a $340,000 mortgage, $20,000 in auto and student debt, and children ages 4 and 7. Using 11 times income ($1,045,000) plus mortgage ($340,000) plus debts ($20,000) plus $120,000 earmarked for college gives $1,525,000, minus $90,000 in savings and a $150,000 group policy, for a gap near $1,285,000. She compares a $1 million 20-year policy with a $500,000 30-year policy and finds the laddered pair stretches protection across both the child-dependency window and the mortgage tail.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Consider a second household: Dev, 45, earning $130,000, mortgage nearly paid, children in high school. His gap centers on six to eight years of income replacement plus college top-ups, roughly $600,000 after offsets. A 15- or 20-year $500,000 policy fits better than a new 30-year term, and because his blood pressure is controlled with medication, he asks two brokers how different carriers treat that history. Both examples are illustrative only: your health class, carrier choice, and state rules determine real quotes, so use this math as a worksheet and confirm with licensed quotes.</p>
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
          <AdSlot slot="TODO-insurance-multiplex-term" format="multiplex" />
          <section className="mt-10" aria-label="Related guides">
            <h2 className="text-2xl font-semibold text-white">Related guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-300 sm:text-base">
              <li><Link href="/how-much-life-insurance-do-i-need" className="text-amber-200 underline hover:text-amber-100">How much life insurance do I need?</Link></li>
              <li><Link href="/whole-life-vs-term-life" className="text-amber-200 underline hover:text-amber-100">Whole life vs. term life</Link></li>
              <li><Link href="/life-insurance-cost-by-age-chart" className="text-amber-200 underline hover:text-amber-100">Life insurance cost by age chart</Link></li>
              <li><Link href="/disability-insurance-guide" className="text-amber-200 underline hover:text-amber-100">Disability insurance guide</Link></li>
            </ul>
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Medical exams, nicotine testing, and approval timelines</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Fully underwritten term applications typically involve a paramedical exam measuring height, weight, blood pressure, and pulse, plus blood and urine labs screening cholesterol, glucose, liver and kidney markers, HIV, and nicotine metabolites. Prescription-history checks, motor-vehicle reports, and MIB records supplement the exam, and attending-physician statements follow for disclosed conditions. Accelerated programs waive the exam for qualifying profiles using the same third-party data, trading broader lab insight for speed.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Nicotine testing detects cotinine from cigarettes, vaping, pouches, and replacement therapies within windows stretching days to weeks depending on the product and test. Celebratory cigar use within 12 months still affects many carriers, while documented long-term cessation with testing can restore non-tobacco classes. Answer every tobacco question literally and ask the agent for the carrier&apos;s exact lookback before applying.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">Timelines run days for accelerated approvals and two to six weeks for full underwriting with records review. Apply while existing coverage stays in force, complete exam requirements promptly, and use the free-look period after issue to verify the health class and premium against the illustration. Keep the issued policy, illustration, and exam results together for future re-shopping.</p>
          </section>
          <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Key takeaways">
            <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li>Match term length to your longest obligation, usually children reaching independence or mortgage payoff.</li>
              <li>Test two or three face amounts and terms before deciding; per-$1,000 rates often fall as coverage rises.</li>
              <li>Compare three to five carriers with full disclosure, since underwriting weights differ widely.</li>
              <li>Confirm conversion privileges and renewal terms before you buy, not after health changes.</li>
              <li>Keep existing coverage in force until replacement is issued and verified.</li>
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
      </div>
      <aside className="hidden w-[300px] shrink-0 lg:block" aria-label="Sidebar advertisement">
        <div className="sticky top-6">
          <AdSlot slot="TODO-insurance-sidebar-300x250-term" format="display" className="my-0" />
        </div>
      </aside>
    </div>
  );
}
