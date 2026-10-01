"use client";

import { useEffect, useState } from "react";

const KEY = "insurance-consent-npa";

/**
 * Lightweight consent banner for AdSense (EEA/UK + global NPA fallback).
 * - Accept → personalized ads (default AdSense behaviour)
 * - Decline → requests non-personalized ads (npa=1) for googletag/adsbygoogle
 * Full IAB TCF consent is handled by Google Funding Choices (see layout comment).
 */
export default function Consent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
      else applyNpa(localStorage.getItem(KEY) === "1");
    } catch {
      setVisible(true);
    }
  }, []);

  function applyNpa(npa: boolean) {
    try {
      const w = window as unknown as {
        adsbygoogle?: { requestNonPersonalizedAds?: number } & unknown[];
      };
      w.adsbygoogle = w.adsbygoogle || [];
      (w.adsbygoogle as { requestNonPersonalizedAds?: number }).requestNonPersonalizedAds = npa ? 1 : 0;
    } catch {
      /* ignore */
    }
  }

  function choose(npa: boolean) {
    try {
      localStorage.setItem(KEY, npa ? "1" : "0");
    } catch {
      /* ignore */
    }
    applyNpa(npa);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and advertising consent"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-3xl p-4"
    >
      <div className="glass-panel rounded-2xl p-5 text-sm text-slate-300">
        <p className="font-semibold text-white">We use cookies &amp; ads</p>
        <p className="mt-2 leading-relaxed">
          We show Google AdSense ads to keep our estimators free. You can accept
          personalized ads or decline for non-personalized ads only. Read our{" "}
          <a href="/privacy-policy" className="text-amber-200 underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-xl bg-amber-200 px-4 py-2 font-medium text-slate-900 hover:bg-amber-100"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-xl border border-white/15 px-4 py-2 text-slate-200 hover:border-white/30"
          >
            Decline (non-personalized)
          </button>
        </div>
      </div>
    </div>
  );
}
