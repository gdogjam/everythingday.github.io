import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, c as Cookie, i as Gamepad2, l as Clapperboard, n as Presentation, o as Disc3, r as PenLine, s as Dice5, u as Cake } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as encode } from "../_libs/uqr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DC-b1ySG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"bg-magenta",
	"bg-cyan",
	"bg-yellow",
	"bg-lime",
	"bg-orange",
	"bg-violet"
];
var PIECES = Array.from({ length: 28 }, (_, i) => ({
	left: `${i * 17 % 100}%`,
	delay: `${i % 9 * .35}s`,
	duration: `${7 + i % 5}s`,
	width: `${6 + i % 5 * 2}px`,
	height: `${10 + i % 4 * 3}px`,
	color: COLORS[i % COLORS.length],
	rotate: `${i * 23 % 360}deg`
}));
function ConfettiField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": "true",
		children: PIECES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `confetti-piece absolute top-[-24px] ${p.color}`,
			style: {
				left: p.left,
				width: p.width,
				height: p.height,
				animationDelay: p.delay,
				animationDuration: p.duration,
				transform: `rotate(${p.rotate})`
			}
		}, i))
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PARTY_START = /* @__PURE__ */ new Date("2026-09-05T10:00:00-04:00");
function split(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	return {
		days: Math.floor(total / 86400),
		hours: Math.floor(total % 86400 / 3600),
		minutes: Math.floor(total % 3600 / 60),
		seconds: total % 60
	};
}
var UNITS = [
	{
		key: "days",
		label: "days",
		tone: "bg-magenta text-paper",
		tilt: "-rotate-3"
	},
	{
		key: "hours",
		label: "hours",
		tone: "bg-cyan text-ink",
		tilt: "rotate-2"
	},
	{
		key: "minutes",
		label: "mins",
		tone: "bg-yellow text-ink",
		tilt: "-rotate-1"
	},
	{
		key: "seconds",
		label: "secs",
		tone: "bg-lime text-ink",
		tilt: "rotate-3"
	}
];
function Countdown() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const remaining = now === null ? 0 : PARTY_START.getTime() - now;
	const live = now !== null && remaining <= 0;
	const parts = split(remaining);
	if (live) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto max-w-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wobble rounded-stamp border-4 border-ink bg-magenta px-6 py-8 text-center shadow-[10px_10px_0_0_var(--color-ink)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl text-paper sm:text-5xl",
				children: "IT'S HAPPENING"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg font-semibold text-paper",
				children: "Everything is on. Pick a room. Leave mid-song. Come back."
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5",
		children: UNITS.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("rounded-stamp border-4 border-ink px-3 py-5 text-center shadow-[6px_6px_0_0_var(--color-ink)] sm:py-6", u.tone, u.tilt),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-4xl tabular-nums leading-none sm:text-6xl",
				children: String(parts[u.key]).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-xs font-extrabold uppercase tracking-[0.2em] sm:text-sm",
				children: u.label
			})]
		}, u.key))
	});
}
var EVENTS = [
	{
		title: "Pie bake off",
		blurb: "Ovens on all day. Bring a pie, steal a slice, vote with your mouth. Crust is a contact sport.",
		where: "Kitchen",
		Icon: Cake,
		tone: "bg-magenta text-paper",
		tilt: "-rotate-2"
	},
	{
		title: "Slop movie marathon",
		blurb: "The worst movies we can find, playing constantly. Talking over them is required. Quality is banned.",
		where: "Couch zone",
		Icon: Clapperboard,
		tone: "bg-yellow text-ink",
		tilt: "rotate-3"
	},
	{
		title: "Jackbox games",
		blurb: "The TV is a party. Drop in for a round, yell at the screen, pass the phone to whoever just walked in.",
		where: "Living room",
		Icon: Gamepad2,
		tone: "bg-cyan text-ink",
		tilt: "-rotate-3"
	},
	{
		title: "Board games",
		blurb: "Tables that never get packed up. Drop in mid-round. Invent a house rule. Leave when you're losing.",
		where: "Dining table",
		Icon: Dice5,
		tone: "bg-violet text-paper",
		tilt: "rotate-2"
	},
	{
		title: "Random topic presentation",
		blurb: "Anyone can grab the floor and lecture on whatever they want. Five minutes. No slides required. Interruptions encouraged.",
		where: "The big room",
		Icon: Presentation,
		tone: "bg-lime text-ink",
		tilt: "rotate-1"
	},
	{
		title: "DJ nobody",
		blurb: "The aux is public property. Fight for it. Collaborate. Survive.",
		where: "Speaker stack",
		Icon: Disc3,
		tone: "bg-orange text-paper",
		tilt: "-rotate-2"
	},
	{
		title: "Snack table",
		blurb: "A table that refills itself because people keep bringing more. Graze. Hover. Repeat.",
		where: "Everywhere",
		Icon: Cookie,
		tone: "bg-paper text-ink",
		tilt: "rotate-3"
	},
	{
		title: "Writing OPR bullets",
		blurb: "A real work break, on purpose. Sit down with friends, knock out some bullets, get roasted, get unstuck, go back to the party.",
		where: "Quiet corner",
		Icon: PenLine,
		tone: "bg-ink text-paper",
		tilt: "-rotate-1"
	}
];
function EventGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: EVENTS.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("relative rounded-stamp border-4 border-ink p-5 shadow-[7px_7px_0_0_var(--color-ink)] transition-transform duration-150 ease-out hover:-translate-y-1 active:scale-[0.96]", event.tone, event.tilt),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -top-3 -right-2 rotate-6 rounded-stamp border-2 border-ink bg-paper px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-ink",
					children: "all day"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(event.Icon, {
					className: "size-8 stroke-[2.5]",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-xl leading-tight sm:text-2xl",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium leading-relaxed opacity-90",
					children: event.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-extrabold uppercase tracking-[0.18em] opacity-80",
					children: event.where
				})
			]
		}, event.title))
	});
}
function pageUrl() {
	if (typeof window === "undefined") return "";
	return `${window.location.origin}${window.location.pathname}`;
}
function ShareQr() {
	const svgRef = (0, import_react.useRef)(null);
	const [url, setUrl] = (0, import_react.useState)("");
	const titleId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		setUrl(pageUrl());
	}, []);
	const qr = (0, import_react.useMemo)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "share",
		className: "px-4 pb-20 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rotate-[-2deg] rounded-stamp border-4 border-ink bg-yellow p-6 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs font-extrabold uppercase tracking-[0.28em] text-ink",
						children: "scan to open the invite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-stamp border-4 border-ink bg-paper p-3",
						children: qr ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							ref: svgRef,
							role: "img",
							"aria-labelledby": titleId,
							viewBox: `0 0 ${size} ${size}`,
							className: "size-56 sm:size-64",
							shapeRendering: "crispEdges",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
									id: titleId,
									children: "QR code for the Everything Day invite"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									width: size,
									height: size,
									fill: "#fff1c9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
									fill: "#1c0a28",
									children: modules.flatMap((row, y) => row.map((on, x) => on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x,
										y,
										width: 1,
										height: 1
									}, `${x}-${y}`) : null))
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-56 bg-paper sm:size-64" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: downloadPng,
						className: "mt-5 flex w-full items-center justify-center gap-2 rounded-stamp border-4 border-ink bg-magenta px-4 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-paper transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4 stroke-[2.5]",
							"aria-hidden": "true"
						}), "Save QR pic"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md rotate-2 rounded-stamp border-4 border-ink bg-cyan p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-none sm:text-5xl",
						children: "Pass it on"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base font-semibold leading-relaxed",
						children: "Screenshot this QR, text it, print it, tape it to a fridge. Anyone who scans it lands on this page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 break-all text-xs font-bold uppercase tracking-[0.14em] opacity-80",
						children: url || "loading link…"
					})
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfettiField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise pointer-events-none fixed inset-0 z-[1] opacity-40 mix-blend-multiply" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shapes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "px-4 pb-10 pt-8 sm:px-8 sm:pt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-stamp border-2 border-ink bg-cyan px-3 py-1 text-xs font-extrabold uppercase tracking-[0.22em]",
								children: "you're invited"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-stamp border-2 border-ink bg-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em]",
								children: "sat · sept 5 · 10am"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-8 max-w-6xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm uppercase tracking-[0.4em] text-magenta sm:text-base",
									children: "a party with no schedule"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-3 flex flex-col items-center leading-[0.85]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-[18vw] text-ink sm:text-[9rem] md:text-[11rem]",
											children: "EVERY"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "wobble font-display text-[18vw] text-magenta sm:text-[9rem] md:text-[11rem]",
											children: "THING"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "-mt-1 rotate-[-2deg] font-display text-[18vw] text-violet sm:text-[9rem] md:text-[11rem]",
											children: "DAY"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-6 max-w-xl text-lg font-semibold leading-snug sm:text-2xl",
									children: "All the events. All at once. All day."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "px-4 py-6 sm:px-8",
						"aria-labelledby": "countdown-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "countdown-heading",
								className: "sr-only",
								children: "Countdown to Everything Day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-center text-sm font-bold uppercase tracking-[0.2em]",
								children: "doors theoretically open at 10:00 AM · nothing actually starts or stops"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						className: "px-4 py-16 sm:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rotate-[-1.5deg] rounded-stamp border-4 border-ink bg-paper p-6 shadow-[10px_10px_0_0_var(--color-magenta)] sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-extrabold uppercase tracking-[0.28em] text-magenta",
										children: "about"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-4xl leading-none sm:text-6xl",
										children: "What is Everything Day?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 space-y-4 text-base font-medium leading-relaxed sm:text-lg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Most parties have a schedule. Pie at 7. A movie at 8. Games after that. Cute. Not us." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Everything Day" }), " is a party where instead of lining events up, every event is happening simultaneously the whole day. The pie oven is on while a slop movie is playing while Jackbox is yelling from the TV while DJ nobody fights for the aux."] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You don't follow a program. You wander. You collide. You leave a presentation mid-slide for pie. You come back. That's the whole idea." })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "flex flex-col gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
										className: "rotate-3 bg-lime",
										title: "rule 1",
										body: "No schedule. If you ask what time something is, the answer is now."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
										className: "-rotate-2 bg-orange text-paper",
										title: "rule 2",
										body: "You can be in two places. You just have to walk faster."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
										className: "rotate-2 bg-cyan",
										title: "rule 3",
										body: "Bring a thing: a pie, a game, a snack, a five-minute rant, unfinished OPR bullets."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
										className: "-rotate-3 bg-violet text-paper",
										title: "where",
										body: "101 N Tejon St, Unit 360 — the condo. Buzz, text, or just show up."
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "events",
						className: "px-4 pb-20 sm:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-extrabold uppercase tracking-[0.28em] text-magenta",
									children: "the pile"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl leading-none sm:text-6xl",
									children: "Events (all of them, always)"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xs text-sm font-semibold leading-snug",
									children: "These are not time slots. They overlap on purpose. Pick a vibe, then pick another."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventGrid, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareQr, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "border-t-4 border-ink bg-ink px-4 py-12 text-paper sm:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl sm:text-5xl",
								children: "See you in the pile."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-sm font-medium text-yellow",
								children: "Saturday, September 5 · 10:00 AM until we run out of people or pie. Forward this — or the QR — to anyone who should be there."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-stamp border-2 border-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-yellow",
								children: "everything day · 2026"
							})]
						})
					})
				]
			})
		]
	});
}
function Marquee() {
	const phrase = "NO SCHEDULE  ·  ALL AT ONCE  ·  EVERYTHING DAY  ·  ";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-b-4 border-ink bg-magenta py-2 text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "marquee-track flex w-max whitespace-nowrap font-display text-sm tracking-widest",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phrase.repeat(10) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phrase.repeat(10) })]
		})
	});
}
function Stamp({ className, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-stamp border-4 border-ink p-5 shadow-[6px_6px_0_0_var(--color-ink)] ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] font-extrabold uppercase tracking-[0.28em]",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-base font-semibold leading-snug",
			children: body
		})]
	});
}
function Shapes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 z-[1] overflow-hidden",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "float-slow absolute -left-16 top-24 size-40 rounded-full border-4 border-ink bg-cyan/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-40px] top-40 size-48 rotate-12 border-4 border-ink bg-yellow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-slow absolute bottom-[28%] left-[8%] size-24 border-4 border-ink bg-lime" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[12%] top-[58%] size-32 -rotate-12 rounded-stamp border-4 border-ink bg-orange/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-24 right-1/3 size-20 rotate-45 border-4 border-ink bg-magenta" })
		]
	});
}
//#endregion
export { Home as component };
