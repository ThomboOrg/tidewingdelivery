import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Accordion } from "@/components/ui";
import { services, type Mode } from "@/lib/site";

export const generateStaticParams = () => [{ mode: "air" }, { mode: "sea" }];

export async function generateMetadata({ params }: PageProps<"/services/[mode]">): Promise<Metadata> {
  const s = services[(await params).mode as Mode];
  return s ? { title: s.name, description: s.intro } : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[mode]">) {
  const mode = (await params).mode as Mode;
  const s = services[mode];
  if (!s) notFound();
  const other = mode === "air" ? "sea" : "air";

  return (
    <>
      <section className="relative isolate bg-ink">
        <Image src={s.hero} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-24 text-white sm:px-6 sm:py-32">
          <p className="eyebrow text-flare">{s.transit}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{s.name}</h1>
          <p className="mt-2 text-xl text-white/60">{s.tagline}</p>
          <p className="mt-6 max-w-xl text-lg text-white/80">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ship" className="flex items-center gap-2 rounded-lg bg-flare px-6 py-3.5 font-semibold transition hover:bg-flare-dark">
              Get a quote <ArrowRight className="size-4" />
            </Link>
            <Link href="/support#contact" className="rounded-lg px-6 py-3.5 font-semibold ring-1 ring-white/40 transition hover:bg-white/10">
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <p className="eyebrow text-flare">Options</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Choose your service level</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.options.map((o, i) => (
            <div key={o.name} className={`rounded-2xl border p-8 ${i === 0 ? "border-flare ring-4 ring-flare/10" : "border-line"}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{o.name}</h3>
                {i === 0 && <span className="eyebrow rounded-full bg-flare/10 px-2.5 py-1 text-flare">Popular</span>}
              </div>
              <p className="eyebrow mt-2 text-ink/50">{o.transit}</p>
              <p className="mt-4 text-ink/70">{o.body}</p>
              <Link href="/ship" className="mt-6 inline-flex items-center gap-1.5 font-medium text-flare hover:underline">
                Get a quote <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={s.image} alt={s.name} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow text-flare">Included</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Everything handled, end to end.</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {s.features.map((f) => (
                <div key={f.title}>
                  <Check className="size-5 text-flare" />
                  <h3 className="mt-3 font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently asked</h2>
        <div className="mt-8">
          <Accordion items={s.faqs} />
        </div>
        <Link href={`/services/${other}`} className="mt-12 flex items-center justify-between rounded-2xl bg-ink p-8 text-white transition hover:bg-ink-2">
          <span>
            <span className="eyebrow block text-white/50">Also available</span>
            <span className="mt-1 block text-xl font-semibold">{services[other].name}</span>
          </span>
          <ArrowRight className="size-6 text-flare" />
        </Link>
      </section>
    </>
  );
}
