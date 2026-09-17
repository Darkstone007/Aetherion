import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$6 } from "./router-D2-N1iZH.mjs";
import { a as Shell, i as PageTitle, n as Figure, o as ThreadChips, t as CardLink } from "./ui-BdcoiLV4.mjs";
import { n as THREADS } from "./continuity-B0mHz3ml.mjs";
import { n as TENEBRIS_NOTE, t as GODS } from "./gods-BqGlrR0n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gods-Ciq0hszx.js
var import_jsx_runtime = require_jsx_runtime();
function GodsPage() {
	const { id } = Route$6.useSearch();
	const god = GODS.find((g) => g.id === id);
	if (id === "tenebris") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "/gods",
			className: "text-xs uppercase tracking-nav text-anima no-underline",
			children: "All gods"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-6 font-display text-3xl",
			children: "Tenebris"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-mute",
			children: TENEBRIS_NOTE
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: THREADS.tenebris })
	] });
	if (god) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "/gods",
		className: "text-xs uppercase tracking-nav text-anima no-underline",
		children: "All gods"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]",
		children: [god.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
			src: god.image,
			alt: god.name,
			tall: true,
			caption: god.look
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border border-line bg-raised p-6 text-mute",
			children: god.look
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-nav text-kima",
				children: god.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl",
				children: god.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-chrome",
				children: god.domains
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-paper",
				children: god.worship
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-mute",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-kima",
					children: "False rite. "
				}), god.falseRite]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-mute",
				children: god.symbolism
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-chrome",
				children: ["Seat · ", god.continent]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: THREADS[god.id] })
		] })]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		kicker: "Pantheon",
		title: "Eighteen ascended seats",
		lead: "Eighteen gods. Every one was a Seeker at Level 2001+. Aeltharion led. The Betrayer slew him. Worship is continental. False rites are Betrayer work using a holy name. Tenebris is Noctumbra’s moon-name, not a nineteenth seat."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
		children: GODS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLink, {
			to: `/gods?id=${g.id}`,
			image: g.image,
			name: g.name,
			title: g.title,
			meta: g.domains
		}, g.id))
	})] });
}
//#endregion
export { GodsPage as component };
