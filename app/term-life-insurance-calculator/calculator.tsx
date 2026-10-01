"use client";

import { useState } from "react";

export default function TermEstimator() {
  const [age, setAge] = useState(35);
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(20);
  const base = amount / 1000;
  const ageFactor = age < 30 ? 0.05 : age < 40 ? 0.062 : age < 50 ? 0.115 : 0.21;
  const termFactor = term === 10 ? 0.8 : term === 20 ? 1 : 1.6;
  const est = Math.max(8, Math.round(base * ageFactor * termFactor));
  return (
    <div className="glass-card mt-8 rounded-2xl p-6" aria-label="Term premium estimator">
      <h2 className="text-xl font-semibold text-white">Term premium estimator (illustrative estimate)</h2>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        Educational estimate only — not a quote. Move the sliders to see how age, coverage amount, and
        term length change the illustration.
      </p>
      <label className="mt-4 block text-sm text-slate-300" htmlFor="term-age">Age: {age}</label>
      <input id="term-age" type="range" min={20} max={60} value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="term-amount">Coverage: ${amount.toLocaleString()}</label>
      <input id="term-amount" type="range" min={100000} max={2000000} step={50000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="term-length">Term: {term} years</label>
      <input id="term-length" type="range" min={10} max={30} step={10} value={term} onChange={(e) => setTerm(Number(e.target.value))} />
      <p className="mt-4 text-lg font-semibold text-amber-200">Illustrative estimate: ${est}/month</p>
    </div>
  );
}
