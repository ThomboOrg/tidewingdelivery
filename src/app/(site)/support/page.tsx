import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { faqs, photos } from "@/lib/site";
import { Accordion, Select } from "@/components/ui";

export const metadata: Metadata = { title: "Customer service" };

const field =
  "h-12 w-full rounded-lg border border-line bg-white px-4 outline-none transition focus:border-flare focus:ring-4 focus:ring-flare/15";

const contacts = [
  { icon: Phone, title: "Call us", body: "+233 30 000 0000", note: "Mon–Sat, 8am–8pm GMT" },
  { icon: Mail, title: "Email", body: "hello@tidewing.example", note: "Replies within 4 hours" },
  { icon: MessageCircle, title: "Live chat", body: "Chat with an agent", note: "24/7, in English & French" },
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-flare">Customer service</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">How can we help?</h1>
          <p className="mt-3 max-w-xl text-lg text-ink/60">Answers to common questions, or talk to a real person — any time.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map(({ icon: Icon, title, body, note }) => (
            <div key={title} className="rounded-2xl border border-line p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-flare/10 text-flare">
                <Icon className="size-6" />
              </span>
              <h2 className="mt-6 font-semibold">{title}</h2>
              <p className="mt-1 text-lg">{body}</p>
              <p className="mt-1 text-sm text-ink/50">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl scroll-mt-28 px-4 py-16 sm:px-6">
        <p className="eyebrow text-flare">FAQs</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
        <div className="mt-8">
          <Accordion items={faqs} />
        </div>
      </section>

      <section id="business" className="scroll-mt-28 bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-flare">Tidewing for Business</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Shipping regularly? Get account rates.</h2>
            <p className="mt-4 text-white/70">Volume pricing, a dedicated account manager, monthly invoicing and API access for your systems.</p>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={photos.port} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
          {/* ponytail: no CRM yet, add form action when sales inbox/API exists */}
          <form className="rounded-2xl bg-white p-6 text-ink sm:p-10">
            <h3 className="text-xl font-semibold">Talk to our sales team</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-1.5 block text-sm text-ink/60">Full name</span>
                <input required name="name" autoComplete="name" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-ink/60">Company</span>
                <input required name="company" autoComplete="organization" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-ink/60">Work email</span>
                <input required type="email" name="email" autoComplete="email" className={field} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm text-ink/60">Shipments per month</span>
                <Select name="volume" defaultValue="1–10" options={["1–10", "11–50", "51–200", "200+"]} aria-label="Shipments per month" />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm text-ink/60">What do you ship?</span>
                <textarea name="message" rows={3} className={`${field} h-auto py-3`} />
              </label>
            </div>
            <button className="mt-6 w-full rounded-lg bg-flare py-3.5 font-semibold text-white transition hover:bg-flare-dark">Request a call back</button>
          </form>
        </div>
      </section>
    </>
  );
}
