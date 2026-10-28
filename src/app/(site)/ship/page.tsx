import type { Metadata } from "next";
import { Clock, FileCheck2, ShieldCheck } from "lucide-react";
import Quote from "./Quote";

export const metadata: Metadata = { title: "Get a quote" };

export default function ShipPage() {
  return (
    <>
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-flare">Ship now</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Get an instant quote</h1>
          <p className="mt-3 max-w-xl text-lg text-ink/60">Compare air and sea in seconds. Customs and door-to-door delivery included.</p>
        </div>
      </section>
      <section className="mx-auto -mt-8 max-w-7xl px-4 pb-16 sm:px-6">
        <Quote />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { icon: Clock, title: "Price in 2 minutes", body: "No account or phone call needed to see what you’ll pay." },
            { icon: FileCheck2, title: "Paperwork handled", body: "We prepare customs documents for both origin and destination." },
            { icon: ShieldCheck, title: "Cover included", body: "Basic liability on every shipment, full-value insurance optional." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <Icon className="size-6 shrink-0 text-flare" />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-ink/60">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
