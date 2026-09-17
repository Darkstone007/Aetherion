import type { CodexTab } from "@/data/types";

export const NAV = [
  { to: "/", label: "Identity" },
  { to: "/story", label: "Story" },
  { to: "/people", label: "People" },
  { to: "/gods", label: "Gods" },
  { to: "/species", label: "Species" },
  { to: "/bestiary", label: "Bestiary" },
  { to: "/world", label: "World" },
  { to: "/craft", label: "Craft" },
  { to: "/systems", label: "Systems" },
  { to: "/threads", label: "Threads" },
] as const;

export function threadHref(tab: CodexTab, id: string) {
  const map: Record<CodexTab, string> = {
    Gods: "/gods",
    People: "/people",
    Species: "/species",
    World: "/world",
    System: "/systems",
    History: "/story",
    Bestiary: "/bestiary",
    Craft: "/craft",
  };
  if (tab === "System" || tab === "History") return map[tab];
  if (tab === "Craft") return id ? `${map[tab]}?id=${encodeURIComponent(id)}` : map[tab];
  return `${map[tab]}?id=${encodeURIComponent(id)}`;
}
