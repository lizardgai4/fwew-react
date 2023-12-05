import type { AdjectiveMode, NounMode } from "fwew.js";
import type { ExtendedLanguageCode } from "@/types/common";

type NounModeMeta = { name: string; value: NounMode };
type AdjModeMeta = { name: string; value: AdjectiveMode };

type NameAluStrings = {
  [key in ExtendedLanguageCode]: {
    numSyllables: string;
    nounMode: string;
    adjMode: string;
    nounModes: NounModeMeta[];
    adjModes: AdjModeMeta[];
  };
};

const strings: NameAluStrings = {
  de: {
    numSyllables: "Anzahl der Silben im Vornamen",
    nounMode: "Substantivmodus",
    adjMode: "Adjektivmodus",
    nounModes: [
      { name: "etwas", value: "something" },
      { name: "normales Substantiv", value: "normal noun" },
      { name: "Verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "beliebig", value: "any" },
      { name: "etwas", value: "something" },
      { name: "kein", value: "none" },
      { name: "normales Adjektiv", value: "normal adjective" },
      { name: "Genitiv-Substantiv", value: "genitive noun" },
      { name: "Herkunfts-Substantiv", value: "origin noun" },
      { name: "Partizip-Verb", value: "participle verb" },
      { name: "aktives Partizip-Verb", value: "active participle verb" },
      { name: "passives Partizip-Verb", value: "passive participle verb" },
    ],
  },
  en: {
    numSyllables: "Number of Syllables in First Name",
    nounMode: "Noun Mode",
    adjMode: "Adjective Mode",
    nounModes: [
      { name: "something", value: "something" },
      { name: "normal noun", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "any", value: "any" },
      { name: "something", value: "something" },
      { name: "none", value: "none" },
      { name: "normal adjective", value: "normal adjective" },
      { name: "genitive noun", value: "genitive noun" },
      { name: "origin noun", value: "origin noun" },
      { name: "participle verb", value: "participle verb" },
      { name: "active participle verb", value: "active participle verb" },
      { name: "passive participle verb", value: "passive participle verb" },
    ],
  },
  eo: {
    numSyllables: "Nombro de Silaboj en la Nomo",
    nounMode: "Substantiva Modo",
    adjMode: "Adjektiva Modo",
    nounModes: [
      { name: "io", value: "something" },
      { name: "normala substantivo", value: "normal noun" },
      { name: "verbo-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "iu", value: "any" },
      { name: "io", value: "something" },
      { name: "nenio", value: "none" },
      { name: "normala adjektivo", value: "normal adjective" },
      { name: "genitiva substantivo", value: "genitive noun" },
      { name: "origina substantivo", value: "origin noun" },
      { name: "participo verbo", value: "participle verb" },
      { name: "aktiva participo verbo", value: "active participle verb" },
      { name: "pasiva participo verbo", value: "passive participle verb" },
    ],
  },
  es: {
    numSyllables: "Número de Sílabas en el Nombre",
    nounMode: "Modo Sustantivo",
    adjMode: "Modo Adjetivo",
    nounModes: [
      { name: "algo", value: "something" },
      { name: "sustantivo normal", value: "normal noun" },
      { name: "verbo-dor", value: "verb-er" },
    ],
    adjModes: [
      { name: "cualquier", value: "any" },
      { name: "algo", value: "something" },
      { name: "ninguno", value: "none" },
      { name: "adjetivo normal", value: "normal adjective" },
      { name: "sustantivo genitivo", value: "genitive noun" },
      { name: "sustantivo de origen", value: "origin noun" },
      { name: "verbo participio", value: "participle verb" },
      { name: "verbo participio activo", value: "active participle verb" },
      { name: "verbo participio pasivo", value: "passive participle verb" },
    ],
  },
  et: {
    numSyllables: "Eesnime silpide arv",
    nounMode: "Substantiivirežiim",
    adjMode: "Omadussõnarežiim",
    nounModes: [
      { name: "midagi", value: "something" },
      { name: "tavaline substantiiv", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "mis tahes", value: "any" },
      { name: "midagi", value: "something" },
      { name: "mitte ükski", value: "none" },
      { name: "tavaline omadussõna", value: "normal adjective" },
      { name: "omastavas käändes substantiiv", value: "genitive noun" },
      { name: "päritolu substantiiv", value: "origin noun" },
      { name: "partitsiipverb", value: "participle verb" },
      { name: "aktiivne partitsiipverb", value: "active participle verb" },
      { name: "passiivne partitsiipverb", value: "passive participle verb" },
    ],
  },
  fr: {
    numSyllables: "Nombre de Syllabes dans le Prénom",
    nounMode: "Mode Nom",
    adjMode: "Mode Adjectif",
    nounModes: [
      { name: "quelque chose", value: "something" },
      { name: "nom normal", value: "normal noun" },
      { name: "verbe-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "n'importe quel", value: "any" },
      { name: "quelque chose", value: "something" },
      { name: "aucun", value: "none" },
      { name: "adjectif normal", value: "normal adjective" },
      { name: "nom génitif", value: "genitive noun" },
      { name: "nom d'origine", value: "origin noun" },
      { name: "verbe participe", value: "participle verb" },
      { name: "verbe participe actif", value: "active participle verb" },
      { name: "verbe participe passif", value: "passive participle verb" },
    ],
  },
  hu: {
    numSyllables: "Keresztnév szótagjainak száma",
    nounMode: "Főnévi mód",
    adjMode: "Melléknévi mód",
    nounModes: [
      { name: "valami", value: "something" },
      { name: "normál főnév", value: "normal noun" },
      { name: "ige-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "bármelyik", value: "any" },
      { name: "valami", value: "something" },
      { name: "egyik sem", value: "none" },
      { name: "normál melléknév", value: "normal adjective" },
      { name: "birtokos főnév", value: "genitive noun" },
      { name: "eredet főnév", value: "origin noun" },
      { name: "particip ige", value: "participle verb" },
      { name: "aktív particip ige", value: "active participle verb" },
      { name: "passzív particip ige", value: "passive participle verb" },
    ],
  },
  nl: {
    numSyllables: "Aantal lettergrepen in de voornaam",
    nounMode: "Naamwoordmodus",
    adjMode: "Bijvoeglijk naamwoordmodus",
    nounModes: [
      { name: "iets", value: "something" },
      { name: "normaal naamwoord", value: "normal noun" },
      { name: "werkwoord-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "elke", value: "any" },
      { name: "iets", value: "something" },
      { name: "geen", value: "none" },
      { name: "normaal bijvoeglijk naamwoord", value: "normal adjective" },
      { name: "genitief naamwoord", value: "genitive noun" },
      { name: "oorsprong naamwoord", value: "origin noun" },
      { name: "deelwoord werkwoord", value: "participle verb" },
      { name: "actief deelwoord werkwoord", value: "active participle verb" },
      { name: "passief deelwoord werkwoord", value: "passive participle verb" },
    ],
  },
  nx: {
    numSyllables: "holpxay lì'kongä",
    nounMode: "fnetstxolì'u",
    adjMode: "fnesyonlì'u",
    nounModes: [
      { name: "tsun", value: "something" },
      { name: "fnetstxolì'u", value: "normal noun" },
      { name: "fneykivìntxu", value: "verb-er" },
    ],
    adjModes: [
      { name: "tsun", value: "any" },
      { name: "tsun", value: "something" },
      { name: "ke tsun", value: "none" },
      { name: "fnesyonlì'u", value: "normal adjective" },
      { name: "fnetstxolì'u tìtxen si", value: "genitive noun" },
      { name: "fnetstxolì'u tìtxen si", value: "origin noun" },
      { name: "fneykivìntxu", value: "participle verb" },
      { name: "fneykivìntxu tìtxen si", value: "active participle verb" },
      { name: "fneykivìntxu tìtxen si", value: "passive participle verb" },
    ],
  },
  pl: {
    numSyllables: "Liczba sylab w imieniu",
    nounMode: "Tryb rzeczownika",
    adjMode: "Tryb przymiotnika",
    nounModes: [
      { name: "coś", value: "something" },
      { name: "normalny rzeczownik", value: "normal noun" },
      { name: "czasownik-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "dowolny", value: "any" },
      { name: "coś", value: "something" },
      { name: "żaden", value: "none" },
      { name: "normalny przymiotnik", value: "normal adjective" },
      { name: "rzeczownik dopełniacz", value: "genitive noun" },
      { name: "rzeczownik pochodzenia", value: "origin noun" },
      { name: "czasownik w stronie biernej", value: "participle verb" },
      { name: "czasownik w stronie czynnej", value: "active participle verb" },
      {
        name: "czasownik w stronie bierniej",
        value: "passive participle verb",
      },
    ],
  },
  pt: {
    numSyllables: "Número de sílabas no primeiro nome",
    nounMode: "Modo substantivo",
    adjMode: "Modo adjetivo",
    nounModes: [
      { name: "alguma coisa", value: "something" },
      { name: "substantivo comum", value: "normal noun" },
      { name: "fazedor de verbo", value: "verb-er" },
    ],
    adjModes: [
      { name: "qualquer um", value: "any" },
      { name: "alguma coisa", value: "something" },
      { name: "nenhum", value: "none" },
      { name: "adjetivo normal", value: "normal adjective" },
      { name: "substantivo genitivo", value: "genitive noun" },
      { name: "substantivo de origem", value: "origin noun" },
      { name: "verbo no particípio", value: "participle verb" },
      {
        name: "verbo no particípio ativo/presente",
        value: "active participle verb",
      },
      {
        name: "verbo verbo no particípio passivo/passado",
        value: "passive participle verb",
      },
    ],
  },
  ru: {
    numSyllables: "Количество слогов в имени",
    nounMode: "Существительное",
    adjMode: "Прилагательное",
    nounModes: [
      { name: "что-то", value: "something" },
      { name: "обычное существительное", value: "normal noun" },
      { name: "глагол-ер", value: "verb-er" },
    ],
    adjModes: [
      { name: "любое", value: "any" },
      { name: "что-то", value: "something" },
      { name: "ничего", value: "none" },
      { name: "обычное прилагательное", value: "normal adjective" },
      { name: "существительное в родительном падеже", value: "genitive noun" },
      { name: "существительное происхождения", value: "origin noun" },
      { name: "причастие глагола", value: "participle verb" },
      { name: "активное причастие глагола", value: "active participle verb" },
      { name: "пассивное причастие глагола", value: "passive participle verb" },
    ],
  },
  sv: {
    numSyllables: "Antal stavelser i förnamn",
    nounMode: "Substantivläge",
    adjMode: "Adjektivläge",
    nounModes: [
      { name: "något", value: "something" },
      { name: "normalt substantiv", value: "normal noun" },
      { name: "verb-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "något", value: "any" },
      { name: "något", value: "something" },
      { name: "inget", value: "none" },
      { name: "normalt adjektiv", value: "normal adjective" },
      { name: "genitiv substantiv", value: "genitive noun" },
      { name: "ursprung substantiv", value: "origin noun" },
      { name: "particip verb", value: "participle verb" },
      { name: "aktiv particip verb", value: "active participle verb" },
      { name: "passiv particip verb", value: "passive participle verb" },
    ],
  },
  tr: {
    numSyllables: "Hece Sayısı",
    nounMode: "İsim Kipi",
    adjMode: "Sıfat Kipi",
    nounModes: [
      { name: "bir şey", value: "something" },
      { name: "normal isim", value: "normal noun" },
      { name: "fiil-er", value: "verb-er" },
    ],
    adjModes: [
      { name: "herhangi bir", value: "any" },
      { name: "bir şey", value: "something" },
      { name: "hiçbiri", value: "none" },
      { name: "normal sıfat", value: "normal adjective" },
      { name: "iyelik isim", value: "genitive noun" },
      { name: "köken isim", value: "origin noun" },
      { name: "sıfat-fiil", value: "participle verb" },
      { name: "etken sıfat-fiil", value: "active participle verb" },
      { name: "edilgen sıfat-fiil", value: "passive participle verb" },
    ],
  },
};

export default strings;
