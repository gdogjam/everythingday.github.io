import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const PARTY_START = new Date("2026-09-05T10:00:00-04:00");

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function split(ms: number): Parts {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const UNITS: { key: keyof Parts; label: string; tone: string; tilt: string }[] = [
  { key: "days", label: "days", tone: "bg-magenta text-paper", tilt: "-rotate-3" },
  { key: "hours", label: "hours", tone: "bg-cyan text-ink", tilt: "rotate-2" },
  { key: "minutes", label: "mins", tone: "bg-yellow text-ink", tilt: "-rotate-1" },
  { key: "seconds", label: "secs", tone: "bg-lime text-ink", tilt: "rotate-3" },
];

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = now === null ? 0 : PARTY_START.getTime() - now;
  const live = now !== null && remaining <= 0;
  const parts = split(remaining);

  if (live) {
    return (
      <div className="relative mx-auto max-w-3xl">
        <div className="wobble rounded-stamp border-4 border-ink bg-magenta px-6 py-8 text-center shadow-[10px_10px_0_0_var(--color-ink)]">
          <p className="font-display text-3xl text-paper sm:text-5xl">IT'S HAPPENING</p>
          <p className="mt-3 text-lg font-semibold text-paper">
            Everything is on. Pick a room. Leave mid-song. Come back.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {UNITS.map((u) => (
        <div
          key={u.key}
          className={cn(
            "rounded-stamp border-4 border-ink px-3 py-5 text-center shadow-[6px_6px_0_0_var(--color-ink)] sm:py-6",
            u.tone,
            u.tilt,
          )}
        >
          <div className="font-display text-4xl tabular-nums leading-none sm:text-6xl">
            {String(parts[u.key]).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-extrabold uppercase tracking-[0.2em] sm:text-sm">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
