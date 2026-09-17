export const PREMISE = {
  title: "Echoes of Aetherion",
  logline:
    "A god was murdered. The world stopped trusting oaths and installed a System of levels and classes. A village Seeker named Azrael Raven inherits a broken Dual Flow amulet and has to decide: mend the lattice, become a kinder cage, walk the road without a throne, or smash the lock.",
  reader:
    "This site is not the Eden MMORPG. It is the visual identity and the story bible. Below is how a story-mode version would play if someone sat down to run the chronicle: Awakening, seven continental acts, two meters (Oath vs Control), three set-piece fights, four endings. Every named person and god from the documents is in the other tabs.",
};

export const THEMES = [
  {
    name: "Oath vs Control",
    body: "Before the Fracture, power ran on belief, pact, and Dual Flow. After Aeltharion’s murder, the System replaced that with levels, classes, and prompts. The question is not ‘is power good.’ It is which kind of strength is worth the cage.",
  },
  {
    name: "Succession, not replacement",
    body: "Azrael inherits Heartgrim’s duty, not Heartgrim’s love. Sssilvara is Heartgrim’s slain beloved. The canon used here refuses a second romance that steals the first. Ryx Ronin is the Seeker after Azrael — a future the present can still ruin.",
  },
  {
    name: "The Betrayer is two faces",
    body: "Xal’thok is the mortal hand — invited advisor, lava-cracked smile. Zorathax is the divine whisper — Chaos Weaver, suspected half of the murder. Demons as a species are not automatically the Betrayer. That is a choice. See Threads if two sheets disagree.",
  },
];

export const ACTS = [
  {
    id: "act0",
    act: "0",
    title: "Awakening",
    continent: "elysara",
    image: "/art/azrael.jpg",
    play: "You are not dropped into a tutorial island. You submit a history — deceived trader, wandering academic, grief that still has a name. The System writes a class (Vigor / Arcanus / Aequalis), an elemental predisposition, and a Resonance Well on the wrist. Overflow is possible. Sanity is a resource.",
    story:
      "Azrael Raven wakes on cold stone in the City of Echoes. A shard on a cord. A visor he did not ask for. The sky is a cracked white lattice at Fracture Hour.",
    unlock: ["azrael", "humans", "elysara", "auralyth"],
  },
  {
    id: "act1",
    act: "I",
    title: "The Locked Sky",
    continent: "elysara",
    image: "/art/elysara.jpg",
    play: "Free-roam the spire-city and Azure Fields. First rift-beast is a Wind Serpent — not evil, a regulation. Oath and Control meters appear as quiet ticks, not a morality sermon. Meeting Heartgrim raises Oath. Walking past him for the prompt raises Control.",
    story:
      "Heartgrim, hunched immortal, names the shard. Empress Aeyra Valonyr licenses the leaving. Centaurs watch from the ridge and do not come down. Birdmen hold Cloudreach. The first pact is a table, or a form.",
    unlock: ["heartgrim", "aeyra", "aeltharion", "centaurs", "birdmen"],
  },
  {
    id: "act2",
    act: "II",
    title: "The Shed Pact",
    continent: "xihuang",
    image: "/art/xihuang.jpg",
    play: "Ki-dojo trials under Kaisetsu. Vein-dungeons in Jadevein. A vision of Sssilvara that is not permission to replace Heartgrim. Naga hypnosis as a mechanic that costs trust if overused.",
    story:
      "Xihuang still holds the Forge Wars in its mist: dwarves and naga over mana veins, Xal’thok’s sabotage, a princess slain keeping a pact already cut. Seeress Nylae’s loom snags Azrael. The city is neon-bamboo and jade — cyber-mystic, not a second Tokyo.",
    unlock: ["sssilvara", "kaisetsu", "nylae", "naga", "sylvarith"],
  },
  {
    id: "act3",
    act: "III",
    title: "The Honest Anvil",
    continent: "nordheim",
    image: "/art/nordheim.jpg",
    play: "Forge a blade with Durak that remembers the first amulet. Pack-trial with Rengar that must be conquered without slaughtering the idea of pack. Stealth courts of Nyxara. Relic-sentience can rebel.",
    story:
      "Ironcrag still burns. Durak measured twice and the world still broke. Valthorne’s law is honor made material. Shadowfolk in the void-enclaves are a people, not the Betrayer’s species.",
    unlock: ["durak", "rengar", "nyxara", "valthorne", "dwarves"],
  },
  {
    id: "act4",
    act: "IV",
    title: "The Other Forge",
    continent: "tezcal",
    image: "/art/tezcal.jpg",
    play: "Gem-duels in Krystallis. Raid-rites with Grimgor. A bargain with Vexaroth Soul-Forge that is sabotage with a receipt. Zorathax cults offer affinity-swaps that feel like freedom.",
    story:
      "Rhaskor’s living artifacts outlast loyalty. Phoenixkin ash-cycle can refuse to end. This is where the smile learns a second mouth: Vexaroth as craft-echo of Xal’thok, Zorathax as theology.",
    unlock: ["rhaskor", "grimgor", "vexaroth", "zorathax", "phoenixkin", "orcs"],
  },
  {
    id: "act5",
    act: "V",
    title: "Tides",
    continent: "abyssara",
    image: "/art/abyssara.jpg",
    play: "Underwater citadels, siren-law puzzles, false moon-portals that open into voids. Mend Aquara’s tides or flood a rival coast. Illusion-markets of Farah that are, annoyingly, fair.",
    story:
      "Aquavelle’s change nurtures and drowns. Tenebris is canonically Noctumbra’s lunar face — not a nineteenth throne. False eternal-moon rites are Betrayer work using a borrowed name.",
    unlock: ["aquara", "alim", "farah", "aquavelle", "merfolk"],
  },
  {
    id: "act6",
    act: "VI",
    title: "The Bottom",
    continent: "vindraeth",
    image: "/art/vindraeth.jpg",
    play: "No city. Survival taboos. Thorne guides the crawl. Wraithlyn binds what leaks. High Control Seekers are offered undead ‘eternal life.’ High Oath Seekers are offered a seal that costs isolation.",
    story:
      "Sealed after the Cataclysm’s Void Tears. The land that should not bloom. This is where Azrael learns the Fracture was not a weather event. It was a murder, and the world became a warden rather than trust again.",
    unlock: ["thorne", "wraithlyn", "noctumbra", "shadowfolk", "ghosts"],
  },
  {
    id: "act7",
    act: "VII",
    title: "The Hour",
    continent: "caelus",
    image: "/art/caelus.jpg",
    play: "Time-loop ruins. Silas shows choices that already echo. Zeth’kai’s invasive courtesy. Zayden’s reactors that look like tech and are still Anima. The empty throne of Aeltharion. Four doors.",
    story:
      "Ryx Ronin’s name waits in a loop Azrael does not own yet. His sister Mira died at fourteen in a future that can still be prevented or caused — the Codex refuses to illustrate her. Consequence with a face you do not own yet.",
    unlock: ["silas", "zethkai", "zayden", "ryx", "chronovael"],
  },
];

