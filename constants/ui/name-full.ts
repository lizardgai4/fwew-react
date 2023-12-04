import type { NameEnding } from "fwew.js";

const nameEndings: NameEnding[] = ["'itan", "'ite", "'itu"];

const strings = {
  de: {
    numSyllables1: "Anzahl der Silben im Vornamen",
    numSyllables2: "Anzahl der Silben im Familiennamen",
    numSyllables3: "Anzahl der Silben im Elternnamen",
    nameEnding: "Namensendung",
    nameEndingHint:
      "-'itan für männlich, -'ite für weiblich, -'itu für nicht-binär (nicht kanonisch)",
    nameEndings,
  },
  en: {
    numSyllables1: "Number of Syllables in First Name",
    numSyllables2: "Number of Syllables in Family Name",
    numSyllables3: "Number of Syllables in Parent's Name",
    nameEnding: "Name Ending",
    nameEndingHint:
      "-'itan for male, -'ite for female, -'itu for non-binary (non-canon)",
    nameEndings,
  },
};

export default strings;
