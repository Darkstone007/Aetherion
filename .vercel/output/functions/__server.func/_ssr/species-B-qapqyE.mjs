import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$4 } from "./router-D2-N1iZH.mjs";
import { a as Shell, i as PageTitle, n as Figure, o as ThreadChips } from "./ui-BdcoiLV4.mjs";
import { n as THREADS } from "./continuity-B0mHz3ml.mjs";
import { n as SPECIES_GROUPS, t as SPECIES } from "./species-Dn7Hqj9f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/species-B-qapqyE.js
var import_jsx_runtime = require_jsx_runtime();
function SpeciesPage() {
	const { id } = Route$4.useSearch();
	const sp = SPECIES.find((s) => s.id === id);
	if (sp) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "/species",
		className: "text-xs uppercase tracking-nav text-anima no-underline",
		children: "All species"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]",
		children: [sp.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
			src: sp.image,
			alt: sp.name,
			tall: true,
			caption: sp.look
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: sp.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm uppercase tracking-nav text-chrome",
				children: sp.habitat
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-paper",
				children: sp.look
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-mute",
				children: sp.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-ink p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-nav text-mute",
							children: "Affinity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper",
							children: sp.affinity
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-ink p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-nav text-mute",
							children: "Codex figure"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper",
							children: sp.figure
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-ink p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-nav text-mute",
							children: "Energy / combat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper",
							children: sp.kima
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-ink p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-nav text-mute",
							children: "History"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper",
							children: sp.history
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: THREADS[sp.id] })
		] })]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Species",
			title: "Twenty-five peoples",
			lead: "Every sapient people in the documents, drawn with bodies in the frame. Heritage no longer decides destiny after the Fracture, but habitat, culture, and affinity still shape a life. Animals and hostile beasts are on the Bestiary tab."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-10",
			children: SPECIES_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: g.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: g.src,
						alt: g.title,
						caption: g.caption
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: g.ids.map((sid) => {
						const s = SPECIES.find((x) => x.id === sid);
						return s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/species?id=${sid}`,
							className: "rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong",
							children: s.name
						}, sid) : null;
					})
				})
			] }, g.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: SPECIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `/species?id=${s.id}`,
				className: "overflow-hidden rounded-lg border border-line bg-ink no-underline transition-colors duration-150 hover:border-line-strong",
				children: [s.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: "",
					className: "aspect-video w-full object-cover object-top"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-paper",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-nav text-anima",
							children: s.habitat
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-mute",
							children: s.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-chrome",
							children: s.figure
						})
					]
				})]
			}, s.id))
		})
	] });
}
//#endregion
export { SpeciesPage as component };
