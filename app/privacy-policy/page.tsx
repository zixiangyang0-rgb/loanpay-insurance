import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for insurance.loanpaylogic.com describing data collection, cookies, and advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-400">Last updated: October 2026</p>
      <p className="mt-5 leading-relaxed text-slate-300">
        This Privacy Policy explains how insurance.loanpaylogic.com handles
        information. We publish educational insurance guides and estimators,
        and we do not ask you to create an account or submit policy details to
        use the site.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Information we collect</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        We receive standard technical information automatically, such as pages
        visited, device type, and approximate location derived from your IP
        address. If you email support@loanpaylogic.com, we receive your message
        and address so we can respond. We do not collect insurance application
        data, and you should never send policy numbers or medical details to
        us.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Cookies and advertising</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        We use cookies for basic site operation and measurement. We may display
        ads served by Google AdSense, which uses cookies to personalize or
        measure advertising. You can learn how Google uses data at Google&apos;s
        partner-sites policy page and manage ad personalization in your Google
        ad settings.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Your choices</h2>
      <p className="mt-3 leading-relaxed text-slate-300">
        You can block cookies in your browser settings, though parts of the
        site may work less smoothly. To request deletion of an email you sent
        us, write to support@loanpaylogic.com with the subject
        &ldquo;Privacy request&rdquo;.
      </p>
      <p className="mt-6 leading-relaxed text-slate-300">
        All educational estimates on this site are general information only and
        are not professional insurance advice.
      </p>
    </div>
  );
}
