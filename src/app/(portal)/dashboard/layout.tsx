import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import Logo from "@/components/Logo";
import { account } from "@/lib/portal";
import PortalNav, { AccountMenu } from "./PortalNav";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mist lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="hidden border-r border-line bg-white lg:flex lg:flex-col">
        <div className="flex h-16 items-center px-6">
          <Logo />
        </div>
        <div className="px-4">
          <Link href="/ship" className="flex items-center justify-center gap-2 rounded-lg bg-flare py-2.5 text-sm font-semibold text-white transition hover:bg-flare-dark">
            <Plus className="size-4" /> New shipment
          </Link>
        </div>
        <PortalNav vertical />
        <div className="mt-auto border-t border-line p-4">
          <p className="text-sm font-medium">{account.company}</p>
          <p className="font-mono text-xs text-ink/50">{account.accountNo}</p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 border-b border-line bg-white">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-8">
            <div className="lg:hidden">
              <Logo />
            </div>
            <p className="hidden text-sm text-ink/60 lg:block">
              Good afternoon, <span className="font-medium text-ink">{account.user.split(" ")[0]}</span>
            </p>
            <AccountMenu user={account.user} email={account.email} company={account.company} />
          </div>
          <div className="border-t border-line lg:hidden">
            <PortalNav />
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
