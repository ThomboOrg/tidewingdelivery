"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "radix-ui";
import { Globe, LayoutDashboard, LifeBuoy, LogOut, Package, Receipt } from "lucide-react";

const items = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/shipments", icon: Package, label: "Shipments" },
  { href: "/dashboard/invoices", icon: Receipt, label: "Invoices" },
];

export default function PortalNav({ vertical = false }: { vertical?: boolean }) {
  const path = usePathname();
  return (
    <nav className={vertical ? "mt-6 space-y-1 px-4" : "flex gap-1 overflow-x-auto px-2"}>
      {items.map(({ href, icon: Icon, label }) => {
        const active = path === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              vertical
                ? `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${active ? "bg-mist text-ink" : "text-ink/60 hover:bg-mist hover:text-ink"}`
                : `flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium ${active ? "border-flare text-ink" : "border-transparent text-ink/60"}`
            }
          >
            <Icon className="size-4" /> {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AccountMenu({ user, email, company }: { user: string; email: string; company: string }) {
  const item = "flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm outline-none data-[highlighted]:bg-mist";
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="grid size-9 place-items-center rounded-full bg-ink text-sm font-semibold text-white outline-none ring-flare/30 focus-visible:ring-4 data-[state=open]:ring-4"
        aria-label="Account menu"
      >
        {user.split(" ").map((p) => p[0]).join("")}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={8} className="z-50 w-64 rounded-xl border border-line bg-white p-1.5 shadow-xl">
          <div className="px-3 py-2.5">
            <p className="text-sm font-medium">{user}</p>
            <p className="text-xs text-ink/50">{email}</p>
            <p className="mt-1 text-xs text-ink/50">{company}</p>
          </div>
          <DropdownMenu.Separator className="my-1 h-px bg-line" />
          <DropdownMenu.Item asChild className={item}>
            <Link href="/dashboard/shipments"><Package className="size-4 text-ink/50" /> My shipments</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild className={item}>
            <Link href="/dashboard/invoices"><Receipt className="size-4 text-ink/50" /> Billing</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild className={item}>
            <Link href="/support#contact"><LifeBuoy className="size-4 text-ink/50" /> Help & support</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild className={item}>
            <Link href="/"><Globe className="size-4 text-ink/50" /> Back to site</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-line" />
          <DropdownMenu.Item asChild className={`${item} text-red-600`}>
            <Link href="/login"><LogOut className="size-4" /> Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
