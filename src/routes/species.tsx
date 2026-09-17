import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { BackLink, Figure, PageTitle, ThreadChips } from "@/components/site/ui";
import { THREADS } from "@/data/continuity";
import { SPECIES, SPECIES_GROUPS } from "@/data/species";
import { withBase } from "@/lib/base";

type Search = { id?: string };

export const Route = createFileRoute("/species")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    id: typeof raw.id === "string" ? raw.id : undefined,
  }),
  component: SpeciesPage,
});

function SpeciesPage() {
  const { id } = Route.useSearch();
  const sp = SPECIES.find((s) => s.id === id);

  if (sp) {
    return (
      <Shell>
        <BackLink to="/species">All species</BackLink>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
          {sp.image ? <Figure src={sp.image} alt={sp.name} tall caption={sp.look} /> : null}
          <div>
            <h1 className="font-display text-3xl">{sp.name}</h1>
            <p className="mt-2 text-sm uppercase tracking-nav text-chrome">{sp.habitat}</p>
            <p className="mt-5 max-w-2xl text-paper">{sp.look}</p>
            <p className="mt-3 max-w-2xl text-mute">{sp.note}</p>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-line bg-ink p-4">
                <dt className="text-xs uppercase tracking-nav text-mute">Affinity</dt>
                <dd className="mt-1 text-paper">{sp.affinity}</dd>
              </div>
              <div className="rounded-md border border-line bg-ink p-4">
                <dt className="text-xs uppercase tracking-nav text-mute">Codex figure</dt>
                <dd className="mt-1 text-paper">{sp.figure}</dd>
              </div>
              <div className="rounded-md border border-line bg-ink p-4">
                <dt className="text-xs uppercase tracking-nav text-mute">Energy / combat</dt>
                <dd className="mt-1 text-paper">{sp.kima}</dd>
              </div>
              <div className="rounded-md border border-line bg-ink p-4">
                <dt className="text-xs uppercase tracking-nav text-mute">History</dt>
                <dd className="mt-1 text-paper">{sp.history}</dd>
              </div>
            </dl>
            <ThreadChips links={THREADS[sp.id]} />
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageTitle
        kicker="Species"
        title="Twenty-five peoples"
        lead="Every sapient people in the documents, drawn with bodies in the frame. Heritage no longer decides destiny after the Fracture, but habitat, culture, and affinity still shape a life. Animals and hostile beasts are on the Bestiary tab."
      />

      <div className="space-y-10">
        {SPECIES_GROUPS.map((g) => (
          <section key={g.title}>
            <h2 className="font-display text-xl">{g.title}</h2>
            <div className="mt-4">
              <Figure src={g.src} alt={g.title} caption={g.caption} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.ids.map((sid) => {
                const s = SPECIES.find((x) => x.id === sid);
                return s ? (
                  <a
                    key={sid}
                    href={withBase(`/species?id=${sid}`)}
                    className="rounded-sm border border-line px-3 py-2 text-sm text-paper no-underline hover:border-line-strong"
                  >
                    {s.name}
                  </a>
                ) : null;
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SPECIES.map((s) => (
          <a
            key={s.id}
            href={withBase(`/species?id=${s.id}`)}
            className="overflow-hidden rounded-lg border border-line bg-ink no-underline transition-colors duration-150 hover:border-line-strong"
          >
            {s.image ? (
              <img src={withBase(s.image)} alt="" className="aspect-video w-full object-cover object-top" />
            ) : null}
            <div className="p-4">
              <p className="font-display text-lg text-paper">{s.name}</p>
              <p className="mt-1 text-xs uppercase tracking-nav text-anima">{s.habitat}</p>
              <p className="mt-3 text-sm text-mute">{s.note}</p>
              <p className="mt-3 text-xs text-chrome">{s.figure}</p>
            </div>
          </a>
        ))}
      </div>
    </Shell>
  );
}
