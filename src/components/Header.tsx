import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { DesktopNav, MobileMenu } from "./HeaderMenus";

const links = [
  ["Track", "/track"],
  ["Get a quote", "/ship"],
  ["Support", "/support"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-white">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[13px] sm:px-6">
          Sea freight now includes customs clearance at one flat rate.{" "}
          <Link href="/services/sea" className="font-medium underline underline-offset-2">
            Learn more
          </Link>
        </p>
      </div>
      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Logo />
          <DesktopNav links={links} />
          <div className="flex items-center gap-2">
            <Link href="/support#business" className="hidden px-3 py-2 text-[15px] hover:text-flare md:block">
              For business
            </Link>
            <Link href="/login" className="hidden px-3 py-2 text-[15px] hover:text-flare md:block">
              Log in
            </Link>
            <Link
              href="/ship"
              className="hidden items-center gap-1.5 rounded-lg bg-flare px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-flare-dark sm:flex"
            >
              Ship now <ArrowRight className="size-4" />
            </Link>
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </header>
  );
}
