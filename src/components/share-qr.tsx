import { useEffect, useId, useMemo, useRef, useState } from "react";
import { encode } from "uqr";
import { Download } from "lucide-react";

function pageUrl() {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${window.location.pathname}`;
}

export function ShareQr() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [url, setUrl] = useState("");
  const titleId = useId();

  useEffect(() => {
    setUrl(pageUrl());
  }, []);

  const qr = useMemo(() => {
    if (!url) return null;
    return encode(url, { ecc: "M" });
  }, [url]);

  const downloadPng = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const size = 720;
    const xml = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
    const src = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#fff1c9";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(src);
      canvas.toBlob((out) => {
        if (!out) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(out);
        a.download = "everything-day-invite-qr.png";
        a.click();
        URL.revokeObjectURL(a.href);
      }, "image/png");
    };
    img.src = src;
  };

  const modules = qr?.data ?? [];
  const size = qr?.size ?? 0;

  return (
    <section id="share" className="px-4 pb-20 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center">
        <div className="rotate-[-2deg] rounded-stamp border-4 border-ink bg-yellow p-6 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-8">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-ink">
            scan to open the invite
          </p>
          <div className="mt-4 rounded-stamp border-4 border-ink bg-paper p-3">
            {qr ? (
              <svg
                ref={svgRef}
                role="img"
                aria-labelledby={titleId}
                viewBox={`0 0 ${size} ${size}`}
                className="size-56 sm:size-64"
                shapeRendering="crispEdges"
              >
                <title id={titleId}>QR code for the Everything Day invite</title>
                <rect width={size} height={size} fill="#fff1c9" />
                <g fill="#1c0a28">
                  {modules.flatMap((row, y) =>
                    row.map((on, x) =>
                      on ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null,
                    ),
                  )}
                </g>
              </svg>
            ) : (
              <div className="size-56 bg-paper sm:size-64" />
            )}
          </div>
          <button
            type="button"
            onClick={downloadPng}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-stamp border-4 border-ink bg-magenta px-4 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-paper transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.96]"
          >
            <Download className="size-4 stroke-[2.5]" aria-hidden="true" />
            Save QR pic
          </button>
        </div>
        <div className="max-w-md rotate-2 rounded-stamp border-4 border-ink bg-cyan p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8">
          <h2 className="font-display text-3xl leading-none sm:text-5xl">Pass it on</h2>
          <p className="mt-4 text-base font-semibold leading-relaxed">
            Screenshot this QR, text it, print it, tape it to a fridge. Anyone who
            scans it lands on this page.
          </p>
          <p className="mt-4 break-all text-xs font-bold uppercase tracking-[0.14em] opacity-80">
            {url || "loading link…"}
          </p>
        </div>
      </div>
    </section>
  );
}
