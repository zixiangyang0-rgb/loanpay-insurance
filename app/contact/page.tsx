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
        Questions about an insurance guide, a broken link, a number that needs
        updating, or a coverage rule that looks out of date? We would love to
        hear from you. Email us at{" "}
        <a
          href="mailto:support@loanpaylogic.com"
          className="text-amber-200 underline"
        >
          support@loanpaylogic.com
        </a>{" "}
        and mention the page URL so we can find the issue and fix it quickly.
        We aim to reply within 3 to 5 business days.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        When you write, please include the page URL you are writing about, a
        short description of your question, and, for possible errors, what you
        expected to see and where you saw the conflicting figure. Screenshots
        or links to the official source you checked, such as your state
        department of insurance, a National Association of Insurance
        Commissioners consumer guide, a FEMA flood map, or a HealthCare.gov
        page, help us verify the facts much faster and publish a correction
        without delay.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Please note we cannot provide insurance advice by email. Our small
        editorial team publishes educational content only and cannot review
        policy documents, compare quotes, estimate your premium, advise on a
        claim, or answer account-specific questions for third-party insurers.
        We provide educational estimates only and cannot give personalized
        quotes. For decisions about your own coverage, consult a licensed
        agent in your state before you buy, renew, or file. Never send
        sensitive information such as policy numbers or payment details by
        email.
      </p>
      <p className="mt-4 leading-relaxed text-slate-300">
        Topic suggestions are also welcome. If a guide you need is missing —
        for example a homeowners walkthrough, a flood-zone cost comparison,
        or a bundling checklist — tell us which situation you are facing and
        we will consider it for our publishing queue. Reader messages go
        directly to the editors, and advertisers never influence our replies.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="mt-8 rounded-2xl border border-white/10 p-6"
      >
        <h2 className="text-xl font-semibold text-white">
          Who Reads Your Message and How We Keep Guides Accurate
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Messages to this page are read by our three-person editorial team:
          Sarah Mitchell, Senior Personal Finance Writer, who drafts and
          maintains our guides; David Chen, CPA, our independent fact-checking
          reviewer, who verifies numbers, definitions, and worked examples; and
          Emily Roberts, Managing Editor, who gives the final sign-off before
          anything is published. Together, the team brings over 25 years of
          combined experience in financial education, certified public
          accounting, and digital publishing to every page on this site.
        </p>
        <p className="mt-4 leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. We
          re-check our contact workflow and every linked guide on a regular
          review cycle, and we publish corrections promptly whenever a reader
          flags an error. When you write to us, please include the page URL and
          a short description of what looks outdated, and our editorial team
          will verify the facts against primary public sources and update the
          guide as quickly as possible.
        </p>
      </section>
    </div>
  );
}
