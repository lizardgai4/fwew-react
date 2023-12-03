import type { AdjectiveMode, NounMode } from "fwew.js";

const strings = {
  en: {
    numSyllables: "Number of Syllables",
    nounMode: "Noun Mode",
    nounModes: ["something", "normal noun", "verb-er"] as NounMode[],
    adjMode: "Adjective Mode",
    adjModes: [
      "any",
      "something",
      "none",
      "normal adjective",
      "genitive noun",
      "origin noun",
      "participle verb",
      "active participle verb",
      "passive participle verb",
    ] as AdjectiveMode[],
  },
};

export default strings;
