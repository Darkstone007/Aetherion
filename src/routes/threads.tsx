import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { PageTitle, ThreadChips } from "@/components/site/ui";
import { DRIFTS, THREADS } from "@/data/continuity";

export const Route = createFileRoute("/threads")({ component: ThreadsPage });

function ThreadsPage() {
  const keys = Object.keys(THREADS);
  return (
    <Shell>
      <PageTitle
        kicker="Continuity"
        title="If it doesn’t line up, follow the thread"
        lead="The six documents drift. Two sheets for Sssilvara. Two eye-colors for Xal’thok. A nineteenth god who is a moon-name. This tab does not invent a third canon. It links the disagreement to the plates we hold. Click through."
      />

      <section>
        <h2 className="font-display text-2xl">Document drift</h2>
        <div className="mt-6 space-y-4">
          {DRIFTS.map((d) => (
            <article key={d.id} className="rounded-lg border border-line bg-ink p-5">
              <h3 className="font-display text-xl">{d.title}</h3>
              <p className="mt-3 text-sm text-mute">{d.body}</p>
              <ThreadChips links={d.links} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl">Index of threads</h2>
        <p className="mt-3 text-sm text-mute">Every named id that already has a link-map.</p>
        <div className="mt-6 columns-1 gap-4 sm:columns-2">
          {keys.map((k) => (
            <article key={k} className="mb-4 break-inside-avoid rounded-lg border border-line bg-ink p-4">
              <p className="text-sm font-medium uppercase tracking-nav text-anima">{k}</p>
              <ThreadChips links={THREADS[k]} />
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}
