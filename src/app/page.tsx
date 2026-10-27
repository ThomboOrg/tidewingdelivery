const services = [
  {
    mode: "Air",
    color: "bg-sky",
    title: "Air Freight",
    time: "1–5 days",
    body: "Express and standard air cargo through 300+ partner airports. Best for urgent, high-value, or perishable goods.",
    points: ["Next-flight-out express", "Temperature-controlled", "Dangerous goods certified"],
  },
  {
    mode: "Sea",
    color: "bg-lagoon",
    title: "Sea Freight",
    time: "12–40 days",
    body: "FCL and LCL ocean shipping on every major trade lane. The most cost-effective way to move volume.",
    points: ["Full & shared containers", "Port-to-port or door-to-door", "Reefer & oversized cargo"],
  },
];

const steps = [
  ["Quote", "Tell us what, where, and when. Get a price in minutes."],
  ["Book", "Pick air or sea. We handle pickup, paperwork, and customs."],
  ["Track", "Follow your cargo live, from warehouse to doorstep."],
  ["Deliver", "Signed, sealed, delivered. Proof of delivery instantly."],
];

const stats = [
  ["180+", "Countries served"],
  ["2.4M", "Shipments a year"],
  ["98.7%", "On-time delivery"],
  ["24/7", "Human support"],
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-abyss text-sand">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
          <a href="#" className="text-2xl font-extrabold tracking-tight">
            tide<span className="text-flare">wing</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-sand/80 md:flex">
            <a href="#services" className="hover:text-sand">Services</a>
            <a href="#how" className="hover:text-sand">How it works</a>
            <a href="#track" className="hover:text-sand">Track</a>
          </nav>
          <a href="#quote" className="rounded-full bg-flare px-5 py-2 text-sm font-semibold text-white hover:brightness-110">
            Get a quote
          </a>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-12 sm:px-6 md:grid-cols-2 md:pt-20">
          <div>
            <p className="mb-4 inline-flex gap-2 rounded-full border border-sand/20 px-3 py-1 text-xs font-medium">
              <span className="text-sky">● Air</span>
              <span className="text-lagoon">● Sea</span>
              <span className="text-sand/70">180+ countries</span>
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              By wing or by tide, <span className="text-flare">it gets there.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-sand/75">
              Global air and sea freight with live tracking, customs handled, and one team from pickup to doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-full bg-flare px-6 py-3 font-semibold text-white hover:brightness-110">
                Ship now
              </a>
              <a href="#track" className="rounded-full border border-sand/30 px-6 py-3 font-semibold hover:bg-sand/10">
                Track a shipment
              </a>
            </div>
          </div>

          {/* Quote card */}
          <form id="quote" className="rounded-3xl bg-sand p-6 text-abyss shadow-2xl sm:p-8">
            <h2 className="text-xl font-bold">Instant quote</h2>
            <fieldset className="mt-4 grid grid-cols-2 gap-2 rounded-full bg-abyss/5 p-1 text-sm font-semibold">
              <legend className="sr-only">Shipping mode</legend>
              {["Air", "Sea"].map((m) => (
                <label key={m} className="cursor-pointer rounded-full py-2 text-center has-[:checked]:bg-abyss has-[:checked]:text-sand">
                  <input type="radio" name="mode" value={m} defaultChecked={m === "Air"} className="sr-only" />
                  {m}
                </label>
              ))}
            </fieldset>
            <div className="mt-4 grid gap-3">
              <input required name="from" placeholder="From (city or port)" className="rounded-xl border border-abyss/15 bg-white px-4 py-3 outline-none focus:border-flare" />
              <input required name="to" placeholder="To (city or port)" className="rounded-xl border border-abyss/15 bg-white px-4 py-3 outline-none focus:border-flare" />
              <div className="grid grid-cols-2 gap-3">
                <input required name="weight" type="number" min="1" placeholder="Weight (kg)" className="rounded-xl border border-abyss/15 bg-white px-4 py-3 outline-none focus:border-flare" />
                <input name="date" type="date" aria-label="Ship date" className="rounded-xl border border-abyss/15 bg-white px-4 py-3 outline-none focus:border-flare" />
              </div>
              <button className="mt-2 rounded-xl bg-flare py-3 font-semibold text-white hover:brightness-110">
                Get my price
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-abyss/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl font-extrabold text-abyss sm:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-abyss/60">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Two ways across the world.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.mode} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-abyss/5">
              <div className="flex items-center justify-between">
                <span className={`${s.color} rounded-full px-3 py-1 text-xs font-bold text-white`}>{s.mode}</span>
                <span className="text-sm font-medium text-abyss/60">{s.time}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-abyss/70">{s.body}</p>
              <ul className="mt-6 space-y-2 text-sm font-medium">
                {s.points.map((p) => (
                  <li key={p}>✓ {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-abyss text-sand">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Four steps. Zero headaches.</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <div className="text-5xl font-extrabold text-flare">0{i + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sand/70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Track */}
      <section id="track" className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Where&apos;s my shipment?</h2>
        <p className="mt-3 text-abyss/70">Enter your Tidewing tracking number.</p>
        {/* ponytail: no backend yet, wire action to the tracking API when it exists */}
        <form className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input required name="tracking" placeholder="e.g. TW-4821-0937" aria-label="Tracking number" className="flex-1 rounded-full border border-abyss/15 bg-white px-6 py-4 outline-none focus:border-flare" />
          <button className="rounded-full bg-abyss px-8 py-4 font-semibold text-sand hover:bg-abyss/90">Track</button>
        </form>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-flare px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Ready to ship global?</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85">Get a quote in under two minutes. No account needed.</p>
          <a href="#quote" className="mt-8 inline-block rounded-full bg-abyss px-8 py-4 font-semibold text-sand hover:bg-abyss/90">
            Get a quote
          </a>
        </div>
      </section>

      <footer className="border-t border-abyss/10 py-10 text-center text-sm text-abyss/60">
        © {new Date().getFullYear()} Tidewing Logistics. Air & sea freight worldwide.
      </footer>
    </main>
  );
}
