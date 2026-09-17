import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$5 } from "./router-D2-N1iZH.mjs";
import { a as Shell, i as PageTitle, n as Figure, o as ThreadChips, t as CardLink } from "./ui-BdcoiLV4.mjs";
import { n as THREADS } from "./continuity-B0mHz3ml.mjs";
import { t as PEOPLE } from "./people-DDDX1PXy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/people-B_ChVufR.js
var import_jsx_runtime = require_jsx_runtime();
function PeoplePage() {
	const { id } = Route$5.useSearch();
	const person = PEOPLE.find((p) => p.id === id);
	if (person) {
		const s = person.sheet;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "/people",
			className: "text-xs uppercase tracking-nav text-anima no-underline",
			children: "All people"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]",
			children: [person.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: person.image,
				alt: person.name,
				tall: true,
				caption: person.look
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-line bg-raised p-6 text-mute",
				children: "No plate yet. Circuit Ink holds the sheet until the face is drawn."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-nav text-kima",
					children: person.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl",
					children: person.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm uppercase tracking-nav text-chrome",
					children: [
						person.species,
						" · ",
						person.continent
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-paper",
					children: person.personality
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-mute",
					children: person.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-6 border-l border-line-strong pl-4 text-anima",
					children: person.quotes
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-mute",
					children: person.symbolism
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: THREADS[person.id] }),
				s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: [
						["Age", s.age],
						["Eyes", s.eyes],
						["Hair", `${s.hair} · ${s.hairStyle}`],
						["Height / weight", `${s.height} · ${s.weight}`],
						["Skin", s.skin],
						["Body dynamics", s.dynamics],
						["Health", s.healthy],
						["Color / music", `${s.favoriteColor} · ${s.music}`],
						["Likes", s.likes],
						["Transport", s.transport],
						["Caution", s.caution],
						["Company", s.company],
						["Good habit", s.good],
						["Bad habit", s.bad],
						["Hobbies", s.hobbies]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-ink p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-nav text-mute",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-paper",
							children: v
						})]
					}, k))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-mute",
					children: person.look
				})
			] })]
		})] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		kicker: "People",
		title: "Thirty named lives",
		lead: "Every ruler, smith, seer, betrayer, and successor named in the documents. Full body sheets on the five the chronicle is built from. Open a face. If two sheets disagree, follow the thread."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
		children: PEOPLE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardLink, {
			to: `/people?id=${p.id}`,
			image: p.image,
			name: p.name,
			title: p.title,
			meta: `${p.species} · ${p.continent}`
		}, p.id))
	})] });
}
//#endregion
export { PeoplePage as component };