export const GAMEPLAY = {
  loop: "A story-mode build of Eden would not be the eternal MMORPG. It would be a chronicle you can finish: Awakening → seven continental acts → shard-hunts → three set-piece combats → four endings. Free-roam inside each act. Skills can be manual or automatic. EXP comes from combat, craft, journaling, and surviving the hour.",
  meters:
    "Two meters, never a good/evil sermon. Oath goes up when you keep pacts, sit at tables, and refuse a prompt that is a cage. Control goes up when you use the System as written, cap what would have grown, and accept the lock because the old world murdered a god. Endings read the higher meter, then the other, then whether the amulet was mended, kept, or smashed.",
  combat:
    "Kima strikes (body). Anima weaves (soul). Dual Pulse when both wells are full — the thing the System most hates. Enemies usually resist one well. Act I’s Wind Serpent Construct is a regulator, not a villain. Vexaroth is a bargain. The last fight is whether you become the new lock.",
  social:
    "Guilds act as sovereignties. Aeyra’s chivalric law. Kaisetsu’s dojo honor. Durak’s forge-trials. Nyxara’s veils. NPCs remember whether you treated a species as a people or a loot table. Retired player choices become later-act NPCs — the GDD’s dynasty rule, scaled to a chronicle.",
};

export const AWAKENING_PATHS = [
  {
    name: "Awakening Lapis",
    body: "Bond a crystalline shard of primordial essence. Instant +20–50% attributes. Overflow risk: insanity, elemental recoil. Fast isekai. Requires calming quests.",
  },
  {
    name: "Forged Will",
    body: "Training until the mortal limit breaks. Slow, stable, zero overflow. Reveals myth-bound advantages. Durak’s path. Kaisetsu’s path.",
  },
  {
    name: "Fateful Crucible",
    body: "Grief, rage, or epiphany ignites latent power. Unpredictable. Often births rare traits. Heartgrim’s hour. Azrael’s waking. 50% chance of a scar that never leaves the sheet.",
  },
];

export const ENDINGS = [
  {
    id: "mend",
    name: "Mend the lattice",
    need: "Oath high. Amulet shards united without a new tyrant.",
    body: "Dual Flow returns as a door, not a weapon. The System thins. Guilds must remember how to keep a table without a prompt. Heartgrim can stop walking. Azrael does not take a throne he did not earn as a king — he keeps the city from needing one.",
  },
  {
    id: "lock",
    name: "The kinder cage",
    need: "Control high. Amulet used as a new lock.",
    body: "Azrael becomes the lock. Levels stay. Overflow dies. The world is safer and smaller. Aeyra approves. Heartgrim does not. Ryx, in a later century, will crawl a cage that still has a door-shaped scar.",
  },
  {
    id: "walk",
    name: "The Grimpling’s road",
    need: "Meters near even. Shards carried, not crowned.",
    body: "No mending, no new System. Azrael walks as Heartgrim walked: immortal duty, no crown, a broken circle in the palm. The lattice stays cracked. People live anyway.",
  },
  {
    id: "shatter",
    name: "Break the lock",
    need: "Either meter extreme, plus smashing the amulet in Caelus.",
    body: "Oaths return. So does the old murder-math. Power grows without permission. So does betrayal. Zorathax laughs like a theology. The Codex calls this ending honest, not kind.",
  },
];
