"use client";

import { useEffect, useState } from "react";

type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

interface AdSlotProps {
  slot: string;
  format?: AdFormat;
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Reusable AdSense slot for insurance.loanpaylogic.com
 * Publisher: ca-pub-4906207495792820
 * Slots are TODO placeholders (TODO-insurance-*) — replace with numeric
 * IDs from AdSense > Ads > By ad unit once created.
 */
export default function AdSlot({
  slot,
  format = "display",
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const [closed, setClosed] = useState(false);
  const [isDev] = useState(() => process.env.NODE_ENV !== "production");

  useEffect(() => {
    if (isDev) return;
    if (closed) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      /* AdSense blocked — leave placeholder space to avoid CLS */
    }
  }, [isDev, closed, slot]);

  if (closed) return null;

  // Mobile anchor: fixed bottom, closable, hidden on desktop
  if (format === "anchor") {
    return (
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex justify-center md:hidden ${className}`}
        role="complementary"
        aria-label={label}
      >
        <div className="relative w-full max-w-screen-sm border-t border-white/10 bg-slate-950/95 px-2 pb-[env(safe-area-inset-bottom)] pt-5 backdrop-blur">
          <span className="absolute left-1/2 top-0.5 -translate-x-1/2 text-[10px] uppercase tracking-widest text-slate-500">
            {label}
          </span>
          <button
            type="button"
            onClick={() => setClosed(true)}
            aria-label="Close advertisement"
            className="absolute right-1 top-0.5 rounded px-2 py-0.5 text-xs text-slate-400 hover:text-white"
          >
            ✕
          </button>
          {isDev ? (
            <div
              className="flex min-h-[100px] items-center justify-center rounded bg-slate-800/60 text-xs text-slate-400"
              aria-hidden="true"
            >
              anchor placeholder · {slot}
            </div>
          ) : (
            <ins
              className="adsbygoogle block min-h-[100px] w-full"
              data-ad-client="ca-pub-4906207495792820"
              data-ad-slot={slot}
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            />
          )}
        </div>
      </div>
    );
  }

  // Multiplex (matched content)
  if (format === "multiplex") {
    return (
      <div className={`my-8 ${className}`} role="complementary" aria-label={label}>
        <p className="mb-2 text-center text-[10px] uppercase tracking-widest text-slate-500">
          {label}
        </p>
        {isDev ? (
          <div
            className="flex min-h-[250px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-800/40 text-xs text-slate-400"
            aria-hidden="true"
          >
            multiplex placeholder · {slot}
          </div>
        ) : (
          <ins
            className="adsbygoogle block min-h-[250px] w-full"
            data-ad-client="ca-pub-4906207495792820"
            data-ad-slot={slot}
            data-ad-format="autorelaxed"
          />
        )}
      </div>
    );
  }

  // In-article (fluid)
  if (format === "in-article") {
    return (
      <div className={`my-8 ${className}`} role="complementary" aria-label={label}>
        <p className="mb-2 text-center text-[10px] uppercase tracking-widest text-slate-500">
          {label}
        </p>
        {isDev ? (
          <div
            className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-800/40 text-xs text-slate-400"
            aria-hidden="true"
          >
            in-article placeholder · {slot}
          </div>
        ) : (
          <ins
            className="adsbygoogle block min-h-[280px] w-full text-center"
            data-ad-client="ca-pub-4906207495792820"
            data-ad-slot={slot}
            data-ad-format="fluid"
            data-ad-layout="in-article"
          />
        )}
      </div>
    );
  }

  // Default: display (responsive, min-height reserves layout to avoid CLS)
  return (
    <div className={`my-8 ${className}`} role="complementary" aria-label={label}>
      <p className="mb-2 text-center text-[10px] uppercase tracking-widest text-slate-500">
        {label}
      </p>
      {isDev ? (
        <div
          className="flex min-h-[250px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-800/40 text-xs text-slate-400"
          aria-hidden="true"
        >
          display placeholder · {slot}
        </div>
      ) : (
        <ins
          className="adsbygoogle block min-h-[250px] w-full"
          data-ad-client="ca-pub-4906207495792820"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
