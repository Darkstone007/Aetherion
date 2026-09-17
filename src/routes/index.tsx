import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { Figure, Kicker } from "@/components/site/ui";
import { LOOK, PALETTE, RULES, STYLE_NAME } from "@/data/identity";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <section className="overflow-hidden rounded-xl border border-line bg-ink">
        <Figure
          src="/art/world.jpg"
          alt="Aetherion at Fracture Hour — seven continents under a cracked lattice sky, with inhabitants on the land"
        />
        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <Kicker>Visual identity · {STYLE_NAME}</Kicker>
          <h1 className="max-w-3xl font-display text-3xl text-paper">{LOOK.line}</h1>
          <p className="mt-5 max-w-2xl text-base text-mute">{LOOK.craft}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/story"
              className="rounded-md bg-paper px-4 py-3 text-sm font-medium text-void no-underline"
            >
              Story and how it would play
            </Link>
            <Link
              to="/species"
              className="rounded-md border border-line px-4 py-3 text-sm font-medium text-paper no-underline"
            >
              Species
            </Link>
            <Link
              to="/bestiary"
              className="rounded-md border border-line px-4 py-3 text-sm font-medium text-paper no-underline"
            >
              Creatures and animals
            </Link>
            <Link
              to="/craft"
              className="rounded-md border border-line px-4 py-3 text-sm font-medium text-paper no-underline"
            >
              Materials and runes
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <Kicker>Palette</Kicker>
        <h2 className="font-display text-2xl">Five colors. No oil gold.</h2>
        <p className="mt-3 max-w-2xl text-mute">
          Arcane’s method, not Arcane’s color scheme. Edgerunners’ night: cel-shade, cyan rim, magenta wound.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-5">
          {PALETTE.map((c) => (
            <li key={c.name} className="overflow-hidden rounded-md border border-line bg-ink">
              <div className={`h-16 ${c.token}`} />
              <div className="p-3">
                <p className="text-sm font-medium text-paper">{c.name}</p>
                <p className="mt-1 font-mono text-xs text-mute">{c.hex}</p>
                <p className="mt-2 text-xs text-chrome">{c.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Kicker>How the art is made</Kicker>
        <h2 className="font-display text-2xl">Rules for every plate</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {RULES.map((r) => (
            <article key={r.title} className="rounded-lg border border-line bg-ink p-5">
              <h3 className="font-display text-xl text-paper">{r.title}</h3>
              <p className="mt-3 text-sm text-mute">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Kicker>What is in the site</Kicker>
        <h2 className="font-display text-2xl">Open a tab. Follow a thread if two documents disagree.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["/story", "Story", "Premise, timeline, seven acts, four endings, how story-mode would play."],
            ["/people", "People", "Named lives with sheets: Azrael, Heartgrim, Sssilvara, Xal’thok, Durak, rulers."],
            ["/gods", "Gods", "All 18 seats. Tenebris is Noctumbra’s moon-name, not a 19th god."],
            ["/species", "Species", "All 25 peoples, drawn in groups and as individuals."],
            ["/bestiary", "Bestiary", "Creatures 1–50 plus animals and the procedural thousand."],
            ["/world", "World", "Seven continents with inhabitants, cities, beasts, gods, rulers."],
            ["/craft", "Craft", "Materials, runes, artifacts, mana veins, magic circles."],
            ["/systems", "Systems", "Kima, Anima, Dual Flow, classes, 21 elements, titles."],
            ["/threads", "Threads", "Document drift. Click through when two sheets disagree."],
          ].map(([to, name, blurb]) => (
            <a
              key={to}
              href={to}
              className="rounded-lg border border-line bg-ink p-5 no-underline transition-colors duration-150 hover:border-line-strong"
            >
              <p className="font-display text-xl text-paper">{name}</p>
              <p className="mt-2 text-sm text-mute">{blurb}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Kicker>Key plates</Kicker>
        <h2 className="font-display text-2xl">Faces the chronicle is built from</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["/art/azrael.jpg", "Azrael Raven"],
            ["/art/heartgrim.jpg", "Lord Heartgrim"],
            ["/art/sssilvara.jpg", "Sssilvara"],
            ["/art/xalthok.jpg", "Xal’thok"],
            ["/art/durak.jpg", "Durak Ironvein"],
            ["/art/aeltharion.jpg", "Aeltharion"],
          ].map(([src, name]) => (
            <figure key={src} className="overflow-hidden rounded-lg bg-raised">
              <img src={src} alt={name} className="aspect-[2/3] w-full object-cover" />
              <figcaption className="px-3 py-2 text-xs uppercase tracking-nav text-mute">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Shell>
  );
}
