import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { BackLink, Figure, PageTitle } from "@/components/site/ui";
import { BESTIARY_PLATES, CREATURES, PROCEDURAL } from "@/data/bestiary";
import { withBase } from "@/lib/base";

type Search = { id?: string };

export const Route = createFileRoute("/bestiary")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    id: typeof raw.id === "string" ? raw.id : undefined,
  }),
  component: BestiaryPage,
});

function BestiaryPage() {
  const { id } = Route.useSearch();
  const cr = CREATURES.find((c) => c.id === id);

  if (cr) {
    return (
      <Shell>
        <BackLink to="/bestiary">All creatures</BackLink>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Figure src={cr.image} alt={cr.name} caption={cr.look} />
          <div>
            <p className="text-xs uppercase tracking-nav text-kima">
              #{cr.n} · {cr.type} · {cr.element}
            </p>
            <h1 className="mt-2 font-display text-3xl">{cr.name}</h1>
            <p className="mt-2 text-sm uppercase tracking-nav text-chrome">{cr.habitat}</p>
            <p className="mt-5 text-paper">{cr.habit}</p>
            <p className="mt-4 text-sm text-mute">Typical levels {cr.levels}.</p>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <PageTitle
        kicker="Bestiary"
        title="Fifty named creatures, plus the animals"
        lead="The character bible gives full sheets for creatures 1–50. The rest (~1,000) are generated: base animal or monster × one of 21 elements × a type block. These plates show the named fifty in groups, and the wildlife line (frost-bear, shadow panther, fire boar, lightning wyvern, soul-beast stag)."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {BESTIARY_PLATES.map((p) => (
          <Figure key={p.id} src={p.src} alt={p.title} caption={`${p.title}. ${p.caption}`} />
        ))}
      </div>

      <section className="mt-14 rounded-lg border border-line bg-ink p-5">
        <h2 className="font-display text-xl">{PROCEDURAL.title}</h2>
        <p className="mt-3 text-sm text-mute">{PROCEDURAL.body}</p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl">The fifty</h2>
        <p className="mt-2 text-sm text-mute">
          Open any row for the sheet. Types mix beast, construct, undead, avian, aquatic, plant, fey, giant,
          dragonkin, demon, humanoid. Elements follow the 21-branch list on Systems.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-nav text-mute">
                <th className="py-2 pr-3">#</th>
                <th className="py-2 pr-3">Name</th>
                <th className="py-2 pr-3">Type</th>
                <th className="py-2 pr-3">Element</th>
                <th className="py-2">Habitat</th>
              </tr>
            </thead>
            <tbody>
              {CREATURES.map((c) => (
                <tr key={c.id} className="border-b border-line/60">
                  <td className="py-3 pr-3 text-mute">{c.n}</td>
                  <td className="py-3 pr-3">
                    <a href={withBase(`/bestiary?id=${c.id}`)} className="text-paper no-underline hover:text-anima">
                      {c.name}
                    </a>
                  </td>
                  <td className="py-3 pr-3 text-mute">{c.type}</td>
                  <td className="py-3 pr-3 text-anima">{c.element}</td>
                  <td className="py-3 text-chrome">{c.habitat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Shell>
  );
}
