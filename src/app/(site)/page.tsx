import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Building2,
  Calculator,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Home as HomeIcon,
  Plane,
  Ship,
  ShieldCheck,
  Timer,
  Truck,
  Warehouse,
  Check,
} from "lucide-react";
import TrackForm from "@/components/TrackForm";
import { photos, services, siteUrl, updates } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// Structured data so search engines can show the business name, logo and contact details.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tidewing Logistics",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: "Global air and sea freight to 180+ countries.",
  contactPoint: { "@type": "ContactPoint", telephone: "+233-30-000-0000", contactType: "customer service", availableLanguage: ["English", "French"] },
};

const quick = [
  { href: "/ship", icon: Box, title: "Ship now", body: "Find the right service" },
  { href: "/ship", icon: Calculator, title: "Get a quote", body: "Estimate cost to ship and compare" },
  { href: "/support#business", icon: Building2, title: "Tidewing for Business", body: "Account rates for regular shippers" },
];

const steps = [
  { icon: ClipboardCheck, title: "Book online", body: "Get an instant quote, choose air or sea, and book in minutes." },
  { icon: Warehouse, title: "We collect", body: "We pick up from you or your supplier and check everything in at our hub." },
  { icon: Plane, title: "Air or sea", body: "Your cargo moves on the mode you chose, with every milestone logged." },
  { icon: FileCheck2, title: "Customs cleared", body: "We prepare the paperwork and clear customs on arrival — no surprises." },
  { icon: HomeIcon, title: "Delivered", body: "Last-mile delivery to the door, with proof of delivery instantly." },
];

const values = [
  { icon: Calculator, title: "Know what you’ll pay", body: "Freight, duty and delivery priced up front. No hidden fees." },
  { icon: Timer, title: "On time, measured", body: "98.7% on-time delivery across air and sea last year." },
  { icon: ShieldCheck, title: "Insured end to end", body: "Basic liability included, full-value cover on any booking." },
  { icon: Globe2, title: "180+ countries", body: "Local teams at origin and destination, one point of contact." },
];

const stats = [
  ["180+", "Countries & territories"],
  ["2.4M", "Shipments per year"],
  ["300+", "Partner airports"],
  ["98.7%", "On-time delivery"],
];

