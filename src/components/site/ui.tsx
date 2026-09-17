import { useState } from "react";
import type { Thread } from "@/data/types";
import { withBase } from "@/lib/base";
import { threadHref } from "@/lib/nav";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-kicker text-anima">{children}</p>
  );
}

export function PageTitle({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="mb-10 max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h1 className="font-display text-3xl text-paper">{title}</h1>
      <p className="mt-4 text-base text-mute">{lead}</p>
    </header>
  );
}

export function BackLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <a href={withBase(to)} className="text-xs uppercase tracking-nav text-anima no-underline">
      {children}
    </a>
  );
}

export function ThreadChips({ links }: { links?: Thread[] }) {
  if (!links?.length) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {links.map((t, i) => (
        <a
          key={`${t.tab}-${t.id}-${i}`}
          href={threadHref(t.tab, t.id)}
          className="rounded-sm border border-line px-3 py-2 text-xs uppercase tracking-nav text-chrome no-underline transition-colors duration-150 hover:border-line-strong hover:text-kima"
        >
          {t.tab} · {t.id}
          <span className="ml-2 normal-case tracking-normal text-mute">{t.why}</span>
        </a>
      ))}
    </div>
  );
}

export function Figure({
  src,
  alt,
  caption,
  tall,
}: {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const resolved = withBase(src);
  return (
    <>
      <figure className="overflow-hidden rounded-lg bg-raised">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full"
          aria-label={`Open ${alt}`}
        >
          <img
            src={resolved}
            alt={alt}
            className={`w-full object-cover ${tall ? "aspect-[2/3]" : "aspect-video"}`}
          />
        </button>
        {caption ? <figcaption className="px-4 py-3 text-sm text-mute">{caption}</figcaption> : null}
      </figure>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <img src={resolved} alt={alt} className="max-h-[90dvh] max-w-full object-contain" />
        </div>
      ) : null}
    </>
  );
}

export function Mark({ name }: { name: string }) {
  const ch = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  return (
    <div className="flex aspect-[2/3] items-end bg-raised p-4">
      <span className="font-display text-3xl text-anima">{ch}</span>
    </div>
  );
}

export function CardLink({
  to,
  image,
  name,
  title,
  meta,
}: {
  to: string;
  image?: string;
  name: string;
  title: string;
  meta: string;
}) {
  return (
    <a
      href={withBase(to)}
      className="group overflow-hidden rounded-lg border border-line bg-ink no-underline transition-colors duration-150 hover:border-line-strong"
    >
      {image ? (
        <img src={withBase(image)} alt="" className="aspect-[2/3] w-full object-cover" />
      ) : (
        <Mark name={name} />
      )}
      <div className="p-4">
        <p className="font-display text-lg text-paper group-hover:text-anima">{name}</p>
        <p className="mt-1 text-sm text-mute">{title}</p>
        <p className="mt-2 text-xs uppercase tracking-nav text-chrome">{meta}</p>
      </div>
    </a>
  );
}

export function WideCard({
  to,
  image,
  name,
  theme,
}: {
  to: string;
  image: string;
  name: string;
  theme: string;
}) {
  return (
    <a
      href={withBase(to)}
      className="group overflow-hidden rounded-lg border border-line bg-ink no-underline transition-colors duration-150 hover:border-line-strong"
    >
      <img src={withBase(image)} alt="" className="aspect-video w-full object-cover" />
      <div className="p-4">
        <p className="font-display text-xl text-paper group-hover:text-anima">{name}</p>
        <p className="mt-2 text-sm text-mute">{theme}</p>
      </div>
    </a>
  );
}
