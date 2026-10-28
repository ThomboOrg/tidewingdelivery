"use client";

import Link from "next/link";
import { Dialog, NavigationMenu as N } from "radix-ui";
import { ChevronDown, Menu, Plane, Ship, X } from "lucide-react";
import Logo from "./Logo";

const services = [
  { href: "/services/air", icon: Plane, title: "Air Freight", body: "Express, standard & charter · 1–5 days" },
  { href: "/services/sea", icon: Ship, title: "Sea Freight", body: "FCL, LCL & reefer · 12–40 days" },
];

export function DesktopNav({ links }: { links: string[][] }) {
  return (
    <N.Root className="relative hidden flex-1 lg:block">
      <N.List className="flex items-center gap-1 text-[15px]">
        <N.Item>
          <N.Trigger className="group flex items-center gap-1 rounded-md px-3 py-2 outline-none hover:bg-mist focus-visible:bg-mist data-[state=open]:bg-mist">
            Services <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </N.Trigger>
          <N.Content className="absolute left-0 top-0 w-96 p-2">
            {services.map(({ href, icon: Icon, title, body }) => (
              <N.Link key={href} asChild>
                <Link href={href} className="flex gap-3 rounded-lg p-3 outline-none hover:bg-mist focus-visible:bg-mist">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-flare/10 text-flare">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-medium">{title}</span>
                    <span className="block text-sm text-ink/60">{body}</span>
                  </span>
                </Link>
              </N.Link>
            ))}
          </N.Content>
        </N.Item>
        {links.map(([l, h]) => (
          <N.Item key={h}>
            <N.Link asChild>
              <Link href={h} className="block rounded-md px-3 py-2 outline-none hover:bg-mist focus-visible:bg-mist">
                {l}
              </Link>
            </N.Link>
          </N.Item>
        ))}
      </N.List>
      <div className="absolute left-0 top-full pt-2">
        <N.Viewport className="h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-xl border border-line bg-white shadow-xl transition-[width,height] duration-200" />
      </div>
    </N.Root>
  );
}

export function MobileMenu({ links }: { links: string[][] }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="grid size-10 place-items-center rounded-lg border border-line lg:hidden" aria-label="Open menu">
        <Menu className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm data-[state=open]:animate-[fade-in_200ms]" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl outline-none data-[state=open]:animate-[slide-in_250ms_ease-out]">
          <div className="flex h-16 items-center justify-between border-b border-line px-4">
            <Logo />
            <Dialog.Close className="grid size-10 place-items-center rounded-lg hover:bg-mist" aria-label="Close menu">
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
          <nav className="flex-1 overflow-y-auto p-4">
            <p className="eyebrow px-3 pb-2 text-ink/50">Services</p>
            {services.map(({ href, icon: Icon, title, body }) => (
              <Dialog.Close key={href} asChild>
                <Link href={href} className="flex gap-3 rounded-lg p-3 hover:bg-mist">
                  <Icon className="mt-0.5 size-5 text-flare" />
                  <span>
                    <span className="block font-medium">{title}</span>
                    <span className="block text-sm text-ink/60">{body}</span>
                  </span>
                </Link>
              </Dialog.Close>
            ))}
            <div className="my-4 border-t border-line" />
            {[...links, ["For business", "/support#business"], ["Log in", "/login"]].map(([l, h]) => (
              <Dialog.Close key={h} asChild>
                <Link href={h} className="block rounded-lg px-3 py-3 font-medium hover:bg-mist">
                  {l}
                </Link>
              </Dialog.Close>
            ))}
          </nav>
          <div className="border-t border-line p-4">
            <Dialog.Close asChild>
              <Link href="/ship" className="block rounded-lg bg-flare py-3 text-center font-semibold text-white hover:bg-flare-dark">
                Ship now
              </Link>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
