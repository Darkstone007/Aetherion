import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { Figure, Kicker, PageTitle, ThreadChips } from "@/components/site/ui";
import { THREADS } from "@/data/continuity";
import { ACTS, AWAKENING_PATHS, ENDINGS, GAMEPLAY, PREMISE, THEMES } from "@/data/storyline";
import { TIMELINE } from "@/data/world";

export const Route = createFileRoute("/story")({ component: StoryPage });

function StoryPage() {
  return (
    <Shell>
      <PageTitle kicker="Story" title={PREMISE.title} lead={PREMISE.logline} />
      <p className="mb-10 max-w-3xl text-mute">{PREMISE.reader}</p>

      <div className="grid gap-4 md:grid-cols-3">
        {THEMES.map((t) => (
          <article key={t.name} className="rounded-lg border border-line bg-ink p-5">
            <h2 className="font-display text-xl">{t.name}</h2>
            <p className="mt-3 text-sm text-mute">{t.body}</p>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <Kicker>History</Kicker>
        <h2 className="font-display text-2xl">Timeline</h2>
        <ol className="mt-8 space-y-6">
          {TIMELINE.map((t) => (
            <li key={t.year} className="border-l border-line pl-5">
              <p className="text-xs uppercase tracking-nav text-anima">{t.year}</p>
              <h3 className="mt-1 font-display text-xl">{t.title}</h3>
              <p className="mt-2 text-sm text-mute">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <Kicker>Story-mode</Kicker>
        <h2 className="font-display text-2xl">How gameplay would unfold</h2>
        <p className="mt-3 max-w-3xl text-mute">{GAMEPLAY.loop}</p>
        <p className="mt-3 max-w-3xl text-mute">{GAMEPLAY.meters}</p>
        <p className="mt-3 max-w-3xl text-mute">{GAMEPLAY.combat}</p>
        <p className="mt-3 max-w-3xl text-mute">{GAMEPLAY.social}</p>
      </section>

      <section className="mt-14">
        <Kicker>Awakening</Kicker>
        <h2 className="font-display text-2xl">Three ways to become a Seeker</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {AWAKENING_PATHS.map((p) => (
            <article key={p.name} className="rounded-lg border border-line bg-ink p-5">
              <h3 className="font-display text-xl">{p.name}</h3>
              <p className="mt-3 text-sm text-mute">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 space-y-12">
        <Kicker>Acts</Kicker>
        <h2 className="font-display text-2xl">Seven continents in order</h2>
        {ACTS.map((a) => (
          <article key={a.id} className="overflow-hidden rounded-xl border border-line bg-ink">
            <div className="grid md:grid-cols-2">
              <Figure src={a.image} alt={a.title} />
              <div className="p-5 sm:p-7">
                <p className="text-xs uppercase tracking-nav text-anima">Act {a.act}</p>
                <h3 className="mt-2 font-display text-2xl">{a.title}</h3>
                <p className="mt-4 text-sm text-paper">{a.story}</p>
                <p className="mt-4 text-sm text-mute">{a.play}</p>
                <ThreadChips
                  links={a.unlock.map((id) => {
                    const t = THREADS[id]?.[0];
                    return t ?? { id, tab: "People" as const, why: "Open the entry" };
                  })}
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <Kicker>Endings</Kicker>
        <h2 className="font-display text-2xl">Four endings in Caelus</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ENDINGS.map((e) => (
            <article key={e.id} className="rounded-lg border border-line bg-ink p-5">
              <h3 className="font-display text-xl">{e.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-nav text-kima">{e.need}</p>
              <p className="mt-3 text-sm text-mute">{e.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
