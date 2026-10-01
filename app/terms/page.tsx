import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for using insurance.loanpaylogic.com educational insurance content.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-3 text-sm text-slate-400">Last updated: October 2026</p>
      <p className="mt-5 leading-relaxed text-slate-300">
        By using insurance.loanpaylogic.com, you agree to these terms. We
        publish educational insurance guides and worksheets covering auto,
        home, life, pet, and renters topics for general audiences in the United
        States.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Educational use only</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        All content provides educational estimates only and is not professional
        insurance, legal, or financial advice. Actual premiums, eligibility,
        and policy language vary by carrier and state. Always confirm details
        with a licensed agent and read the policy documents before making
        coverage decisions.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Acceptable use</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        You agree not to misuse the site, attempt to disrupt it, scrape content
        at abusive rates, or misrepresent our guides as quotes or professional
        recommendations. Content is provided as-is without warranties of any
        kind.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        Questions about these terms can be sent to support@loanpaylogic.com.
      </p>
    </div>
  );
}
