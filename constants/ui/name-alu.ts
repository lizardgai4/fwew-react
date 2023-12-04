import type { AdjectiveMode, NounMode } from "fwew.js";

const nounModes: NounMode[] = ["something", "normal noun", "verb-er"];

const adjModes: AdjectiveMode[] = [
  "any",
  "something",
  "none",
  "normal adjective",
  "genitive noun",
  "origin noun",
  "participle verb",
  "active participle verb",
  "passive participle verb",
];

const strings = {
  de: {
    numSyllables: "Anzahl der Silben im Vornamen",
    nounMode: "Substantivmodus",
    nounModes,
    adjMode: "Adjektivmodus",
    adjModes,
  },
  en: {
    numSyllables: "Number of Syllables in First Name",
    nounMode: "Noun Mode",
    nounModes,
    adjMode: "Adjective Mode",
    adjModes,
  },
};

export default strings;
