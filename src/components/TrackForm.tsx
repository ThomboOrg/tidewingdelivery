import { Search } from "lucide-react";

// Plain GET form to /track — works without JS.
export default function TrackForm({ defaultValue = "", size = "lg" }: { defaultValue?: string; size?: "lg" | "md" }) {
  const pad = size === "lg" ? "h-14 sm:h-16" : "h-12";
  return (
    <form action="/track" className="flex w-full gap-2 rounded-xl bg-white p-1.5 shadow-lg ring-1 ring-black/5">
      <label className="flex flex-1 items-center gap-3 pl-3">
        <Search className="size-5 shrink-0 text-ink/40" />
        <span className="sr-only">Tracking number</span>
        <input
          name="id"
          required
          defaultValue={defaultValue}
          placeholder="Enter tracking number, e.g. TW-4821-0937"
          className={`${pad} w-full bg-transparent text-ink outline-none placeholder:text-ink/40`}
        />
      </label>
      <button className={`${pad} rounded-lg bg-flare px-6 font-semibold text-white transition hover:bg-flare-dark sm:px-8`}>Track</button>
    </form>
  );
}
