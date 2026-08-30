const COLORS = [
  "bg-magenta",
  "bg-cyan",
  "bg-yellow",
  "bg-lime",
  "bg-orange",
  "bg-violet",
] as const;

const PIECES = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 17) % 100}%`,
  delay: `${(i % 9) * 0.35}s`,
  duration: `${7 + (i % 5)}s`,
  width: `${6 + (i % 5) * 2}px`,
  height: `${10 + (i % 4) * 3}px`,
  color: COLORS[i % COLORS.length],
  rotate: `${(i * 23) % 360}deg`,
}));

export function ConfettiField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className={`confetti-piece absolute top-[-24px] ${p.color}`}
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `rotate(${p.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
