import { createFileRoute } from "@tanstack/react-router";
import { ConfettiField } from "@/components/confetti-field";
import { Countdown } from "@/components/countdown";
import { EventGrid } from "@/components/event-grid";
import { ShareQr } from "@/components/share-qr";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ConfettiField />
      <div className="noise pointer-events-none fixed inset-0 z-[1] opacity-40 mix-blend-multiply" />
      <Shapes />

      <div className="relative z-10">
        <Marquee />

        <header className="px-4 pb-10 pt-8 sm:px-8 sm:pt-12">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
            <p className="rounded-stamp border-2 border-ink bg-cyan px-3 py-1 text-xs font-extrabold uppercase tracking-[0.22em]">
              you're invited
            </p>
            <p className="rounded-stamp border-2 border-ink bg-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em]">
              sat · sept 5 · 10am
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-6xl text-center">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-magenta sm:text-base">
              a party with no schedule
            </p>
            <h1 className="mt-3 flex flex-col items-center leading-[0.85]">
              <span className="font-display text-[18vw] text-ink sm:text-[9rem] md:text-[11rem]">
                EVERY
              </span>
              <span className="wobble font-display text-[18vw] text-magenta sm:text-[9rem] md:text-[11rem]">
                THING
              </span>
              <span className="-mt-1 rotate-[-2deg] font-display text-[18vw] text-violet sm:text-[9rem] md:text-[11rem]">
                DAY
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-snug sm:text-2xl">
              All the events. All at once. All day.
            </p>
          </div>
        </header>

        <section className="px-4 py-6 sm:px-8" aria-labelledby="countdown-heading">
          <h2 id="countdown-heading" className="sr-only">
            Countdown to Everything Day
          </h2>
          <Countdown />
          <p className="mt-6 text-center text-sm font-bold uppercase tracking-[0.2em]">
            doors theoretically open at 10:00 AM · nothing actually starts or stops
          </p>
        </section>

        <section id="about" className="px-4 py-16 sm:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rotate-[-1.5deg] rounded-stamp border-4 border-ink bg-paper p-6 shadow-[10px_10px_0_0_var(--color-magenta)] sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-magenta">
                about
              </p>
              <h2 className="mt-2 font-display text-4xl leading-none sm:text-6xl">
                What is Everything Day?
              </h2>
              <div className="mt-6 space-y-4 text-base font-medium leading-relaxed sm:text-lg">
                <p>
                  Most parties have a schedule. Pie at 7. A movie at 8. Games
                  after that. Cute. Not us.
                </p>
                <p>
                  <strong>Everything Day</strong> is a party where instead of lining
                  events up, every event is happening simultaneously the whole day.
                  The pie oven is on while a slop movie is playing while Jackbox
                  is yelling from the TV while DJ nobody fights for the aux.
                </p>
                <p>
                  You don't follow a program. You wander. You collide. You leave
                  a presentation mid-slide for pie. You come back. That's the whole idea.
                </p>
              </div>
            </article>

            <aside className="flex flex-col gap-4">
              <Stamp className="rotate-3 bg-lime" title="rule 1" body="No schedule. If you ask what time something is, the answer is now." />
              <Stamp className="-rotate-2 bg-orange text-paper" title="rule 2" body="You can be in two places. You just have to walk faster." />
              <Stamp className="rotate-2 bg-cyan" title="rule 3" body="Bring a thing: a pie, a game, a snack, a five-minute rant, unfinished OPR bullets." />
              <Stamp className="-rotate-3 bg-violet text-paper" title="where" body="101 N Tejon St, Unit 360 — the condo. Buzz, text, or just show up." />
            </aside>
          </div>
        </section>

        <section id="events" className="px-4 pb-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-magenta">
                  the pile
                </p>
                <h2 className="font-display text-4xl leading-none sm:text-6xl">
                  Events (all of them, always)
                </h2>
              </div>
              <p className="max-w-xs text-sm font-semibold leading-snug">
                These are not time slots. They overlap on purpose. Pick a vibe,
                then pick another.
              </p>
            </div>
            <EventGrid />
          </div>
        </section>

        <ShareQr />

        <footer className="border-t-4 border-ink bg-ink px-4 py-12 text-paper sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-3xl sm:text-5xl">See you in the pile.</p>
              <p className="mt-2 max-w-md text-sm font-medium text-yellow">
                Saturday, September 5 · 10:00 AM until we run out of people or
                pie. Forward this — or the QR — to anyone who should be there.
              </p>
            </div>
            <p className="rounded-stamp border-2 border-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-yellow">
              everything day · 2026
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Marquee() {
  const phrase = "NO SCHEDULE  ·  ALL AT ONCE  ·  EVERYTHING DAY  ·  ";
  return (
    <div className="overflow-hidden border-b-4 border-ink bg-magenta py-2 text-paper">
      <div className="marquee-track flex w-max whitespace-nowrap font-display text-sm tracking-widest">
        <span>{phrase.repeat(10)}</span>
        <span>{phrase.repeat(10)}</span>
      </div>
    </div>
  );
}

function Stamp({
  className,
  title,
  body,
}: {
  className: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className={`rounded-stamp border-4 border-ink p-5 shadow-[6px_6px_0_0_var(--color-ink)] ${className}`}
    >
      <p className="text-[10px] font-extrabold uppercase tracking-[0.28em]">{title}</p>
      <p className="mt-2 text-base font-semibold leading-snug">{body}</p>
    </div>
  );
}

function Shapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div className="float-slow absolute -left-16 top-24 size-40 rounded-full border-4 border-ink bg-cyan/80" />
      <div className="absolute right-[-40px] top-40 size-48 rotate-12 border-4 border-ink bg-yellow" />
      <div className="spin-slow absolute bottom-[28%] left-[8%] size-24 border-4 border-ink bg-lime" />
      <div className="absolute right-[12%] top-[58%] size-32 -rotate-12 rounded-stamp border-4 border-ink bg-orange/90" />
      <div className="absolute bottom-24 right-1/3 size-20 rotate-45 border-4 border-ink bg-magenta" />
    </div>
  );
}
