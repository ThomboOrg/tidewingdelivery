"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Search, Ship } from "lucide-react";
import { statusStyle, type Shipment, type Status } from "@/lib/portal";

const filters: ("All" | Status)[] = ["All", "Booked", "In transit", "At customs", "Delayed", "Delivered"];

export default function ShipmentsTable({ rows, controls = true }: { rows: Shipment[]; controls?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const shown = rows.filter(
    (s) =>
      (filter === "All" || s.status === filter) &&
      (!needle || [s.id, s.ref, s.from, s.to].some((v) => v.toLowerCase().includes(needle))),
  );

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      {controls && (
        <div className="flex flex-col gap-3 border-b border-line p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-1 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition ${filter === f ? "bg-ink text-white" : "text-ink/60 hover:bg-mist"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="flex h-10 items-center gap-2 rounded-lg border border-line px-3 md:w-72">
            <Search className="size-4 text-ink/40" />
            <span className="sr-only">Search shipments</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search ID, PO or city" className="w-full bg-transparent text-sm outline-none" />
          </label>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-mist/60 text-ink/50">
            <tr>
              {["Shipment", "Route", "Mode", "Weight", "ETA", "Status"].map((h) => (
                <th key={h} className="eyebrow px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {shown.map((s) => (
              <tr key={s.id} className="hover:bg-mist/50">
                <td className="px-4 py-3.5">
                  <Link href={`/track?id=${s.id}`} className="font-mono font-medium hover:text-flare">{s.id}</Link>
                  <p className="text-xs text-ink/50">{s.ref}</p>
                </td>
                <td className="px-4 py-3.5">
                  {s.from} <span className="text-ink/40">→</span> {s.to}
                </td>
                <td className="px-4 py-3.5">
                  <span className="flex items-center gap-1.5 text-ink/70">
                    {s.mode === "air" ? <Plane className="size-4 text-sky" /> : <Ship className="size-4 text-lagoon" />}
                    {s.mode === "air" ? "Air" : "Sea"}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-ink/70">{s.weight}</td>
                <td className="px-4 py-3.5 text-ink/70">{s.eta}</td>
                <td className="px-4 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[s.status]}`}>{s.status}</span>
                </td>
              </tr>
            ))}
            {shown.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-ink/50">No shipments match.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
