import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { BackLink, Figure, PageTitle, ThreadChips, WideCard } from "@/components/site/ui";
import { THREADS } from "@/data/continuity";
import { GODS } from "@/data/gods";
import { PEOPLE } from "@/data/people";
import { SPECIES } from "@/data/species";
import { CONTINENTS } from "@/data/world";
import { withBase } from "@/lib/base";

type Search = { id?: string };

export const Route = createFileRoute("/world")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    id: typeof raw.id === "string" ? raw.id : undefined,
  }),
  component: WorldPage,
});

function WorldPage() {
  const { id } = Route.useSearch();
  const land = CONTINENTS.find((c) => c.id === id);

  if (land) {
    const inhab = land.inhabitants
      .map((sid) => SPECIES.find((s) => s.id === sid))
      .filter(Boolean);
    const named = PEOPLE.filter((p) => p.continent === land.id);

    return (
      <Shell>
        <BackLink to="/world">All continents</BackLink>
        <h1 className="mt-6 font-display text-3xl">{land.name}</h1>
        <p className="mt-2 text-mute">{land.theme}</p>
        <div className="mt-8">
          <Figure src={land.image} alt={`${land.name} with its inhabitants`} caption={land.light} />
        </div>
        <section className="mt-10">
          <h2 className="font-display text-xl">Cities and places, other angles</h2>
          <p className="mt-2 text-sm text-mute">
            Same land, different standing-places. Inhabitants stay in the frame.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {land.views.map((v) => (
              <Figure key={v.src} src={v.src} alt={v.place} caption={`${v.place}. ${v.caption}`} />
            ))}
          </div>
        </section>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-line bg-ink p-5">
            <h2 className="font-display text-xl">Terrain</h2>
            <p className="mt-3 text-sm text-mute">{land.terrain}</p>
          </article>
          <article className="rounded-lg border border-line bg-ink p-5">
            <h2 className="font-display text-xl">Culture</h2>
            <p className="mt-3 text-sm text-mute">{land.culture}</p>
          </article>
          <article className="rounded-lg border border-line bg-ink p-5">
            <h2 className="font-display text-xl">Cities & rulers</h2>
            <p className="mt-3 text-sm text-paper">{land.rulers}</p>
            <p className="mt-2 text-sm text-mute">{land.cities}</p>
          </article>
          <article className="rounded-lg border border-line bg-ink p-5">
            <h2 className="font-display text-xl">Magic & beasts</h2>
            <p className="mt-3 text-sm text-paper">{land.magics}</p>
            <p className="mt-2 text-sm text-mute">{land.beasts}</p>
          </article>
        </div>
        <section className="mt-10">
          <h2 className="font-display text-xl">Inhabitants</h2>
          <p className="mt-2 text-sm text-mute">A continent plate is unfinished if these bodies are missing.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {inhab.map((s) =>
              s ? (
                <a
                  key={s.id}
                  href={withBase(`/species?id=${s.id}`)}
                  className="rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong"
                >
                  {s.name}
                </a>
              ) : null,
            )}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-xl">Gods worshiped</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {land.gods.map((gid) => {
              const g = GODS.find((x) => x.id === gid);
              const label = g?.name ?? (gid === "tenebris" ? "Tenebris (moon-name)" : gid);
              return (
                <a
                  key={gid}
                  href={withBase(`/gods?id=${gid}`)}
                  className="rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-xl">Named lives here</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {named.map((p) => (
              <a
                key={p.id}
                href={withBase(`/people?id=${p.id}`)}
                className="rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong"
              >
                {p.name}
              </a>
            ))}
          </div>
        </section>
        <article className="mt-10 rounded-lg border border-line bg-ink p-5">
          <h2 className="font-display text-xl">Good / bad</h2>
          <p className="mt-3 text-sm text-paper">{land.good}</p>
          <p className="mt-2 text-sm text-mute">{land.bad}</p>
          <p className="mt-4 text-sm text-chrome">{land.storyTie}</p>
        </article>
        <ThreadChips links={THREADS[land.id]} />
      </Shell>
    );
  }

  return (
    <Shell>
      <PageTitle
        kicker="World"
        title="Seven continents, inhabited"
        lead="Each land is drawn with its peoples in the frame — humans and centaurs on Elysara’s bridges, naga on Xihuang’s temple steps, dwarves at Nordheim’s anvil. Open a continent for cities from other angles, rulers, beasts, gods, and the story-tie."
      />
      <Figure src="/art/world.jpg" alt="Aetherion world key" caption="Fracture Hour. The lattice is the sky." />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {CONTINENTS.map((c) => (
          <WideCard
            key={c.id}
            to={`/world?id=${c.id}`}
            image={c.image}
            name={c.name}
            theme={c.theme}
          />
        ))}
      </div>
    </Shell>
  );
}
