import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { CardLink, Figure, PageTitle, ThreadChips } from "@/components/site/ui";
import { THREADS } from "@/data/continuity";
import { GODS, TENEBRIS_NOTE } from "@/data/gods";

type Search = { id?: string };

export const Route = createFileRoute("/gods")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    id: typeof raw.id === "string" ? raw.id : undefined,
  }),
  component: GodsPage,
});

function GodsPage() {
  const { id } = Route.useSearch();
  const god = GODS.find((g) => g.id === id);

  if (id === "tenebris") {
    return (
      <Shell>
        <a href="/gods" className="text-xs uppercase tracking-nav text-anima no-underline">
          All gods
        </a>
        <h1 className="mt-6 font-display text-3xl">Tenebris</h1>
        <p className="mt-4 max-w-2xl text-mute">{TENEBRIS_NOTE}</p>
        <ThreadChips links={THREADS.tenebris} />
      </Shell>
    );
  }

  if (god) {
    return (
      <Shell>
        <a href="/gods" className="text-xs uppercase tracking-nav text-anima no-underline">
          All gods
        </a>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
          {god.image ? (
            <Figure src={god.image} alt={god.name} tall caption={god.look} />
          ) : (
            <div className="rounded-lg border border-line bg-raised p-6 text-mute">{god.look}</div>
          )}
          <div>
            <p className="text-xs uppercase tracking-nav text-kima">{god.title}</p>
            <h1 className="mt-2 font-display text-3xl">{god.name}</h1>
            <p className="mt-2 text-sm text-chrome">{god.domains}</p>
            <p className="mt-5 text-paper">{god.worship}</p>
            <p className="mt-4 text-sm text-mute">
              <span className="text-kima">False rite. </span>
              {god.falseRite}
            </p>
            <p className="mt-4 text-sm text-mute">{god.symbolism}</p>
            <p className="mt-4 text-sm text-chrome">Seat · {god.continent}</p>
            <ThreadChips links={THREADS[god.id]} />
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageTitle
        kicker="Pantheon"
        title="Eighteen ascended seats"
        lead="Eighteen gods. Every one was a Seeker at Level 2001+. Aeltharion led. The Betrayer slew him. Worship is continental. False rites are Betrayer work using a holy name. Tenebris is Noctumbra’s moon-name, not a nineteenth seat."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {GODS.map((g) => (
          <CardLink
            key={g.id}
            to={`/gods?id=${g.id}`}
            image={g.image}
            name={g.name}
            title={g.title}
            meta={g.domains}
          />
        ))}
      </div>
    </Shell>
  );
}
