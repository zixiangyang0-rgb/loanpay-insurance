# LoanPay Insurance

Educational insurance hub at `insurance.loanpaylogic.com` — simple cost estimators and plain-English guides for auto, home, life, pet, and renters coverage. Isolated Next.js 15 App Router project for AdSense monetization.

## Local dev

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Type check:

```bash
npx tsc --noEmit
```

## Deploy on Vercel

1. Push this folder as its own repository (or import the monorepo path) in the Vercel dashboard via **Add New → Project → Import**.
2. Framework preset: **Next.js**. Keep defaults (`npm install`, `next build`).
3. Deploy once to confirm the production URL works.

## Add Domain insurance.loanpaylogic.com

1. In the Vercel project go to **Settings → Domains → Add** and enter `insurance.loanpaylogic.com`.
2. At your DNS provider, add the `CNAME` record Vercel shows (typically `cname.vercel-dns.com`).
3. Wait for DNS verification, then confirm the subdomain loads over HTTPS.

## ads.txt note

`public/ads.txt` serves at `https://insurance.loanpaylogic.com/ads.txt` and authorizes our AdSense publisher ID (`pub-4906207495792820`). Keep this file unchanged unless Google instructs otherwise.
