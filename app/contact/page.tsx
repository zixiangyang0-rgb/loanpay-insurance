import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact insurance.loanpaylogic.com for feedback on educational insurance guides.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-5 leading-relaxed text-slate-300">
        We welcome feedback on insurance.loanpaylogic.com — corrections,
        topic requests, and questions about our educational insurance guides
        and estimators.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Email us at{" "}
        <a
          href="mailto:support@loanpaylogic.com"
          className="text-amber-200 underline"
        >
          support@loanpaylogic.com
        </a>
        . We aim to reply within a few business days.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Please note that we provide educational estimates only and cannot give
        professional insurance advice or personalized quotes. For advice about
        your own coverage, contact a licensed agent in your state. Never send
        sensitive information such as policy numbers or payment details by
        email.
      </p>
    </div>
  );
}
