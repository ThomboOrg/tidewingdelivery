import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { invoices, statusStyle, usd } from "@/lib/portal";

export const metadata: Metadata = { title: "Invoices" };

export default function InvoicesPage() {
  const due = invoices.filter((i) => i.status !== "Paid").reduce((s, i) => s + i.amount, 0);
  const paid = invoices.filter((i) => i.status === "Paid").reduce((s, i) => s + i.amount, 0);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Invoices</h1>
        <p className="mt-1 text-sm text-ink/60">Monthly invoicing on 30-day terms.</p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-5">
          <dt className="text-sm text-ink/60">Outstanding</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight">{usd(due)}</dd>
        </div>
        <div className="rounded-xl border border-line bg-white p-5">
          <dt className="text-sm text-ink/60">Paid (last 90 days)</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight">{usd(paid)}</dd>
        </div>
      </dl>

      <div className="overflow-x-auto rounded-xl border border-line bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-mist/60 text-ink/50">
            <tr>
              {["Invoice", "Date", "Shipment", "Amount", "Status", ""].map((h) => (
                <th key={h} className="eyebrow px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {invoices.map((i) => (
              <tr key={i.id} className="hover:bg-mist/50">
                <td className="px-4 py-3.5 font-medium">{i.id}</td>
                <td className="px-4 py-3.5 text-ink/70">{i.date}</td>
                <td className="px-4 py-3.5">
                  <Link href={`/track?id=${i.shipment}`} className="font-mono hover:text-flare">{i.shipment}</Link>
                </td>
                <td className="px-4 py-3.5 font-medium">{usd(i.amount)}</td>
                <td className="px-4 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[i.status]}`}>{i.status}</span>
                </td>
                <td className="px-4 py-3.5 text-right">
                  {/* ponytail: PDF download needs the billing API */}
                  <button className="inline-flex items-center gap-1.5 text-ink/50 hover:text-ink" aria-label={`Download ${i.id}`}>
                    <Download className="size-4" /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
