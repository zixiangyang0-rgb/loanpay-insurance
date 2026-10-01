import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what insurance.loanpaylogic.com covers and how our educational insurance estimators work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">About LoanPay Insurance</h1>
      <p className="mt-5 leading-relaxed text-slate-300">
        insurance.loanpaylogic.com is an educational publishing project focused
        on personal insurance topics — auto, home, life, pet, and renters
        coverage. Our goal is to translate confusing policy language into
        plain-English guides and simple cost worksheets that anyone can follow.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        We are not an insurance company, agency, or brokerage, and we do not
        sell policies or provide quotes. Every estimator on this site produces
        educational estimates only, designed to help you ask better questions
        when you speak with a licensed agent — not to replace professional
        advice.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        If you spot an error or want to suggest a topic, contact us at
        support@loanpaylogic.com. We review feedback regularly and update
        guides to keep them clear and current.
      </p>
    </div>
  );
}
