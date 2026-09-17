import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-BdcoiLV4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Identity"
	},
	{
		to: "/story",
		label: "Story"
	},
	{
		to: "/people",
		label: "People"
	},
	{
		to: "/gods",
		label: "Gods"
	},
	{
		to: "/species",
		label: "Species"
	},
	{
		to: "/bestiary",
		label: "Bestiary"
	},
	{
		to: "/world",
		label: "World"
	},
	{
		to: "/craft",
		label: "Craft"
	},
	{
		to: "/systems",
		label: "Systems"
	},
	{
		to: "/threads",
		label: "Threads"
	}
];
function threadHref(tab, id) {
	const map = {
		Gods: "/gods",
		People: "/people",
		Species: "/species",
		World: "/world",
		System: "/systems",
		History: "/story",
		Bestiary: "/bestiary",
		Craft: "/craft"
	};
	if (tab === "System" || tab === "History") return map[tab];
	if (tab === "Craft") return id ? `${map[tab]}?id=${encodeURIComponent(id)}` : map[tab];
	return `${map[tab]}?id=${encodeURIComponent(id)}`;
}
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-void text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 border-b border-line bg-void/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-baseline gap-2 no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-tight text-paper",
						children: "Echoes of Aetherion"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-xs uppercase tracking-nav text-anima sm:inline",
						children: "Circuit Ink"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Codex",
					className: "-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:pb-0",
					children: NAV.map((item) => {
						const on = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: `shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium uppercase tracking-nav no-underline transition-colors duration-150 ${on ? "bg-raised text-anima" : "text-mute hover:bg-raised hover:text-paper"}`,
							children: item.label
						}, item.to);
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children
		})]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-xs font-medium uppercase tracking-kicker text-anima",
		children
	});
}
function PageTitle({ kicker, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: kicker }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl text-paper",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-mute",
				children: lead
			})
		]
	});
}
function ThreadChips({ links }) {
	if (!links?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 flex flex-wrap gap-2",
		children: links.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: threadHref(t.tab, t.id),
			className: "rounded-sm border border-line px-3 py-2 text-xs uppercase tracking-nav text-chrome no-underline transition-colors duration-150 hover:border-line-strong hover:text-kima",
			children: [
				t.tab,
				" · ",
				t.id,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 normal-case tracking-normal text-mute",
					children: t.why
				})
			]
		}, `${t.tab}-${t.id}-${i}`))
	});
}
function Figure({ src, alt, caption, tall }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-lg bg-raised",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setOpen(true),
			className: "block w-full",
			"aria-label": `Open ${alt}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: `w-full object-cover ${tall ? "aspect-[2/3]" : "aspect-video"}`
			})
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-4 py-3 text-sm text-mute",
			children: caption
		}) : null]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": alt,
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "max-h-[90dvh] max-w-full object-contain"
		})
	}) : null] });
}
function Mark({ name }) {
	const ch = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex aspect-[2/3] items-end bg-raised p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-3xl text-anima",
			children: ch
		})
	});
}
function CardLink({ to, image, name, title, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: to,
		className: "group overflow-hidden rounded-lg border border-line bg-ink no-underline transition-colors duration-150 hover:border-line-strong",
		children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "aspect-[2/3] w-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-paper group-hover:text-anima",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-mute",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs uppercase tracking-nav text-chrome",
					children: meta
				})
			]
		})]
	});
}
function WideCard({ to, image, name, theme }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: to,
		className: "group overflow-hidden rounded-lg border border-line bg-ink no-underline transition-colors duration-150 hover:border-line-strong",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "aspect-video w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl text-paper group-hover:text-anima",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mute",
				children: theme
			})]
		})]
	});
}
//#endregion
export { Shell as a, PageTitle as i, Figure as n, ThreadChips as o, Kicker as r, WideCard as s, CardLink as t };
