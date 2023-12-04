import type { AdjectiveMode, NounMode } from "fwew.js";
import type { ExtendedLanguageCode } from "@/types/settings";

export const nounModes: NounMode[] = ["something", "normal noun", "verb-er"];

export const adjModes: AdjectiveMode[] = [
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

type NameAluStrings = {
  [key in ExtendedLanguageCode]: {
    numSyllables: string;
    nounMode: string;
    adjMode: string;
  };
};

const strings: NameAluStrings = {
  de: {
    numSyllables: "Anzahl der Silben im Vornamen",
    nounMode: "Substantivmodus",
    adjMode: "Adjektivmodus",
  },
  en: {
    numSyllables: "Number of Syllables in First Name",
    nounMode: "Noun Mode",
    adjMode: "Adjective Mode",
  },
  es: {
    numSyllables: "Número de Sílabas en el Nombre",
    nounMode: "Modo Sustantivo",
    adjMode: "Modo Adjetivo",
  },
  et: {
    numSyllables: "Eesnime silpide arv",
    nounMode: "Substantiivirežiim",
    adjMode: "Omadussõnarežiim",
  },
  fr: {
    numSyllables: "Nombre de Syllabes dans le Prénom",
    nounMode: "Mode Nom",
    adjMode: "Mode Adjectif",
  },
  hu: {
    numSyllables: "Keresztnév szótagjainak száma",
    nounMode: "Főnévi mód",
    adjMode: "Melléknévi mód",
  },
  nl: {
    numSyllables: "Aantal lettergrepen in de voornaam",
    nounMode: "Naamwoordmodus",
    adjMode: "Bijvoeglijk naamwoordmodus",
  },
  nx: {
    numSyllables: "holpxay lì'kongä",
    nounMode: "fnetstxolì'u",
    adjMode: "fnesyonlì'u",
  },
  pl: {
    numSyllables: "Liczba sylab w imieniu",
    nounMode: "Tryb rzeczownika",
    adjMode: "Tryb przymiotnika",
  },
  ru: {
    numSyllables: "Количество слогов в имени",
    nounMode: "Существительное",
    adjMode: "Прилагательное",
  },
  sv: {
    numSyllables: "Antal stavelser i förnamn",
    nounMode: "Substantivläge",
    adjMode: "Adjektivläge",
  },
  tr: {
    numSyllables: "Hece Sayısı",
    nounMode: "İsim Kipi",
    adjMode: "Sıfat Kipi",
  },
};

export default strings;
