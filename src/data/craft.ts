export const MATERIALS = [
  {
    id: "iron",
    name: "Iron",
    rarity: "Common",
    source: "Wildspire Plains, highland mines, Nordheim quarries.",
    use: "Base weapons and armor. Holds a novice rune for about six months.",
    look: "Matte grey stock. No glow.",
  },
  {
    id: "quartz",
    name: "Quartz",
    rarity: "Common",
    source: "Plains, river cuts, Elysara spire-foot.",
    use: "Cheap foci for beginner Anima. Fills a tiny well, then cracks.",
    look: "Clear crystal, no lattice.",
  },
  {
    id: "starstone",
    name: "Starstone",
    rarity: "Rare — forms over millennia",
    source: "Nordheim deep veins. Durak mines it for cores.",
    use: "Amulet cores, Dual Flow locks, high-grade metalwork. Durak’s favorite color is molten starstone.",
    look: "Cyan quench with magenta spark inside the grain.",
  },
  {
    id: "starmetal",
    name: "Starmetal",
    rarity: "Rare",
    source: "Caelus debris, fallen lattice fragments, master forges.",
    use: "Modern artifacts. Must be bound to the maker’s essence in a ritual.",
    look: "Chrome plate that keeps a white lattice scratch.",
  },
  {
    id: "voidglass",
    name: "Voidglass",
    rarity: "Rare — collection is the danger",
    source: "Vindraeth rifts, Void Cracks, forbidden ruins.",
    use: "Stealth lenses, shadow foci, Thorne’s seals. Overuse stains the well.",
    look: "Black glass with a cyan edge that eats nearby light.",
  },
  {
    id: "dragonbone",
    name: "Dragonbone / Drakebone",
    rarity: "Rare — taken from a living wyrm or a named kill",
    source: "Tezcal hunts, Elysara high peaks, dungeon bosses.",
    use: "Kima-forged armor. Bolsters body energy. A Lunar Gem does the opposite (Anima).",
    look: "Dense ivory plates veined with the beast’s element.",
  },
  {
    id: "phoenix",
    name: "Phoenix feathers",
    rarity: "Rare",
    source: "Tezcal volcanoes, phoenixkin ash-cycle sheds, Krystallis.",
    use: "Revival reagents, fire runes, ash-cycle potions. Can refuse to stay dead.",
    look: "Graphic flame-plumes that keep a magenta core after they cool.",
  },
  {
    id: "lunar",
    name: "Lunar Gem",
    rarity: "Rare",
    source: "Abyssara moon-portals, Tenebris/Noctumbra shrines.",
    use: "Enhances Anima. False eternal-moon gems are Betrayer traps.",
    look: "Silver-cyan cabochon. Tidal pulse.",
  },
  {
    id: "storm",
    name: "Condensed storm essence",
    rarity: "Rare — taken from the air itself",
    source: "Elysara floating isles, Abyssara storms, Thunderbird kills.",
    use: "Lightning foci, Wind+Lightning arrays, Cloudreach barter.",
    look: "Bottled cyan arc. Unstable if the seal is cheap.",
  },
  {
    id: "mana-crystal",
    name: "Mana Crystal / Aether Font",
    rarity: "Uncommon to rare",
    source: "Leyline nodes, Jadevein, dungeon hearts.",
    use: "Condensing extra mana veins. Failure can weaken the veins you already have.",
    look: "Solid Anima. Hurts to hold without Clarity.",
  },
  {
    id: "lapis",
    name: "Awakening Lapis",
    rarity: "Rare and volatile",
    source: "Divine or primordial shards. Not a mining product.",
    use: "Instant Awakening. +20–50% attributes. Overflow risk: insanity, elemental recoil. Requires calming quests after.",
    look: "A shard that writes a class onto the wrist.",
  },
  {
    id: "hides",
    name: "Hides, scales, venom, plants",
    rarity: "Varies with the hunt",
    source: "Beasts, naga scales, hydra hide, spirit-herbs, air, and the ground.",
    use: "Potions, trade, personal boosts. Rarity is time-to-form or how hard the animal is to kill.",
    look: "Whatever the biome was. Always labeled by the hunter.",
  },
] as const;

