import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-D2-N1iZH.mjs";
import { a as Shell, i as PageTitle, n as Figure, o as ThreadChips, s as WideCard } from "./ui-BdcoiLV4.mjs";
import { n as THREADS } from "./continuity-B0mHz3ml.mjs";
import { t as GODS } from "./gods-BqGlrR0n.mjs";
import { t as PEOPLE } from "./people-DDDX1PXy.mjs";
import { t as SPECIES } from "./species-Dn7Hqj9f.mjs";
import { r as CONTINENTS } from "./world-_CKrOS7X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/world-CojPezXd.js
var import_jsx_runtime = require_jsx_runtime();
function WorldPage() {
	const { id } = Route.useSearch();
	const land = CONTINENTS.find((c) => c.id === id);
	if (land) {
		const inhab = land.inhabitants.map((sid) => SPECIES.find((s) => s.id === sid)).filter(Boolean);
		const named = PEOPLE.filter((p) => p.continent === land.id);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/world",
				className: "text-xs uppercase tracking-nav text-anima no-underline",
				children: "All continents"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-display text-3xl",
				children: land.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-mute",
				children: land.theme
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: land.image,
					alt: `${land.name} with its inhabitants`,
					caption: land.light
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-ink p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Terrain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-mute",
							children: land.terrain
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-ink p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Culture"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-mute",
							children: land.culture
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-ink p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Cities & rulers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-paper",
								children: land.rulers
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-mute",
								children: land.cities
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-ink p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: "Magic & beasts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-paper",
								children: land.magics
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-mute",
								children: land.beasts
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Inhabitants"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mute",
						children: "A continent plate is unfinished if these bodies are missing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: inhab.map((s) => s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/species?id=${s.id}`,
							className: "rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong",
							children: s.name
						}, s.id) : null)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Gods worshiped"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: land.gods.map((gid) => {
						const label = GODS.find((x) => x.id === gid)?.name ?? (gid === "tenebris" ? "Tenebris (moon-name)" : gid);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/gods?id=${gid}`,
							className: "rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong",
							children: label
						}, gid);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Named lives here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: named.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `/people?id=${p.id}`,
						className: "rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong",
						children: p.name
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-10 rounded-lg border border-line bg-ink p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Good / bad"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-paper",
						children: land.good
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mute",
						children: land.bad
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-chrome",
						children: land.storyTie
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadChips, { links: THREADS[land.id] })
		] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "World",
			title: "Seven continents, inhabited",
			lead: "Each land is drawn with its peoples in the frame — humans and centaurs on Elysara’s bridges, naga on Xihuang’s temple steps, dwarves at Nordheim’s anvil. Open a continent for rulers, beasts, gods, cities, and the story-tie. Species and creatures have their own tabs."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
			src: "/art/world.jpg",
			alt: "Aetherion world key",
			caption: "Fracture Hour. The lattice is the sky."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 md:grid-cols-2",
			children: CONTINENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WideCard, {
				to: `/world?id=${c.id}`,
				image: c.image,
				name: c.name,
				theme: c.theme
			}, c.id))
		})
	] });
}
//#endregion
export { WorldPage as component };
