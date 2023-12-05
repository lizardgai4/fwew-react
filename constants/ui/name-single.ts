import type { ExtendedLanguageCode } from "@/types/common";

type NameSingleStrings = {
  [key in ExtendedLanguageCode]: {
    numSyllables: string;
  };
};

const strings: NameSingleStrings = {
  de: {
    numSyllables: "Anzahl der Silben",
  },
  en: {
    numSyllables: "Number of Syllables",
  },
  eo: {
    numSyllables: "Nombro de Silaboj",
  },
  es: {
    numSyllables: "Número de Sílabas",
  },
  et: {
    numSyllables: "Silpide arv",
  },
  fr: {
    numSyllables: "Nombre de Syllabes",
  },
  hu: {
    numSyllables: "Szótagok száma",
  },
  nl: {
    numSyllables: "Aantal lettergrepen",
  },
  nx: {
    numSyllables: "holpxay lì'kongä",
  },
  pl: {
    numSyllables: "Liczba sylab",
  },
  ru: {
    numSyllables: "Количество слогов",
  },
  sv: {
    numSyllables: "Antal stavelser",
  },
  tr: {
    numSyllables: "Hece Sayısı",
  },
};

export default strings;
