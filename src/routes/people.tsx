import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { BackLink, CardLink, Figure, PageTitle, ThreadChips } from "@/components/site/ui";
import { THREADS } from "@/data/continuity";
import { PEOPLE } from "@/data/people";

type Search = { id?: string };

export const Route = createFileRoute("/people")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    id: typeof raw.id === "string" ? raw.id : undefined,
  }),
  component: PeoplePage,
});

function PeoplePage() {
  const { id } = Route.useSearch();
  const person = PEOPLE.find((p) => p.id === id);

  if (person) {
    const s = person.sheet;
    return (
      <Shell>
        <BackLink to="/people">All people</BackLink>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
          {person.image ? (
            <Figure src={person.image} alt={person.name} tall caption={person.look} />
          ) : (
            <div className="rounded-lg border border-line bg-raised p-6 text-mute">
              No plate yet. Circuit Ink holds the sheet until the face is drawn.
            </div>
          )}
          <div>
            <p className="text-xs uppercase tracking-nav text-kima">{person.title}</p>
            <h1 className="mt-2 font-display text-3xl">{person.name}</h1>
            <p className="mt-2 text-sm uppercase tracking-nav text-chrome">
              {person.species} · {person.continent}
            </p>
            <p className="mt-5 text-paper">{person.personality}</p>
            <p className="mt-4 text-mute">{person.role}</p>
            <blockquote className="mt-6 border-l border-line-strong pl-4 text-anima">
              {person.quotes}
            </blockquote>
            <p className="mt-4 text-sm text-mute">{person.symbolism}</p>
            <ThreadChips links={THREADS[person.id]} />
            {s ? (
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {(
                  [
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
                    ["Hobbies", s.hobbies],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k} className="rounded-md border border-line bg-ink p-3">
                    <dt className="text-xs uppercase tracking-nav text-mute">{k}</dt>
                    <dd className="mt-1 text-sm text-paper">{v}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 text-sm text-mute">{person.look}</p>
            )}
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageTitle
        kicker="People"
        title="Thirty named lives"
        lead="Every ruler, smith, seer, betrayer, and successor named in the documents. Full body sheets on the five the chronicle is built from. Open a face. If two sheets disagree, follow the thread."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PEOPLE.map((p) => (
          <CardLink
            key={p.id}
            to={`/people?id=${p.id}`}
            image={p.image}
            name={p.name}
            title={p.title}
            meta={`${p.species} · ${p.continent}`}
          />
        ))}
      </div>
    </Shell>
  );
}
