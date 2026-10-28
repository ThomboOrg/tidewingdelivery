"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Ship, ArrowRight } from "lucide-react";
import { estimate, countries } from "./rates";
import { DatePicker, Select } from "@/components/ui";

const field =
  "h-12 w-full rounded-lg border border-line bg-white px-4 outline-none transition focus:border-flare focus:ring-4 focus:ring-flare/15";

export default function Quote() {
  const [mode, setMode] = useState<"air" | "sea">("air");
  const [from, setFrom] = useState("China");
  const [to, setTo] = useState("Ghana");
  const [kg, setKg] = useState(50);
  const q = estimate(mode, kg);

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-sm lg:grid-cols-[1.4fr_1fr]">
      <form className="p-6 sm:p-10" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend className="text-sm font-semibold">1. Shipping mode</legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {(["air", "sea"] as const).map((m) => {
              const Icon = m === "air" ? Plane : Ship;
              return (
                <label
                  key={m}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-line p-4 transition has-[:checked]:border-flare has-[:checked]:bg-flare/5 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-flare/15"
                >
                  <input type="radio" name="mode" checked={mode === m} onChange={() => setMode(m)} className="sr-only" />
                  <Icon className="size-5 text-flare" />
                  <span>
                    <span className="block font-semibold">{m === "air" ? "Air freight" : "Sea freight"}</span>
                    <span className="block text-sm text-ink/60">{m === "air" ? "1–5 days" : "12–40 days"}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <p className="mt-8 text-sm font-semibold">2. Route</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-sm text-ink/60">From</span>
            <Select options={countries} value={from} onValueChange={setFrom} aria-label="From" />
          </label>
          <label>
            <span className="mb-1.5 block text-sm text-ink/60">To</span>
            <Select options={countries} value={to} onValueChange={setTo} aria-label="To" />
          </label>
        </div>

        <p className="mt-8 text-sm font-semibold">3. Cargo</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-sm text-ink/60">Total weight (kg)</span>
            <input type="number" min={1} max={100000} value={kg} onChange={(e) => setKg(Math.max(1, Number(e.target.value) || 1))} className={field} />
          </label>
          <label>
            <span className="mb-1.5 block text-sm text-ink/60">Ready to ship</span>
            <DatePicker name="date" aria-label="Ready to ship" />
          </label>
        </div>
      </form>

      <aside className="flex flex-col bg-ink p-6 text-white sm:p-10">
        <p className="eyebrow text-white/50">Estimated price</p>
        <p className="mt-3 text-5xl font-semibold tracking-tight">
          ${q.low.toLocaleString()}
          <span className="text-2xl text-white/50"> – ${q.high.toLocaleString()}</span>
        </p>
        <p className="mt-2 text-sm text-white/60">
          {from} → {to} · {kg.toLocaleString()} kg · {mode === "air" ? "Air" : "Sea"}
        </p>
        <dl className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
          {[
            ["Transit time", q.transit],
            ["Customs clearance", "Included"],
            ["Door-to-door delivery", "Included"],
            ["Insurance", "Optional"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <dt className="text-white/60">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <Link href="/support#contact" className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-flare py-3.5 font-semibold transition hover:bg-flare-dark max-lg:mt-8">
          Book this shipment <ArrowRight className="size-4" />
        </Link>
        <p className="mt-3 text-center text-xs text-white/40">Indicative estimate. Final price confirmed at booking.</p>
      </aside>
    </div>
  );
}
