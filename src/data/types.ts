export type CharacterSheet = {
  age: string;
  eyes: string;
  hair: string;
  hairStyle: string;
  height: string;
  weight: string;
  skin: string;
  dynamics: string;
  healthy: string;
  favoriteColor: string;
  music: string;
  likes: string;
  transport: string;
  caution: string;
  company: string;
  good: string;
  bad: string;
  hobbies: string;
};

export type Person = {
  id: string;
  name: string;
  title: string;
  species: string;
  continent: string;
  image?: string;
  look: string;
  personality: string;
  role: string;
  quotes: string;
  symbolism: string;
  sheet?: CharacterSheet;
};

export type God = {
  id: string;
  name: string;
  title: string;
  domains: string;
  continent: string;
  image?: string;
  look: string;
  worship: string;
  falseRite: string;
  symbolism: string;
  sheet?: CharacterSheet;
};

export type Species = {
  id: string;
  name: string;
  habitat: string;
  look: string;
  affinity: string;
  note: string;
  figure?: string;
  kima?: string;
  history?: string;
  image?: string;
};

export type ContinentView = {
  src: string;
  place: string;
  caption: string;
};

export type Continent = {
  id: string;
  name: string;
  theme: string;
  image: string;
  views: ContinentView[];
  light: string;
  terrain: string;
  culture: string;
  gods: string[];
  rulers: string;
  inhabitants: string[];
  cities: string;
  beasts: string;
  magics: string;
  good: string;
  bad: string;
  storyTie: string;
};

export type Material = {
  id: string;
  name: string;
  rarity: string;
  source: string;
  use: string;
  look: string;
  image?: string;
};

export type RuneKind = {
  id: string;
  name: string;
  duration: string;
  effect: string;
  note: string;
};

export type Artifact = {
  id: string;
  name: string;
  origin: string;
  effect: string;
  look: string;
};

export type Creature = {
  id: string;
  n: number;
  name: string;
  type: string;
  element: string;
  habitat: string;
  look: string;
  habit: string;
  levels: string;
  image: string;
};

export type CodexTab =
  | "Gods"
  | "People"
  | "Species"
  | "World"
  | "System"
  | "History"
  | "Bestiary"
  | "Craft";

export type Thread = {
  id: string;
  tab: CodexTab;
  why: string;
};
