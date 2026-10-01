import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for insurance.loanpaylogic.com: cookies, Google AdSense ads, consent choices (including non-personalized ads), and contact.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-400">
        Last updated: October 1, 2026 — applies to
        https://insurance.loanpaylogic.com
      </p>
      <p className="mt-5 leading-relaxed text-slate-300">
        This Privacy Policy explains how LoanPay Insurance
        (&ldquo;we&rdquo;) handles information on
        insurance.loanpaylogic.com. We publish educational insurance guides and
        cost estimators. You can use the site without creating an account or
        submitting policy details.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Information we collect</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        We receive standard technical information automatically: pages visited,
        device and browser type, and approximate location derived from your IP
        address. If you email support@loanpaylogic.com, we receive your message
        and address so we can respond. We do not collect insurance application
        data — never send policy numbers, medical details, or payment
        information to us.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Cookies and Google AdSense advertising
      </h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        We use cookies and similar technologies for basic site operation,
        measurement, and advertising. We display ads served by Google AdSense
        (publisher ID ca-pub-4906207495792820), which uses cookies to serve,
        personalize, and measure ads, including the DoubleClick cookie for
        interest-based advertising.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
        <li>
          Learn how Google uses data when you visit partner sites at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            rel="noopener noreferrer"
            className="text-amber-200 underline"
          >
            Google&apos;s partner-sites policy
          </a>
          .
        </li>
        <li>
          Manage ad personalization in{" "}
          <a
            href="https://adssettings.google.com/"
            rel="noopener noreferrer"
            className="text-amber-200 underline"
          >
            Google ad settings
          </a>{" "}
          or via{" "}
          <a
            href="https://optout.aboutads.info/"
            rel="noopener noreferrer"
            className="text-amber-200 underline"
          >
            AboutAds choices
          </a>
          .
        </li>
        <li>
          Our on-site consent banner lets you choose non-personalized ads only
          (NPA). Choosing &ldquo;Decline&rdquo; sets{" "}
          <code>requestNonPersonalizedAds=1</code> for subsequent ad requests
          from your browser.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">
        Consent and messages (EEA, UK, and US states)
      </h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        Visitors in the European Economic Area, the UK, and Switzerland see a
        Google Funding Choices consent message (IAB TCF v2.2) before
        personalized ads or measurement run. You can change or withdraw consent
        at any time via the &ldquo;Privacy Policy&rdquo; / consent link in the
        footer message or by clearing this site&apos;s storage in your browser
        and reloading. California and other US-state residents may opt out of
        sale/sharing for advertising by choosing non-personalized ads and by
        using the links above.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Your choices</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
        <li>
          Block or delete cookies in your browser settings (parts of the site
          may work less smoothly).
        </li>
        <li>
          Use the on-site Accept / Decline banner to switch between personalized
          and non-personalized ads.
        </li>
        <li>
          To request deletion of an email you sent us, write to
          support@loanpaylogic.com with the subject
          &ldquo;Privacy request&rdquo;.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        Questions about this policy: support@loanpaylogic.com.
      </p>
      <p className="mt-6 leading-relaxed text-slate-300">
        All educational estimates on this site are general information only and
        are not professional insurance advice.
      </p>
    </div>
  );
}
