import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shell, i as PageTitle, o as ThreadChips } from "./ui-BdcoiLV4.mjs";
import { n as THREADS, t as DRIFTS } from "./continuity-B0mHz3ml.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/threads-CLdgJdh_.js
var import_jsx_runtime = require_jsx_runtime();
function ThreadsPage() {
	const keys = Object.keys(THREADS);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "Continuity",
			title: "If it doesn’t line up, follow the thread",
			lead: "The six documents drift. Two sheets for Sssilvara. Two eye-colors for Xal’thok. A nineteenth god who is a moon-name. This tab does not invent a third canon. It links the disagreement to the plates we hold. Click through."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: "Document drift"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-4",
			children: DRIFTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-lg border border-line bg-ink p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-mute",
						children: d.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: d.links })
				]
			}, d.id))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Index of threads"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-mute",
					children: "Every named id that already has a link-map."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 columns-1 gap-4 sm:columns-2",
					children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mb-4 break-inside-avoid rounded-lg border border-line bg-ink p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium uppercase tracking-nav text-anima",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: THREADS[k] })]
					}, k))
				})
			]
		})
	] });
}
//#endregion
export { ThreadsPage as component };
