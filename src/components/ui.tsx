"use client";

import { useState } from "react";
import { Accordion as A, Popover, Select as S } from "radix-ui";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { CalendarDays, Check, ChevronDown } from "lucide-react";

const trigger =
  "flex h-12 w-full items-center justify-between gap-2 rounded-lg border border-line bg-white px-4 text-left outline-none transition focus-visible:border-flare focus-visible:ring-4 focus-visible:ring-flare/15 data-[state=open]:border-flare data-[state=open]:ring-4 data-[state=open]:ring-flare/15";
const panel = "z-50 rounded-xl border border-line bg-white shadow-xl";

export function Select({
  options,
  placeholder = "Select…",
  ...props
}: {
  options: string[];
  placeholder?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  "aria-label"?: string;
}) {
  const { "aria-label": label, ...root } = props;
  return (
    <S.Root {...root}>
      <S.Trigger className={trigger} aria-label={label}>
        <S.Value placeholder={<span className="text-ink/40">{placeholder}</span>} />
        <S.Icon>
          <ChevronDown className="size-4 text-ink/50" />
        </S.Icon>
      </S.Trigger>
      <S.Portal>
        <S.Content position="popper" sideOffset={6} className={`${panel} max-h-72 w-[var(--radix-select-trigger-width)] overflow-hidden`}>
          <S.Viewport className="p-1.5">
            {options.map((o) => (
              <S.Item
                key={o}
                value={o}
                className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm outline-none data-[highlighted]:bg-mist data-[state=checked]:font-medium"
              >
                <S.ItemText>{o}</S.ItemText>
                <S.ItemIndicator>
                  <Check className="size-4 text-flare" />
                </S.ItemIndicator>
              </S.Item>
            ))}
          </S.Viewport>
        </S.Content>
      </S.Portal>
    </S.Root>
  );
}

export function DatePicker({ name, "aria-label": label }: { name?: string; "aria-label"?: string }) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className={trigger} aria-label={label}>
        <span className={date ? "" : "text-ink/40"}>
          {date ? date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "Pick a date"}
        </span>
        <CalendarDays className="size-4 text-ink/50" />
      </Popover.Trigger>
      {name && <input type="hidden" name={name} value={date?.toISOString().slice(0, 10) ?? ""} />}
      <Popover.Portal>
        <Popover.Content align="start" sideOffset={6} className={`${panel} p-3`}>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
            // a function, so the current date is read only when the calendar runs, not during prerender
            disabled={(day) => day < new Date(new Date().setHours(0, 0, 0, 0))}
            className="text-sm"
            style={
              {
                "--rdp-accent-color": "var(--color-flare)",
                "--rdp-accent-background-color": "color-mix(in srgb, var(--color-flare) 12%, white)",
                "--rdp-today-color": "var(--color-flare)",
                "--rdp-day-width": "40px",
                "--rdp-day-height": "40px",
                "--rdp-day_button-width": "38px",
                "--rdp-day_button-height": "38px",
              } as React.CSSProperties
            }
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function Accordion({ items }: { items: [string, string][] }) {
  return (
    <A.Root type="single" collapsible className="divide-y divide-line border-y border-line">
      {items.map(([q, a]) => (
        <A.Item key={q} value={q}>
          <A.Header>
            <A.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-medium outline-none focus-visible:text-flare">
              {q}
              <ChevronDown className="size-5 shrink-0 text-ink/40 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </A.Trigger>
          </A.Header>
          <A.Content className="overflow-hidden data-[state=closed]:animate-[collapse_200ms_ease-out] data-[state=open]:animate-[expand_200ms_ease-out]">
            <p className="pb-5 text-ink/60">{a}</p>
          </A.Content>
        </A.Item>
      ))}
    </A.Root>
  );
}
