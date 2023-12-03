import type { NameEnding } from "fwew.js";

const strings = {
  en: {
    numSyllables1: "Number of Syllables in First Name",
    numSyllables2: "Number of Syllables in Family Name",
    numSyllables3: "Number of Syllables in Parent's Name",
    nameEnding: "Name Ending",
    nameEndingHint:
      "-'itan for male, -'ite for female, -'itu for non-binary (non-canon)",
    nameEndings: ["'itan", "'ite", "'itu"] as NameEnding[],
  },
};

export default strings;
