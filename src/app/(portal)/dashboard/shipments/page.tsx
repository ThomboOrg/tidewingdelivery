import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import ShipmentsTable from "@/components/ShipmentsTable";
import { shipments } from "@/lib/portal";

export const metadata: Metadata = { title: "Shipments" };

export default function ShipmentsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Shipments</h1>
          <p className="mt-1 text-sm text-ink/60">{shipments.length} shipments in the last 90 days.</p>
        </div>
        <Link href="/ship" className="flex items-center gap-2 rounded-lg bg-flare px-4 py-2.5 text-sm font-semibold text-white hover:bg-flare-dark">
          <Plus className="size-4" /> New shipment
        </Link>
      </div>
      <ShipmentsTable rows={shipments} />
    </div>
  );
}
