export type PaletteSwatch = {
  name: string;
  hex: string;
  role: string;
  token: string;
};

export type Character = {
  id: string;
  name: string;
  title: string;
  image: string;
  species: string;
  colors: string[];
  motif: string;
  silhouette: string;
  look: string;
  personality: string;
  quotes: string;
};

export type Continent = {
  id: string;
  name: string;
  theme: string;
  image?: string;
  crop?: string;
  palette: string[];
  light: string;
  terrain: string;
};

export type Rule = {
  do: string;
  dont: string;
};

export const PALETTE: PaletteSwatch[] = [
  {
    name: "Void Ink",
    hex: "#08090D",
    role: "Night city after the Fracture. Negative space. The world when the lights are a wound.",
    token: "void",
  },
  {
    name: "Parchment",
    hex: "#F2E8D5",
    role: "Type, bone, oil-highlight on skin. The Codex and the face.",
    token: "parchment",
  },
  {
    name: "Anima Cyan",
    hex: "#3EC8C4",
    role: "Soul as HUD. Edgerunners night-light. Never a purple wash.",
    token: "anima",
  },
  {
    name: "Kima Gold",
    hex: "#E0A84A",
    role: "Body, forge, Arcane key-sun. Industrial gold, not jewelry chrome.",
    token: "kima",
  },
  {
    name: "Lattice Chrome",
    hex: "#D6E4EE",
    role: "The System scar. Hairline HUD geometry in sky, visor, cloth.",
    token: "lattice",
  },
  {
    name: "Rift",
    hex: "#E23A62",
    role: "Betrayal only. Magenta-hot. One mark per image.",
    token: "rift",
  },
];

export const CHARACTERS: Character[] = [
  {
    id: "heartgrim",
    name: "Lord Heartgrim",
    title: "The Grimpling",
    image: "/art/heartgrim.jpg",
    species: "Human",
    colors: ["Indigo robe", "Silver hair", "Sapphire eye", "Gold scar"],
    motif: "Broken circle — the amulet shard",
    silhouette: "Tall, collapsing. A king who has learned to stoop.",
    look: "Late fifties, 6'2\" and hunched. Long silver-gray hair bound with naga-coil bronze. Pale olive skin mapped with ritual burns that glow like dying-gold cyberware. Always rain in the ponytail, always unshed tears. Scholar-warrior robes that have outlived the alliances they were cut for.",
    personality:
      "Wise and melancholic. A bridge-builder haunted by the Fracture. He does not rage; he remembers. Every portrait should feel like a man mid-invocation, holding a story that costs him.",
    quotes: "Harmony was an oath. The System is a lock.",
  },
  {
    id: "sssilvara",
    name: "Sssilvara Coil-Whisperer",
    title: "Naga Princess",
    image: "/art/sssilvara.jpg",
    species: "Naga",
    colors: ["Azure scale", "Jade bead", "Black braid", "Olive skin"],
    motif: "Interlocking rings — pacts that can shed",
    silhouette: "Human torso rising from a vertical coil. Stillness, then strike.",
    look: "Emerald slit-pupils, hypnotic rather than predatory. Lustrous black hair braided through jade. Warm olive upper body in layered silks; lower body a muscular azure coil with iridescent scale-silk. She is clothed, regal, and already a little spectral — the princess who will become a martyr.",
    personality:
      "Enigmatic loyalty. She weaves unity in whispers. Paint her as the living pact: composed, sorrowful, never a monster-girl pinup. The coil is architecture, not spectacle.",
    quotes: "Loving is the coil that binds fates.",
  },
  {
    id: "xalthok",
    name: "Xal’thok",
    title: "The Betrayer",
    image: "/art/xalthok.jpg",
    species: "Demon",
    colors: ["Ash skin", "Ember crack", "Obsidian horn", "Void wing"],
    motif: "The smile that is a wound",
    silhouette: "Hulking, winged, horned — readable as a threat at stamp size.",
    look: "Ageless mid-forties. Crimson eyes like banked coals, not lasers. Ashen skin split by thin lava-glass cracks that widen with each deception. Tattered ceremonial armor, bone in the hair, wings of smoke. Charisma first. Horror is a consequence, not the costume.",
    personality:
      "Cunning, charming, surgically treacherous. He should look like someone who could still be invited to a council. If he reads as a generic hell-beast, the betrayal has no weight.",
    quotes: "Existing is the fall from the top to the bottom’s truth.",
  },
  {
    id: "durak",
    name: "Durak Ironvein",
    title: "Starforge",
    image: "/art/durak.jpg",
    species: "Dwarf",
    colors: ["Soot", "Iron ring", "Ember beard", "Rune steel"],
    motif: "Rings you can hold — oaths made material",
    silhouette: "Short, dense, gravitational. Broader than he is tall.",
    look: "Ruggedly middle-aged at 250 years. Fiery hair fading at the temples, beard braided through iron rings. Steely eyes, ruddy spark-scarred skin, hammer-callused hands larger than fashion would allow. The forge is a halo of ember and teal steam.",
    personality:
      "Stoic honor, dry humor, stubborn as hot iron. He forged the amulet’s core. Paint density and craft, not comic relief. The world rests on people who measure twice.",
    quotes: "Fighting is forging existence from ache.",
  },
  {
    id: "azrael",
    name: "Azrael Raven",
    title: "Seeker of Echoes",
    image: "/art/azrael.jpg",
    species: "Human",
    colors: ["Raven black", "Storm grey", "Indigo coat", "Lattice thread"],
    motif: "The shard worn as a second heart",
    silhouette: "Lean vertical. A coat-cut that will later become a king’s.",
    look: "Late twenties, severe raven-black hair, storm-grey eyes behind a System visor he did not ask for — gold Kima over cyan Anima. Awakening scar at the collarbone. Dark indigo coat with lattice-thread at the cuffs. A shard on a cord. The System made visible on a human.",
    personality:
      "Determined, unsmiling, still deciding what kind of strength is worth the cost. He is the climb from village prompts to Dual Flow. Paint potential, not triumph.",
    quotes: "The System is not the final truth.",
  },
];