export const RUNES = [
  {
    id: "how",
    name: "What a rune is",
    duration: "6 months (novice) to 100 years (masterwork)",
    effect:
      "A glyph or word of power, etched or spoken, that puts an effect on an object or a body. Strength follows the enchanter’s skill and energy — not the metal.",
    note: "Some runes appear on their own when you level. They glow on skin or gear. You can hide them by will.",
  },
  {
    id: "trigger",
    name: "Activation",
    duration: "Instant, held, or always-on",
    effect:
      "Some fire automatically. Some need a word, a gesture, or a full magic circle. Matching a rune on the wielder with the same rune on the weapon amplifies the effect — a Flame Rune on both burns hotter.",
    note: "Zorathys, the Rune Oculus, is the god of this craft. Misaligned circles can collapse the caster’s veins.",
  },
  {
    id: "transfer",
    name: "Transfer",
    duration: "Ritual length",
    effect: "Runes can be moved between objects or people through a ritual. Fragile in transit.",
    note: "If the runed item shatters, the rune is gone. No master can recover it. That is the documented rule.",
  },
  {
    id: "vital",
    name: "Vital Runes (Kima)",
    duration: "Until the body breaks the pact",
    effect:
      "Vigor Seekers etch a Vital Rune into the body for each trial survived — fire resistance, faster healing. Overuse becomes Corrupted Kima: power traded for sanity.",
    note: "These are not jewelry. They are scars that work.",
  },
] as const;

export const ARTIFACTS = [
  {
    id: "amulet",
    name: "Heartgrim’s Dual Flow amulet",
    origin: "Durak Ironvein forged the core in Nordheim. Heartgrim bound the factions with it. Xal’thok sabotaged it in the Forge Wars.",
    effect:
      "Was meant to hold Dual Flow without a System. Now it is shards. Mending, keeping, or smashing it decides the four story endings.",
    look: "Two half-circles of cyan crystal with a magenta fracture. Always in Heartgrim’s hand as a broken ring.",
  },
  {
    id: "age",
    name: "How artifacts scale",
    origin: "Age plus the deeds of the people who used them. A warlord’s blade outranks a forgotten trinket of the same metal.",
    effect:
      "Reservoir of energy grows with use and legacy. Modern smiths can still make them: master artisan + rare material (dragonbone, starmetal) + a ritual that ties the maker’s essence to the item.",
    look: "The older the piece, the more the lattice sits in the metal instead of on it.",
  },
  {
    id: "living",
    name: "Living artifacts (Tezcal / Valthorne)",
    origin: "Rhaskor’s gem-law, Vyrathax’s relic evolution, Valthorne’s infusions.",
    effect:
      "Weapons that remember owners. Relics that can gain sentience. If you give will without an oath, the relic can rebel. That is a documented false rite, not a feature.",
    look: "Gem-fused blades, cores that pulse, hammers that answer when named.",
  },
] as const;

export const VEINS = {
  title: "Mana veins",
  body: "Veins are ethereal conduits in a Seeker’s sub-dimensional essence. They are not organs you can cut with a kitchen knife. They store and output Anima.",
  points: [
    "At Awakening, luck, class, and physique set the starting number. More veins = more Anima.",
    "Later you can condense extra veins with Aether Fonts or Mana Crystals. Costly. Failure can weaken the veins you already have.",
    "Breaking an enemy’s veins needs a large level gap or a technique such as Anima Severance.",
    "Sylvarith, the Vein Warden, is why the world still has magic after it locked itself.",
  ],
};

export const CIRCLES = {
  title: "Magic circles",
  body: "A magic circle is a structured array of runes, drawn in air or on a surface, used for high-level prepared spells. Quick spells skip them. Prepared assaults and layered defenses use them.",
  points: [
    "Larger circle = larger effect, from a spark to raising the dead.",
    "Grade follows rune quality: a simple Fire rune lights a spark; an intricate Time rune bends a moment.",
    "Stacking arrays amplify. Wind + Lightning is a tempest, not a metaphor. Water + Lightning is Electrocute and can flood a zone.",
    "Circles can be pre-drawn and stored for instant release. Mages use size to estimate cast time.",
  ],
};

export const WORLD_RANKS =
  "World ranks run G through SSS (Bronze to Diamond) plus ∞. Rank is overall power, not species. A human can pass an elf. A long-lived race can stagnate. Aether Shards fill a Resonance Well — a pulsing mark on the skin. Essence Nodes buy Vitality, Might, Aether, or Clarity.";
