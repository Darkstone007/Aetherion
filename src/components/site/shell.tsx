import { Link, useRouterState } from "@tanstack/react-router";
import { NAV } from "@/lib/nav";

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-void text-paper">
      <header className="sticky top-0 z-40 border-b border-line bg-void/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link to="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-display text-lg tracking-tight text-paper">Echoes of Aetherion</span>
            <span className="hidden text-xs uppercase tracking-nav text-anima sm:inline">Circuit Ink</span>
          </Link>
          <nav
            aria-label="Codex"
            className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 sm:pb-0"
          >
            {NAV.map((item) => {
              const on =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium uppercase tracking-nav no-underline transition-colors duration-150 ${
                    on
                      ? "bg-raised text-anima"
                      : "text-mute hover:bg-raised hover:text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>
    </div>
  );
}
