import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shell, n as Figure, r as Kicker } from "./ui-BdcoiLV4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0mtPfBc.js
var import_jsx_runtime = require_jsx_runtime();
var STYLE_NAME = "Circuit Ink";
var PALETTE = [
	{
		name: "Void",
		hex: "#05060A",
		token: "bg-void",
		use: "Background. Night. Everything sits on this."
	},
	{
		name: "Paper",
		hex: "#E8EEF6",
		token: "bg-paper",
		use: "Body text and chrome edges."
	},
	{
		name: "Anima",
		hex: "#00E8D5",
		token: "bg-anima",
		use: "Soul energy. Lattice. Rim light. The main color."
	},
	{
		name: "Kima",
		hex: "#FF2E78",
		token: "bg-kima",
		use: "Body energy. Wounds, forge-sparks, rifts. Accent only."
	},
	{
		name: "Mute",
		hex: "#8A93A6",
		token: "bg-mute",
		use: "Secondary labels. Never a full page."
	}
];
var RULES = [
	{
		title: "Animation method, not a painting",
		body: "Every plate is a paused frame of 2D/3D hybrid animation. Arcane (Fortiche) supplies the method: graphic shapes, hard ink line, 2D/3D hybrid, close-ups that carry a decision. Cyberpunk Edgerunners (Studio Trigger) supplies the night: cel-shade, wet chrome, high contrast. No oil-paint texture. No canvas grain. No photoreal pores. No Arcane gold/amber palette."
	},
	{
		title: "Cyan = Anima. Magenta = Kima.",
		body: "After the Fracture the world is lit like a night city. Anima (soul) reads electric cyan — visors, mana veins, the System lattice. Kima (body) reads hot magenta — blood, forge spark, rift wound. They rim and cut. They do not mix into purple fill."
	},
	{
		title: "Faces and posture first",
		body: "A character plate is a person, not a costume dump. Heartgrim hunches. Xal’thok smiles. Sssilvara’s coil is architecture. If the silhouette would not stencil, the plate is wrong."
	},
	{
		title: "Continents must show inhabitants",
		body: "A land plate is unfinished if it is empty scenery. Elysara holds humans, centaurs, birdmen. Xihuang holds naga, ki-sages, merfolk. Nordheim holds dwarves at the anvil. Species, animals, and beasts have their own tabs so those bodies are not implied — they are drawn."
	},
	{
		title: "The HUD is in the world",
		body: "The System writes cracked hexes, visor ticks, and lattice fragments on the air. That is diegetic. It is the cage the story is about, not a UI skin."
	}
];
var LOOK = {
	line: "Aetherion is a locked world. This site is its visual identity: how the people, gods, species, animals, materials, and continents look, plus a straight account of the story and how a story-mode version of the game would play.",
	craft: "House style is Circuit Ink. Take Arcane’s artistic method — 2D/3D hybrid animation, bold graphic shapes, ink line — and drop the oil-paint gold. Put it in Edgerunners’ night: cel-shade, chrome rain, cyan rim, magenta wound. That is how every plate here is drawn."
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden rounded-xl border border-line bg-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/art/world.jpg",
				alt: "Aetherion at Fracture Hour — seven continents under a cracked lattice sky, with inhabitants on the land"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-8 sm:px-8 sm:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: ["Visual identity · ", STYLE_NAME] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-3xl text-paper",
						children: LOOK.line
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base text-mute",
						children: LOOK.craft
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/story",
								className: "rounded-md bg-paper px-4 py-3 text-sm font-medium text-void no-underline",
								children: "Story and how it would play"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/species",
								className: "rounded-md border border-line px-4 py-3 text-sm font-medium text-paper no-underline",
								children: "Species"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bestiary",
								className: "rounded-md border border-line px-4 py-3 text-sm font-medium text-paper no-underline",
								children: "Creatures and animals"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/craft",
								className: "rounded-md border border-line px-4 py-3 text-sm font-medium text-paper no-underline",
								children: "Materials and runes"
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Palette" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Five colors. No oil gold."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-mute",
					children: "Arcane’s method, not Arcane’s color scheme. Edgerunners’ night: cel-shade, cyan rim, magenta wound."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-5",
					children: PALETTE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "overflow-hidden rounded-md border border-line bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-16 ${c.token}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-paper",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-xs text-mute",
									children: c.hex
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-chrome",
									children: c.use
								})
							]
						})]
					}, c.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "How the art is made" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Rules for every plate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-line bg-ink p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-paper",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-mute",
							children: r.body
						})]
					}, r.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "What is in the site" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Open a tab. Follow a thread if two documents disagree."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						[
							"/story",
							"Story",
							"Premise, timeline, seven acts, four endings, how story-mode would play."
						],
						[
							"/people",
							"People",
							"Named lives with sheets: Azrael, Heartgrim, Sssilvara, Xal’thok, Durak, rulers."
						],
						[
							"/gods",
							"Gods",
							"All 18 seats. Tenebris is Noctumbra’s moon-name, not a 19th god."
						],
						[
							"/species",
							"Species",
							"All 25 peoples, drawn in groups and as individuals."
						],
						[
							"/bestiary",
							"Bestiary",
							"Creatures 1–50 plus animals and the procedural thousand."
						],
						[
							"/world",
							"World",
							"Seven continents with inhabitants, cities, beasts, gods, rulers."
						],
						[
							"/craft",
							"Craft",
							"Materials, runes, artifacts, mana veins, magic circles."
						],
						[
							"/systems",
							"Systems",
							"Kima, Anima, Dual Flow, classes, 21 elements, titles."
						],
						[
							"/threads",
							"Threads",
							"Document drift. Click through when two sheets disagree."
						]
					].map(([to, name, blurb]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: to,
						className: "rounded-lg border border-line bg-ink p-5 no-underline transition-colors duration-150 hover:border-line-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-paper",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: blurb
						})]
					}, to))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Key plates" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Faces the chronicle is built from"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
					children: [
						["/art/azrael.jpg", "Azrael Raven"],
						["/art/heartgrim.jpg", "Lord Heartgrim"],
						["/art/sssilvara.jpg", "Sssilvara"],
						["/art/xalthok.jpg", "Xal’thok"],
						["/art/durak.jpg", "Durak Ironvein"],
						["/art/aeltharion.jpg", "Aeltharion"]
					].map(([src, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-lg bg-raised",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: name,
							className: "aspect-[2/3] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-3 py-2 text-xs uppercase tracking-nav text-mute",
							children: name
						})]
					}, src))
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