export const GODS = [
  {
    id: "aeltharion",
    name: "Aeltharion",
    title: "Celestial Sovereign",
    image: "/art/aeltharion.jpg",
    domain: "Balance, guilds, celestial order",
    look: "Dragon-humanoid, iridescent blue scales, comet-trail mane, golden judgment eyes. The lattice is his architecture until it becomes his wound. He is the murdered center of the pantheon — paint impartiality, not wrath.",
  },
];

export const CONTINENTS: Continent[] = [
  {
    id: "elysara",
    name: "Elysara",
    theme: "European high fantasy, chivalric and wind-scarred",
    image: "/art/elysara.jpg",
    palette: ["#7E93A6", "#C4A36A", "#E8E4D4", "#2A3340"],
    light: "Amber west sun on pale stone; teal aurora over floating isles.",
    terrain: "Alpine plateaus, azure grasslands, ethereal bridges, spire-cities.",
  },
  {
    id: "xihuang",
    name: "Xihuang",
    theme: "East-Asian mystic harmony — qi-mist, not neon sprawl",
    image: "/art/xihuang.jpg",
    palette: ["#3E6B4F", "#6B8F8A", "#A33A32", "#C9B896"],
    light: "Amber through jungle mist; teal qi-aurora; lattice in fog, never LEDs.",
    terrain: "Jadevein jungles, maple palaces, mana-veined pagodas, spiritual rivers.",
  },
  {
    id: "nordheim",
    name: "Nordheim",
    theme: "Norse forge-chivalry. Ice that remembers fire.",
    image: "/art/world.jpg",
    crop: "28% 8%",
    palette: ["#1A1D22", "#C4A36A", "#6B8F8A", "#8A8578"],
    light: "Ember windows under glacier mist. Forge-amber vs. ice-teal.",
    terrain: "Rune fjords, Ironcrag forges, volcanic snow, clan halls.",
  },
  {
    id: "tezcal",
    name: "Tezcal",
    theme: "Mesoamerican feral. Crystal savanna, obsidian law.",
    image: "/art/world.jpg",
    crop: "48% 62%",
    palette: ["#2B1810", "#C45A2A", "#3E6B4F", "#C4A36A"],
    light: "Heat-haze amber, storm-smoke teal, lattice broken over the volcano.",
    terrain: "Stepped pyramids, gem cities, rainforests, magma veins.",
  },
  {
    id: "abyssara",
    name: "Abyssara",
    theme: "Oceanic abyssal. The sea as a second sky.",
    image: "/art/world.jpg",
    crop: "55% 92%",
    palette: ["#0E1A24", "#6B8F8A", "#C9A98A", "#E8E4D4"],
    light: "Amber sun-path on water; teal bioluminescence from below.",
    terrain: "Coral citadels, floating isles, lunar oases, drowning depths.",
  },
  {
    id: "vindraeth",
    name: "Vindraeth",
    theme: "Forbidden land. Beauty that should not bloom.",
    image: "/art/world.jpg",
    crop: "88% 48%",
    palette: ["#2A221C", "#8B4A42", "#6B8F8A", "#D8D4C8"],
    light: "Sickly amber, cold teal, lattice as a wound in the sky.",
    terrain: "Blighted grass, vine-woven ruins, shattered spires, nomad fires.",
  },
  {
    id: "caelus",
    name: "Caelus Prime",
    theme: "Mytho-cosmic. The System as architecture of heaven.",
    image: "/art/world.jpg",
    crop: "70% 22%",
    palette: ["#0C0D10", "#D8D4C8", "#6B8F8A", "#C4A36A"],
    light: "Amber sun against teal nebula. The lattice is the building.",
    terrain: "Floating plateaus, astral lakes, star meadows, celestial courts.",
  },
];

