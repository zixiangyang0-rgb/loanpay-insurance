"use client";

import { useState } from "react";

export default function NeedsEstimator() {
  const [income, setIncome] = useState(100000);
  const [multiple, setMultiple] = useState(11);
  const [mortgage, setMortgage] = useState(350000);
  const [debts, setDebts] = useState(25000);
  const [education, setEducation] = useState(100000);
  const [assets, setAssets] = useState(100000);
  const gap = Math.max(0, income * multiple + mortgage + debts + education - assets);
  const rounded = Math.round(gap / 50000) * 50000;
  return (
    <div className="glass-card mt-8 rounded-2xl p-6" aria-label="Coverage needs estimator">
      <h2 className="text-xl font-semibold text-white">Coverage needs estimator (illustrative estimate)</h2>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        Educational estimate only — not advice. Move the sliders to build your DIME gap: income ×
        multiple, plus mortgage, debts, and education, minus assets and existing coverage.
      </p>
      <label className="mt-4 block text-sm text-slate-300" htmlFor="need-income">Annual income: ${income.toLocaleString()}</label>
      <input id="need-income" type="range" min={30000} max={400000} step={5000} value={income} onChange={(e) => setIncome(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="need-mult">Income multiple: {multiple}x</label>
      <input id="need-mult" type="range" min={5} max={15} value={multiple} onChange={(e) => setMultiple(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="need-mort">Mortgage balance: ${mortgage.toLocaleString()}</label>
      <input id="need-mort" type="range" min={0} max={1000000} step={10000} value={mortgage} onChange={(e) => setMortgage(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="need-debt">Other debts: ${debts.toLocaleString()}</label>
      <input id="need-debt" type="range" min={0} max={300000} step={5000} value={debts} onChange={(e) => setDebts(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="need-edu">Education goals: ${education.toLocaleString()}</label>
      <input id="need-edu" type="range" min={0} max={500000} step={10000} value={education} onChange={(e) => setEducation(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="need-assets">Assets + existing coverage: ${assets.toLocaleString()}</label>
      <input id="need-assets" type="range" min={0} max={1000000} step={10000} value={assets} onChange={(e) => setAssets(Number(e.target.value))} />
      <p className="mt-4 text-lg font-semibold text-amber-200">Illustrative gap: ${rounded.toLocaleString()}</p>
    </div>
  );
}
