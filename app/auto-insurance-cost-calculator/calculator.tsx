"use client";

import { useState } from "react";

export default function AutoEstimator() {
  const [age, setAge] = useState(35);
  const [vehicle, setVehicle] = useState(20000);
  const [deductible, setDeductible] = useState(500);
  const [fullCoverage, setFullCoverage] = useState(true);
  const ageFactor = age < 25 ? 2.1 : age < 30 ? 1.5 : age < 50 ? 1 : age < 70 ? 1.1 : 1.25;
  const base = fullCoverage ? 150 : 70;
  const vehicleFactor = fullCoverage ? 1 + vehicle / 100000 : 1;
  const dedFactor = !fullCoverage ? 1 : deductible === 250 ? 1.15 : deductible === 500 ? 1 : 0.85;
  const est = Math.max(25, Math.round(base * ageFactor * vehicleFactor * dedFactor));
  return (
    <div className="glass-card mt-8 rounded-2xl p-6" aria-label="Auto premium estimator">
      <h2 className="text-xl font-semibold text-white">Auto premium estimator (illustrative estimate)</h2>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        Educational estimate only — not a quote. Adjust the inputs to see which choices move the
        illustration most.
      </p>
      <label className="mt-4 block text-sm text-slate-300" htmlFor="auto-age">Driver age: {age}</label>
      <input id="auto-age" type="range" min={18} max={80} value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <label className="mt-4 block text-sm text-slate-300" htmlFor="auto-vehicle">Vehicle value: ${vehicle.toLocaleString()}</label>
      <input id="auto-vehicle" type="range" min={3000} max={80000} step={1000} value={vehicle} onChange={(e) => setVehicle(Number(e.target.value))} />
      <label className="mt-4 flex items-center gap-2 text-sm text-slate-300" htmlFor="auto-full">
        <input id="auto-full" type="checkbox" checked={fullCoverage} onChange={(e) => setFullCoverage(e.target.checked)} />
        Full coverage (collision + comprehensive)
      </label>
      {fullCoverage && (
        <>
          <label className="mt-4 block text-sm text-slate-300" htmlFor="auto-ded">Deductible: ${deductible}</label>
          <input id="auto-ded" type="range" min={250} max={1000} step={250} value={deductible} onChange={(e) => setDeductible(Number(e.target.value))} />
        </>
      )}
      <p className="mt-4 text-lg font-semibold text-amber-200">Illustrative estimate: ${est}/month</p>
    </div>
  );
}