export const LIGHTING = [
  {
    name: "Key — Kima (Arcane gold)",
    detail: "Warm industrial gold from the west. Body, forge, will. The dying sun of a painted city.",
  },
  {
    name: "Fill — Anima (Edgerunners cyan)",
    detail: "Electric teal from signs, visors, the cracked HUD-sky. Soul as night-light.",
  },
  {
    name: "Rim — Lattice chrome",
    detail: "Bone-white edge that can go cyan when the System is looking. Every silhouette is caught.",
  },
];

export const RULES: Rule[] = [
  {
    do: "Paint like Arcane: oil skin, emotional close-up, industrial-myth architecture.",
    dont: "Photoreal photography or a clean unbroken high-fantasy poster.",
  },
  {
    do: "Light like Edgerunners: cyan Anima HUD, gold Kima sun, rain on chrome lattice only.",
    dont: "Generic purple neon, Blade Runner pastiche, or unlit night.",
  },
  {
    do: "Show both living myth and a System scar in every frame.",
    dont: "Pure fairy-tale, or a pure sci-fi HUD with no body in it.",
  },
  {
    do: "Faces slightly elongated, eyes a fraction too luminous. Graphic cloth folds.",
    dont: "Chibi, western comic inks, or catalogue armor.",
  },
  {
    do: "Species must read from silhouette at stamp size.",
    dont: "Rely on color alone to tell Naga from Human from Dwarf.",
  },
  {
    do: "Xihuang is qi-mist and maple lanterns. Tezcal is obsidian heat. Elysara is painted spires.",
    dont: "One interchangeable night-city for every continent.",
  },
];

export const STYLE_PREFIX =
  "Cinematic hybrid of Arcane painterly oil 2D/3D and Cyberpunk Edgerunners night-anime: oil-paint skin and cloth, bold graphic shapes, slightly elongated mythic faces, too-luminous eyes. Fracture Hour lighting — warm industrial gold Kima key colliding with electric cyan Anima HUD fill, chrome-white lattice rim. The System appears as cracked holographic geometry in sky, visor, and thread — never a full sci-fi takeover. Materials of rain-slick stone, living metal, scale-silk, and weathered cloth. Melancholic, regal, street-level myth.";

export const NAV = [
  { href: "#identity", label: "Identity" },
  { href: "#doctrine", label: "Doctrine" },
  { href: "#faces", label: "Faces" },
  { href: "#world", label: "World" },
  { href: "#gods", label: "Gods" },
  { href: "#apply", label: "Apply" },
] as const;
