import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shell, i as PageTitle, r as Kicker } from "./ui-BdcoiLV4.mjs";
import { a as LEVELS, i as ENERGIES, n as CLASSES, t as ALL_ELEMENTS } from "./world-_CKrOS7X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/systems-DlzSv-N8.js
var import_jsx_runtime = require_jsx_runtime();
function SystemsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Systems",
			title: "Kima, Anima, Dual Flow, classes, elements, titles",
			lead: "This is the rulebook from the design documents. Kima is body energy. Anima is soul energy. Dual Flow is both, and the System restricts it hardest. Materials, runes, artifacts, veins, and circles have their own Craft tab with plates."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Core energies" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-3",
			children: ENERGIES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-line bg-ink p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-nav text-anima",
						children: e.className
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-xl",
						children: e.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-mute",
						children: e.body
					})
				]
			}, e.name))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Primary classes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-3",
				children: Object.entries(CLASSES).map(([id, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-line bg-ink p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-anima",
							children: c.energy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-paper",
							children: c.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-mute",
							children: c.bonus
						})
					]
				}, id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Twenty-one elements" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-mute",
					children: "Fundamental: Earth, Water, Fire, Wind, Metal. Natural: Gravity, Lightning, Sound, Nature, Ice, Moon. Spiritual: Light, Shadow, Time, Force. Forbidden: Psychokinesis, Dark Arts, Necromancy, Demonic. Pathways: Summoning, Beast Magic. Combos have cost — Water + Lightning is Electrocute and can flood a zone. Master rank (76) unlocks a second element."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: ALL_ELEMENTS.map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md border border-line bg-ink px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-paper",
							children: el.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-mute",
							children: el.note
						})]
					}, el.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Titles" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Beginner 1 to God 2001+"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 grid gap-2 sm:grid-cols-2",
					children: LEVELS.map((lv) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border border-line bg-ink px-4 py-3 text-sm text-paper",
						children: lv
					}, lv))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14 rounded-lg border border-line bg-ink p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Craft lives next door" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Materials, runes, artifacts, veins, circles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-mute",
					children: "Aether Shards fill a Resonance Well (a pulsing mark). Essence Nodes buy Vitality, Might, Aether, or Clarity. World ranks run G through SSS plus ∞, based on overall power, not species. The plates and the full material list are on Craft."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/craft",
					className: "mt-4 inline-block text-sm text-anima no-underline",
					children: "Open Craft →"
				})
			]
		})
	] });
}
//#endregion
export { SystemsPage as component };
