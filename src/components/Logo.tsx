import Link from "next/link";

// Wing on top, wave below: air + sea in one mark.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Tidewing home">
      <svg viewBox="0 0 40 40" className="size-8" aria-hidden>
        <rect width="40" height="40" rx="10" className="fill-flare" />
        <path d="M8 21c6-1 10-5 14-11 1 5-1 9-5 11h15c-4 3-9 4-15 3" fill="white" />
        <path d="M7 29c3-2 5-2 8 0s5 2 8 0 5-2 8 0" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>Tidewing</span>
    </Link>
  );
}
