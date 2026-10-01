import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for insurance.loanpaylogic.com: educational estimates, not professional advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-5 leading-relaxed text-slate-300">
        Content on insurance.loanpaylogic.com is published for general
        educational purposes. Insurance examples, ranges, and worksheets are
        educational estimates only — they are not quotes, offers of coverage,
        or professional insurance advice.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Insurance is a Your Money or Your Life (YMYL) topic: a wrong decision
        can leave you underinsured or paying for coverage you do not need.
        Rating factors, discounts, and state requirements change frequently and
        differ across carriers, so any numbers you see here may not match what
        an insurer offers you.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Always confirm coverage options, exclusions, and pricing with a
        licensed insurance agent or broker in your state, and rely on the
        official policy documents rather than any summary. If you have questions
        about our content, email support@loanpaylogic.com.
      </p>
    </div>
  );
}
