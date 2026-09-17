import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { Kicker, PageTitle } from "@/components/site/ui";
import { ALL_ELEMENTS, CLASSES, ENERGIES, LEVELS } from "@/data/world";

export const Route = createFileRoute("/systems")({ component: SystemsPage });

function SystemsPage() {
  return (
    <Shell>
      <PageTitle
        kicker="Systems"
        title="Kima, Anima, Dual Flow, classes, elements, titles"
        lead="This is the rulebook from the design documents. Kima is body energy. Anima is soul energy. Dual Flow is both, and the System restricts it hardest. Materials, runes, artifacts, veins, and circles have their own Craft tab with plates."
      />

      <section>
        <Kicker>Core energies</Kicker>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ENERGIES.map((e) => (
            <article key={e.name} className="rounded-lg border border-line bg-ink p-5">
              <p className="text-xs uppercase tracking-nav text-anima">{e.className}</p>
              <h2 className="mt-2 font-display text-xl">{e.name}</h2>
              <p className="mt-3 text-sm text-mute">{e.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Kicker>Primary classes</Kicker>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Object.entries(CLASSES).map(([id, c]) => (
            <article key={id} className="rounded-lg border border-line bg-ink p-5">
              <h2 className="font-display text-xl">{c.name}</h2>
              <p className="mt-2 text-sm text-anima">{c.energy}</p>
              <p className="mt-3 text-paper">{c.line}</p>
              <p className="mt-3 text-sm text-mute">{c.bonus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Kicker>Twenty-one elements</Kicker>
        <p className="mt-3 max-w-2xl text-sm text-mute">
          Fundamental: Earth, Water, Fire, Wind, Metal. Natural: Gravity, Lightning, Sound, Nature, Ice, Moon.
          Spiritual: Light, Shadow, Time, Force. Forbidden: Psychokinesis, Dark Arts, Necromancy, Demonic.
          Pathways: Summoning, Beast Magic. Combos have cost — Water + Lightning is Electrocute and can flood a
          zone. Master rank (76) unlocks a second element.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_ELEMENTS.map((el) => (
            <li key={el.name} className="rounded-md border border-line bg-ink px-4 py-3">
              <p className="font-medium text-paper">{el.name}</p>
              <p className="mt-1 text-sm text-mute">{el.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Kicker>Titles</Kicker>
        <h2 className="font-display text-2xl">Beginner 1 to God 2001+</h2>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2">
          {LEVELS.map((lv) => (
            <li key={lv} className="rounded-md border border-line bg-ink px-4 py-3 text-sm text-paper">
              {lv}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 rounded-lg border border-line bg-ink p-6">
        <Kicker>Craft lives next door</Kicker>
        <h2 className="font-display text-xl">Materials, runes, artifacts, veins, circles</h2>
        <p className="mt-4 text-sm text-mute">
          Aether Shards fill a Resonance Well (a pulsing mark). Essence Nodes buy Vitality, Might, Aether, or
          Clarity. World ranks run G through SSS plus ∞, based on overall power, not species. The plates and the
          full material list are on Craft.
        </p>
        <Link to="/craft" className="mt-4 inline-block text-sm text-anima no-underline">
          Open Craft →
        </Link>
      </section>
    </Shell>
  );
}
