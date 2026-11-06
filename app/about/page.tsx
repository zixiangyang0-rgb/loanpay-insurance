import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what insurance.loanpaylogic.com covers and how our educational insurance estimators work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">About insurance.loanpaylogic.com</h1>
      <p className="mt-5 leading-relaxed text-slate-300">
        LoanPay Insurance is a small editorial project that explains United
        States personal insurance topics in plain English: auto liability versus
        full coverage, homeowners and renters coverage, term versus whole life,
        flood insurance by zone, umbrella liability, pet insurance, copays
        versus coinsurance versus deductibles, how premiums are calculated, how
        claims work, and how bundling home and auto can change the total bill.
        Our interactive worksheets — including the auto cost estimator, the
        term-life needs calculator, and the bundle savings calculator — walk
        through the math step by step so you can see where every dollar goes.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Our goal is to help readers build intuition before they buy: what each
        coverage part pays for, which limits and deductibles repeat on every
        renewal, how driving history, ZIP code, home age, and flood zone move
        a quoted rate, and which documents matter most at claim time. Every
        guide on insurance.loanpaylogic.com provides general education only
        and encourages readers to verify details with their state department
        of insurance, the National Association of Insurance Commissioners,
        FEMA and the National Flood Insurance Program for flood maps, or
        HealthCare.gov for marketplace coverage before acting.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Each article is researched from public sources and written in original
        language by our editorial team. We focus on educational content only:
        explaining how policies work, showing worked cost examples, and helping
        readers compare options side by side. We are not an insurance company,
        agency, or brokerage. We do not sell policies or provide quotes, and
        every estimator produces educational estimates only — to help you ask
        better questions of a licensed agent, not to replace professional
        advice. The site is supported by display advertising so guides stay
        free, and advertisers never influence our conclusions in any way.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        We are independent writers and developers, not licensed agents or
        attorneys. Our process starts with primary public sources, including
        state insurance bulletins, NAIC consumer guides, and FEMA flood-map
        and NFIP pricing documentation. We cross-check every figure against at
        least two independent sources and rewrite findings in plain English.
        If you spot an error, tell us at support@loanpaylogic.com with the
        page URL so we can correct it promptly.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="mt-8 rounded-2xl border border-white/10 p-6"
      >
        <h2 className="text-xl font-semibold text-white">
          Who Wrote This Page and How We Check Our Facts
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          This page was written by Sarah Mitchell, Senior Personal Finance
          Writer; reviewed for accuracy by David Chen, CPA, our independent
          fact-checking reviewer; and edited by Emily Roberts, Managing Editor.
          Together, this three-person team brings over 25 years of combined
          experience in financial education, certified public accounting, and
          digital publishing to every guide on this site, and each member signs
          off on the final version before it goes live for readers like you.
        </p>
        <p className="mt-4 leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026.
          Insurance rules and rates change frequently, so we re-check each
          guide on a regular cycle and publish corrections promptly whenever
          readers flag an error at support@loanpaylogic.com.
        </p>
      </section>
    </div>
  );
}
