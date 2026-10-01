import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://insurance.loanpaylogic.com"),
  title: {
    default: "LoanPay Insurance | Insurance Cost Estimators and Guides",
    template: "%s | LoanPay Insurance",
  },
  description:
    "Educational insurance cost estimators and plain-English guides for auto, home, life, pet, and renters coverage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Insurance | Insurance Cost Estimators and Guides",
    description:
      "Compare coverage types and estimate insurance costs with educational tools and guides.",
    url: "https://insurance.loanpaylogic.com",
    siteName: "LoanPay Insurance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Insurance | Insurance Cost Estimators and Guides",
    description:
      "Educational insurance cost estimators and plain-English guides for auto, home, life, pet, and renters coverage.",
  },
};

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        LoanPay Insurance
      </Link>
      <nav className="flex items-center gap-5 text-sm text-slate-300">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 text-sm text-slate-400">
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-white">
          Terms
        </Link>
        <Link href="/disclaimer" className="hover:text-white">
          Disclaimer
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </nav>
      <p className="mt-4">
        © {new Date().getFullYear()} insurance.loanpaylogic.com. Educational
        estimates only — not professional insurance advice.
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
