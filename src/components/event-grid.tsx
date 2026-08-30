import type { LucideIcon } from "lucide-react";
import {
  Cake,
  Clapperboard,
  Cookie,
  Dice5,
  Disc3,
  Gamepad2,
  PenLine,
  Presentation,
} from "lucide-react";
import { cn } from "@/lib/utils";

type EventCard = {
  title: string;
  blurb: string;
  where: string;
  Icon: LucideIcon;
  tone: string;
  tilt: string;
};

const EVENTS: EventCard[] = [
  {
    title: "Pie bake off",
    blurb: "Ovens on all day. Bring a pie, steal a slice, vote with your mouth. Crust is a contact sport.",
    where: "Kitchen",
    Icon: Cake,
    tone: "bg-magenta text-paper",
    tilt: "-rotate-2",
  },
  {
    title: "Slop movie marathon",
    blurb: "The worst movies we can find, playing constantly. Talking over them is required. Quality is banned.",
    where: "Couch zone",
    Icon: Clapperboard,
    tone: "bg-yellow text-ink",
    tilt: "rotate-3",
  },
  {
    title: "Jackbox games",
    blurb: "The TV is a party. Drop in for a round, yell at the screen, pass the phone to whoever just walked in.",
    where: "Living room",
    Icon: Gamepad2,
    tone: "bg-cyan text-ink",
    tilt: "-rotate-3",
  },
  {
    title: "Board games",
    blurb: "Tables that never get packed up. Drop in mid-round. Invent a house rule. Leave when you're losing.",
    where: "Dining table",
    Icon: Dice5,
    tone: "bg-violet text-paper",
    tilt: "rotate-2",
  },
  {
    title: "Random topic presentation",
    blurb: "Anyone can grab the floor and lecture on whatever they want. Five minutes. No slides required. Interruptions encouraged.",
    where: "The big room",
    Icon: Presentation,
    tone: "bg-lime text-ink",
    tilt: "rotate-1",
  },
  {
    title: "DJ nobody",
    blurb: "The aux is public property. Fight for it. Collaborate. Survive.",
    where: "Speaker stack",
    Icon: Disc3,
    tone: "bg-orange text-paper",
    tilt: "-rotate-2",
  },
  {
    title: "Snack table",
    blurb: "A table that refills itself because people keep bringing more. Graze. Hover. Repeat.",
    where: "Everywhere",
    Icon: Cookie,
    tone: "bg-paper text-ink",
    tilt: "rotate-3",
  },
  {
    title: "Writing OPR bullets",
    blurb: "A real work break, on purpose. Sit down with friends, knock out some bullets, get roasted, get unstuck, go back to the party.",
    where: "Quiet corner",
    Icon: PenLine,
    tone: "bg-ink text-paper",
    tilt: "-rotate-1",
  },
];

export function EventGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {EVENTS.map((event) => (
        <article
          key={event.title}
          className={cn(
            "relative rounded-stamp border-4 border-ink p-5 shadow-[7px_7px_0_0_var(--color-ink)] transition-transform duration-150 ease-out hover:-translate-y-1 active:scale-[0.96]",
            event.tone,
            event.tilt,
          )}
        >
          <span className="absolute -top-3 -right-2 rotate-6 rounded-stamp border-2 border-ink bg-paper px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-ink">
            all day
          </span>
          <event.Icon className="size-8 stroke-[2.5]" aria-hidden="true" />
          <h3 className="mt-3 font-display text-xl leading-tight sm:text-2xl">{event.title}</h3>
          <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">{event.blurb}</p>
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] opacity-80">
            {event.where}
          </p>
        </article>
      ))}
    </div>
  );
}
