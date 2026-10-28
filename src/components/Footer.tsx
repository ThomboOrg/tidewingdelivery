import Link from "next/link";
import Logo from "./Logo";

const columns = [
  { title: "Ship", links: [["Air Freight", "/services/air"], ["Sea Freight", "/services/sea"], ["Get a quote", "/ship"], ["Track a shipment", "/track"]] },
  { title: "Support", links: [["Help centre", "/support"], ["FAQs", "/support#faq"], ["Contact us", "/support#contact"], ["For business", "/support#business"]] },
  { title: "Company", links: [["About Tidewing", "/support"], ["Careers", "/support"], ["Sustainability", "/support"], ["Press", "/support"]] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Air and sea freight to 180+ countries. One team from pickup to doorstep.
          </p>
          <p className="mt-6 text-sm text-white/60">
            +233 30 000 0000
            <br />
            hello@tidewing.example
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className="eyebrow text-white/50">{c.title}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {c.links.map(([l, h]) => (
                <li key={l}>
                  <Link href={h} className="text-white/80 hover:text-white">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Tidewing Logistics Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Terms of use", "Privacy notice", "Cookie settings", "Fraud awareness"].map((l) => (
              <Link key={l} href="/support" className="hover:text-white">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
