import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Calculator, FileText, Package, Search } from "lucide-react";
import ShipmentsTable from "@/components/ShipmentsTable";
import { invoices, shipments, statusStyle, usd } from "@/lib/portal";

export const metadata: Metadata = { title: "Dashboard" };

export default function Dashboard() {
  const active = shipments.filter((s) => s.status !== "Delivered");
  const delayed = shipments.filter((s) => s.status === "Delayed");
  const outstanding = invoices.filter((i) => i.status !== "Paid").reduce((sum, i) => sum + i.amount, 0);

  const kpis = [
    { label: "Active shipments", value: active.length, note: `${shipments.filter((s) => s.status === "In transit").length} in transit` },
    { label: "Arriving this week", value: 2, note: "1 air · 1 sea" },
    { label: "Needs attention", value: delayed.length, note: "Delayed or on hold", alert: delayed.length > 0 },
    { label: "Outstanding balance", value: usd(outstanding), note: `${invoices.filter((i) => i.status !== "Paid").length} unpaid invoices` },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="mt-1 text-sm text-ink/60">Your shipments and account at a glance.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/track" className="flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium hover:bg-mist">
            <Search className="size-4" /> Track
          </Link>
          <Link href="/ship" className="flex items-center gap-2 rounded-lg bg-flare px-4 py-2.5 text-sm font-semibold text-white hover:bg-flare-dark">
            <Calculator className="size-4" /> New quote
          </Link>
        </div>
      </div>

      {delayed.map((s) => (
        <div key={s.id} className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-red-600" />
          <p className="flex-1">
            <span className="font-medium">{s.id} is delayed.</span> {s.from} → {s.to} missed its connecting flight. New ETA {s.eta}.
          </p>
          <Link href={`/track?id=${s.id}`} className="shrink-0 font-medium text-red-700 hover:underline">View</Link>
        </div>
      ))}

      <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-line bg-white p-5">
            <dt className="text-sm text-ink/60">{k.label}</dt>
            <dd className={`mt-2 text-3xl font-semibold tracking-tight ${k.alert ? "text-red-600" : ""}`}>{k.value}</dd>
            <dd className="mt-1 text-xs text-ink/50">{k.note}</dd>
          </div>
        ))}
      </dl>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Active shipments</h2>
          <Link href="/dashboard/shipments" className="flex items-center gap-1 text-sm font-medium text-flare hover:underline">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <ShipmentsTable rows={active} controls={false} />
      </section>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-xl border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line p-5">
            <h2 className="font-semibold">Recent invoices</h2>
            <Link href="/dashboard/invoices" className="text-sm font-medium text-flare hover:underline">View all</Link>
          </div>
          <ul className="divide-y divide-line">
            {invoices.slice(0, 4).map((i) => (
              <li key={i.id} className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm">
                <span className="flex items-center gap-3">
                  <FileText className="size-4 text-ink/40" />
                  <span>
                    <span className="block font-medium">{i.id}</span>
                    <span className="block text-xs text-ink/50">{i.date}</span>
                  </span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="font-medium">{usd(i.amount)}</span>
                  <span className={`w-20 rounded-full px-2.5 py-1 text-center text-xs font-medium ${statusStyle[i.status]}`}>{i.status}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl bg-ink p-6 text-white">
          <Package className="size-6 text-flare" />
          <h2 className="mt-4 font-semibold">Your account manager</h2>
          <p className="mt-1 text-sm text-white/60">Kwame Asante · Mon–Fri, 8am–6pm GMT</p>
          <p className="mt-4 text-sm">+233 30 000 0001</p>
          <p className="text-sm">kwame@tidewing.example</p>
          <Link href="/support#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-flare hover:underline">
            Contact support <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
