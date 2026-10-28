import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Check, Circle, PackageSearch, Plane, Ship } from "lucide-react";
import TrackForm from "@/components/TrackForm";

export const metadata: Metadata = {
  title: "Track your shipment",
  description: "Live status for Tidewing air and sea shipments, from pickup to proof of delivery.",
  alternates: { canonical: "/track" },
};

const VALID = /^TW-\d{4}-\d{4}$/;

// ponytail: demo data until the tracking API exists; any TW-####-#### id returns this timeline
function demoShipment(id: string) {
  const sea = Number(id.at(-1)) % 2 === 1;
  return {
    id,
    sea,
    route: sea ? ["Shanghai, CN", "Tema, GH"] : ["London Heathrow, GB", "Accra Kotoka, GH"],
    service: sea ? "Sea Freight · 40ft FCL" : "Air Express",
    eta: sea ? "Fri, 14 Nov 2026" : "Wed, 29 Oct 2026",
    progress: sea ? 3 : 4,
    events: sea
      ? ["Booking confirmed", "Picked up from supplier", "Departed Port of Shanghai", "In transit at sea", "Arrived Port of Tema", "Customs cleared", "Delivered"]
      : ["Booking confirmed", "Picked up", "Departed London Heathrow", "Landed Accra Kotoka", "Customs cleared", "Out for delivery", "Delivered"],
  };
}

async function Result({ searchParams }: { searchParams: PageProps<"/track">["searchParams"] }) {
  const raw = (await searchParams).id;
  const id = (Array.isArray(raw) ? raw[0] : raw)?.trim().toUpperCase();
  if (!id) return null;

  if (!VALID.test(id))
    return (
      <div className="rounded-2xl border border-line p-10 text-center">
        <PackageSearch className="mx-auto size-10 text-ink/30" />
        <h2 className="mt-4 text-xl font-semibold">We couldn’t find “{id}”</h2>
        <p className="mt-2 text-ink/60">Tidewing tracking numbers look like TW-4821-0937. Check your booking email and try again.</p>
        <Link href="/support#contact" className="mt-6 inline-block font-medium text-flare hover:underline">
          Contact support
        </Link>
      </div>
    );

  const s = demoShipment(id);
  const Icon = s.sea ? Ship : Plane;
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div className="grid gap-6 border-b border-line bg-mist p-6 sm:grid-cols-4 sm:p-8">
        <div className="sm:col-span-2">
          <p className="eyebrow text-ink/50">Tracking number</p>
          <p className="mt-1 font-mono text-lg font-medium">{s.id}</p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Icon className="size-4 text-flare" /> {s.route[0]} → {s.route[1]}
          </p>
        </div>
        <div>
          <p className="eyebrow text-ink/50">Service</p>
          <p className="mt-1 text-sm font-medium">{s.service}</p>
        </div>
        <div>
          <p className="eyebrow text-ink/50">Estimated delivery</p>
          <p className="mt-1 text-sm font-medium">{s.eta}</p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="eyebrow flex items-center gap-1.5 text-lagoon">
          <span className="size-1.5 animate-pulse rounded-full bg-lagoon" /> {s.events[s.progress - 1]}
        </p>
        <div className="mt-4 h-2 rounded-full bg-mist">
          <div className="h-full rounded-full bg-flare" style={{ width: `${(s.progress / s.events.length) * 100}%` }} />
        </div>

        <ol className="mt-8 space-y-0">
          {s.events.map((e, i) => {
            const done = i < s.progress;
            return (
              <li key={e} className="relative flex gap-4 pb-6 last:pb-0">
                {i < s.events.length - 1 && <span className={`absolute left-[11px] top-6 h-full w-px ${done ? "bg-flare" : "bg-line"}`} />}
                <span className={`relative grid size-6 shrink-0 place-items-center rounded-full ${done ? "bg-flare text-white" : "border border-line bg-white text-ink/30"}`}>
                  {done ? <Check className="size-3.5" /> : <Circle className="size-2 fill-current" />}
                </span>
                <span className={done ? "font-medium" : "text-ink/40"}>{e}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default function TrackPage(props: PageProps<"/track">) {
  return (
    <>
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="eyebrow text-flare">Tracking</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Track your shipment</h1>
          <p className="mt-3 text-white/70">Live status for air and sea shipments, from pickup to proof of delivery.</p>
          <div className="mt-8">
            <TrackForm />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-mist" />}>
          <Result searchParams={props.searchParams} />
        </Suspense>
        <p className="mt-10 text-center text-sm text-ink/50">
          Try a demo number: <Link href="/track?id=TW-4821-0937" className="font-mono text-flare hover:underline">TW-4821-0937</Link> (sea) or{" "}
          <Link href="/track?id=TW-1093-2210" className="font-mono text-flare hover:underline">TW-1093-2210</Link> (air)
        </p>
      </section>
    </>
  );
}
