import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { Figure, Kicker, PageTitle, ThreadChips } from "@/components/site/ui";
import { ARTIFACTS, CIRCLES, MATERIALS, RUNES, VEINS, WORLD_RANKS } from "@/data/craft";

export const Route = createFileRoute("/craft")({ component: CraftPage });

function CraftPage() {
  return (
    <Shell>
      <PageTitle
        kicker="Craft"
        title="Materials, runes, artifacts, veins, circles"
        lead="This is the physical side of magic. Ores, hides, glyphs, relics, and the inner plumbing of Anima. Straight from the design documents — not flavor text."
      />

      <Figure
        src="/art/materials.jpg"
        alt="Named materials on a night workbench: starstone, voidglass, phoenix feathers, drakebone, lunar gem, starmetal"
        caption="Common iron and quartz sit in the plains. Rare stock hides in dungeons, towers, void cracks, and named hunts."
      />

      <section className="mt-14">
        <Kicker>Materials</Kicker>
        <h2 className="font-display text-2xl">What you forge and brew with</h2>
        <p className="mt-3 max-w-2xl text-sm text-mute">
          Materials fuel crafting and empowerment. Rarity is either how long they take to form (starstone over
          millennia) or how hard they are to collect (scales off a living wyrm). Uses: weapons, potions, trade,
          personal boosts. A Lunar Gem raises Anima. Drakebone raises Kima armor.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m) => (
            <li key={m.id} className="rounded-lg border border-line bg-ink p-4">
              <p className="text-xs uppercase tracking-nav text-anima">{m.rarity}</p>
              <h3 className="mt-2 font-display text-xl text-paper">{m.name}</h3>
              <p className="mt-2 text-sm text-paper">{m.use}</p>
              <p className="mt-2 text-sm text-mute">{m.source}</p>
              <p className="mt-2 text-xs text-chrome">{m.look}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Kicker>Runes</Kicker>
        <h2 className="font-display text-2xl">Glyphs with a lifespan</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Figure
            src="/art/runes.jpg"
            alt="Rune altar — cyan hexagonal glyphs being inscribed, magenta ignition"
            caption="Zorathys, Rune Oculus, is the god of this craft. Matching runes on body and weapon amplify."
          />
          <div className="space-y-3">
            {RUNES.map((r) => (
              <article key={r.id} className="rounded-lg border border-line bg-ink p-4">
                <h3 className="font-display text-lg">{r.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-nav text-kima">{r.duration}</p>
                <p className="mt-2 text-sm text-paper">{r.effect}</p>
                <p className="mt-2 text-sm text-mute">{r.note}</p>
              </article>
            ))}
          </div>
        </div>
        <ThreadChips
          links={[
            { id: "zorathys", tab: "Gods", why: "Rune Oculus" },
            { id: "durak", tab: "People", why: "Engraves them for a living" },
          ]}
        />
      </section>

      <section className="mt-14">
        <Kicker>Artifacts</Kicker>
        <h2 className="font-display text-2xl">Age plus deeds</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Figure
            src="/art/artifacts.jpg"
            alt="Broken Dual Flow amulet, rune hammer, gem-blade, living staff on a night anvil"
            caption="Heartgrim’s amulet is the plot object. Durak forged the core. Xal’thok sabotaged it."
          />
          <div className="space-y-3">
            {ARTIFACTS.map((a) => (
              <article key={a.id} className="rounded-lg border border-line bg-ink p-4">
                <h3 className="font-display text-lg">{a.name}</h3>
                <p className="mt-2 text-sm text-paper">{a.effect}</p>
                <p className="mt-2 text-sm text-mute">{a.origin}</p>
                <p className="mt-2 text-xs text-chrome">{a.look}</p>
              </article>
            ))}
          </div>
        </div>
        <ThreadChips
          links={[
            { id: "heartgrim", tab: "People", why: "Carries the broken circle" },
            { id: "durak", tab: "People", why: "Forged the core" },
            { id: "xalthok", tab: "People", why: "Sabotaged it" },
            { id: "valthorne", tab: "Gods", why: "Forge law" },
          ]}
        />
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <article>
          <Kicker>Mana veins</Kicker>
          <h2 className="font-display text-2xl">{VEINS.title}</h2>
          <Figure src="/art/veins.jpg" alt="Seeker torso with cyan Anima veins and magenta Kima nodes" tall />
          <p className="mt-4 text-sm text-paper">{VEINS.body}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mute">
            {VEINS.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <ThreadChips links={[{ id: "sylvarith", tab: "Gods", why: "Vein Warden" }]} />
        </article>
        <article>
          <Kicker>Magic circles</Kicker>
          <h2 className="font-display text-2xl">{CIRCLES.title}</h2>
          <Figure
            src="/art/circles.jpg"
            alt="Stacked Fire, Wind+Lightning, and Time magic circles over a night plaza"
          />
          <p className="mt-4 text-sm text-paper">{CIRCLES.body}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mute">
            {CIRCLES.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-14 rounded-lg border border-line bg-ink p-6">
        <Kicker>Ranks</Kicker>
        <p className="text-sm text-mute">{WORLD_RANKS}</p>
      </section>
    </Shell>
  );
}