// ponytail: placeholder testimonials, replace with real customer quotes before launch
const reviews = [
  { name: "Ama Owusu", role: "Founder, Kente & Co.", body: "We moved from three forwarders to just Tidewing. Sea freight from Shenzhen lands on schedule and customs is never a headache." },
  { name: "Daniel Mensah", role: "Ops Lead, MedSupply GH", body: "Cold-chain air freight that actually stays cold. The milestone updates mean our team stopped chasing emails." },
  { name: "Sarah Lin", role: "Procurement, Northwind", body: "The quote matched the invoice to the cent. That alone made us switch." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative isolate bg-ink">
        <Image src={photos.ship} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-36 pt-16 sm:px-6 md:pb-44 md:pt-24 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-white">
            <p className="eyebrow text-flare">Global air & sea freight</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Ship anywhere. <br className="hidden sm:block" />
              Track everything.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Air and sea freight to 180+ countries, with customs handled and live tracking from pickup to doorstep.
            </p>
            <div className="mt-8 max-w-xl">
              <TrackForm />
            </div>
          </div>

          {/* Floating status cards */}
          <div className="relative hidden lg:block">
            <div className="ml-auto w-80 rounded-xl bg-white p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="eyebrow flex items-center gap-1.5 text-lagoon">
                  <span className="size-1.5 rounded-full bg-lagoon" /> At sea
                </p>
                <Ship className="size-4 text-ink/40" />
              </div>
              <p className="mt-3 font-medium">Shanghai → Tema</p>
              <p className="text-sm text-ink/60">40ft FCL · ETA 14 Nov</p>
              <div className="mt-4 h-1.5 rounded-full bg-mist">
                <div className="h-full w-2/3 rounded-full bg-lagoon" />
              </div>
              <div className="mt-4 border-t border-dashed border-line pt-3">
                <p className="eyebrow text-ink/50">Tracking number</p>
                <p className="mt-0.5 font-mono text-sm">TW-4821-0937</p>
              </div>
            </div>
            <div className="-mt-6 mr-auto w-72 rounded-xl bg-white p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-ink/50">TW-1093-2210</p>
                <span className="eyebrow flex items-center gap-1.5 text-flare">
                  Latest <span className="size-1.5 rounded-full bg-flare" />
                </span>
              </div>
              <p className="eyebrow mt-3 flex items-center gap-1.5 text-sky">
                <span className="size-1.5 rounded-full bg-sky" /> Landed
              </p>
              <p className="mt-1 text-sm text-ink/60">Today, 10:45 · Kotoka Intl. Airport</p>
              <p className="mt-1 text-sm">Cleared customs, out for delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions overlapping hero */}
      <section className="relative z-10 mx-auto -mt-24 max-w-5xl px-4 sm:px-6">
        <div className="grid divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {quick.map(({ href, icon: Icon, title, body }) => (
            <Link key={title} href={href} className="group flex items-center gap-4 p-6 transition hover:bg-mist sm:flex-col sm:text-center">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-flare/10 text-flare transition group-hover:bg-flare group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <span>
                <span className="block font-semibold">{title}</span>
                <span className="mt-0.5 block text-sm text-ink/60">{body}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <dt className="text-3xl font-semibold tracking-tight sm:text-4xl">{n}</dt>
              <dd className="mt-1 text-sm text-ink/60">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-flare">Our services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Two ways across the world.</h2>
            <p className="mt-4 text-lg text-ink/60">Choose speed or scale. Either way, you get one team, one invoice and full visibility.</p>
          </div>

          <div className="mt-14 space-y-8">
            {(["air", "sea"] as const).map((mode, i) => {
              const s = services[mode];
              const Icon = mode === "air" ? Plane : Ship;
              return (
                <div key={mode} className={`grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-64 lg:min-h-full">
                    <Image src={s.image} alt={s.name} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-3">
                        <span className={`grid size-10 place-items-center rounded-lg ${mode === "air" ? "bg-sky/10 text-sky" : "bg-lagoon/10 text-lagoon"}`}>
                          <Icon className="size-5" />
                        </span>
                        <span className="eyebrow text-ink/50">{s.transit}</span>
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">{s.name}</h3>
                      <p className="mt-1 text-ink/50">{s.tagline}</p>
                      <p className="mt-4 text-ink/70">{s.intro}</p>
                    </div>
                    <div className="mt-auto border-t border-line bg-mist/60 p-8 sm:px-10">
                      <p className="text-sm font-semibold">Services available</p>
                      <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <Check className="size-4 shrink-0 text-flare" /> {h}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${mode}`}
                        className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-ink py-3 font-semibold text-white transition hover:bg-ink-2"
                      >
                        Explore {s.name} <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-flare">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From your door to theirs, in five steps.</h2>
          <ol className="relative mt-10 space-y-8 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-line">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="relative flex gap-5">
                <span className={`relative grid size-10 shrink-0 place-items-center rounded-full ${i === 0 ? "bg-flare text-white" : "border border-line bg-white text-ink/60"}`}>
                  <Icon className="size-[18px]" />
                </span>
                <div className="pt-1.5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-ink/60">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative min-h-96 overflow-hidden rounded-2xl">
          <Image src={photos.warehouse} alt="Tidewing fulfilment hub" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-5 shadow-xl backdrop-blur sm:right-auto sm:w-72">
            <p className="eyebrow flex items-center gap-1.5 text-lagoon">
              <span className="size-1.5 rounded-full bg-lagoon" /> Received at hub
            </p>
            <p className="mt-2 font-medium">3 parcels consolidated</p>
            <p className="text-sm text-ink/60">Ready for sea departure · Fri</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-flare">Why Tidewing</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Logistics without the guesswork.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-ink p-8">
                <Icon className="size-6 text-flare" />
                <h3 className="mt-6 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <p className="eyebrow text-flare">Customers</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Trusted by teams that can’t afford delays.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-line p-8">
              <blockquote className="flex-1 text-ink/80">“{r.body}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-mist text-sm font-semibold">
                  {r.name.split(" ").map((p) => p[0]).join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="block text-sm text-ink/50">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Service updates + insights */}
      <section className="border-t border-line bg-mist py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow text-flare">Service updates</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">News and alerts</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {updates.map((u) => (
                <li key={u}>
                  <Link href="/support" className="group flex items-center justify-between gap-4 py-4 text-sm">
                    {u}
                    <ChevronRight className="size-4 shrink-0 text-flare transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { img: photos.port, tag: "Insight", title: "Q4 shipping outlook: book sea freight early", body: "Peak season capacity is tightening on Asia–West Africa lanes. Here’s how to plan." },
              { img: photos.handover, tag: "Guide", title: "Customs made simple for first-time importers", body: "The five documents you need and how duties are calculated." },
            ].map((a) => (
              <Link key={a.title} href="/support" className="group overflow-hidden rounded-2xl bg-white ring-1 ring-line">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={a.img} alt="" fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="eyebrow text-ink/50">{a.tag}</p>
                  <h3 className="mt-2 font-semibold group-hover:text-flare">{a.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{a.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-3xl bg-flare px-8 py-16 sm:px-16">
          <Truck className="absolute -bottom-10 -right-10 -z-10 size-72 text-white/10" />
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="text-white">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to ship?</h2>
              <p className="mt-3 max-w-md text-white/85">Get a price in under two minutes. No account needed.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/ship" className="rounded-lg bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-mist">
                Get a quote
              </Link>
              <Link href="/support#contact" className="rounded-lg px-6 py-3.5 font-semibold text-white ring-1 ring-white/50 transition hover:bg-white/10">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
