import type { ExtendedLanguageCode, OptionType } from "@/types/common";
import type { Dialect } from "fwew.js";

type SyllablesOptions = OptionType<"0" | "1" | "2" | "3" | "4">[];

type DialectMeta = OptionType<Dialect>;

type NameStrings = {
  [key in ExtendedLanguageCode]: {
    single: string;
    full: string;
    alu: string;
    options: string;
    numNames: string;
    dialect: string;
    dialects: DialectMeta[];
    syllablesOptions: SyllablesOptions;
  };
};

const strings: NameStrings = {
  de: {
    single: "Einzel",
    full: "Voll",
    alu: "Alu",
    options: "Optionen",
    numNames: "Anzahl der zu generierenden Namen",
    dialect: "Dialekt",
    dialects: [
      { name: "Interdialekt", value: "interdialect" },
      { name: "Wald", value: "forest" },
      { name: "Riff", value: "reef" },
    ],
    syllablesOptions: [
      { name: "zufällig", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  en: {
    single: "Single",
    full: "Full",
    alu: "Alu",
    options: "Options",
    numNames: "Number of names to generate",
    dialect: "Dialect",
    dialects: [
      { name: "interdialect", value: "interdialect" },
      { name: "forest", value: "forest" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "random", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  eo: {
    single: "Simpla",
    full: "Plena",
    alu: "Alu",
    options: "Opcioj",
    numNames: "Nombro de Generataj Nomoj",
    dialect: "Dialekto",
    dialects: [
      { name: "interdialekta", value: "interdialect" },
      { name: "arbara", value: "forest" },
      { name: "rifa", value: "reef" },
    ],
    syllablesOptions: [
      { name: "hazarda", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  es: {
    single: "Sencillo",
    full: "Completo",
    alu: "Alu",
    options: "Opciones",
    numNames: "Número de Nombres a Generar",
    dialect: "Dialecto",
    dialects: [
      { name: "interdialectal", value: "interdialect" },
      { name: "bosque", value: "forest" },
      { name: "arrecife", value: "reef" },
    ],
    syllablesOptions: [
      { name: "aleatorio", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  et: {
    single: "Üksik",
    full: "Täielik",
    alu: "Alu",
    options: "Valikud",
    numNames: "Genereeritavate nimede arv",
    dialect: "Dialekt",
    dialects: [
      { name: "interdialektiline", value: "interdialect" },
      { name: "metsa", value: "forest" },
      { name: "rifi", value: "reef" },
    ],
    syllablesOptions: [
      { name: "juhuslik", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  fr: {
    single: "Simple",
    full: "Complet",
    alu: "Alu",
    options: "Options",
    numNames: "Nombre de Noms à Générer",
    dialect: "Dialecte",
    dialects: [
      { name: "interdialectal", value: "interdialect" },
      { name: "forêt", value: "forest" },
      { name: "récif", value: "reef" },
    ],
    syllablesOptions: [
      { name: "aléatoire", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  hu: {
    single: "Egyszerű",
    full: "Teljes",
    alu: "Alu",
    options: "Opciók",
    numNames: "Generálandó Nevek Száma",
    dialect: "Dialektus",
    dialects: [
      { name: "interdialect", value: "interdialect" },
      { name: "forest", value: "forest" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "véletlen", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nl: {
    single: "Enkel",
    full: "Volledig",
    alu: "Alu",
    options: "Opties",
    numNames: "Aantal te Genereren Namen",
    dialect: "Dialect",
    dialects: [
      { name: "interdialect", value: "interdialect" },
      { name: "forest", value: "forest" },
      { name: "reef", value: "reef" },
    ],
    syllablesOptions: [
      { name: "willekeurig", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  nx: {
    single: "'awa tstxo",
    full: "'änsyem",
    alu: "alu",
    options: "tìftxey",
    numNames: "holpxay lì'uä",
    dialect: "lì'fyafnel",
    dialects: [
      { name: "melì'fyafnel", value: "interdialect" },
      { name: "lì'fya na'rìngä", value: "forest" },
      { name: "lì'fya wione", value: "reef" },
    ],
    syllablesOptions: [
      { name: "renulke", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  pl: {
    single: "Pojedynczy",
    full: "Pełny",
    alu: "Alu",
    options: "Opcje",
    numNames: "Liczba Generowanych Nazw",
    dialect: "Dialekt",
    dialects: [
      { name: "międzydialektalny", value: "interdialect" },
      { name: "leśny", value: "forest" },
      { name: "riffowy", value: "reef" },
    ],
    syllablesOptions: [
      { name: "losowy", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  pt: {
    single: "Simples",
    full: "Inteiro",
    alu: "Alu",
    options: "Opções",
    numNames: "Número de nomes gerados",
    dialect: "Dialeto",
    dialects: [
      { name: "interdialeto", value: "interdialect" },
      { name: "floresta", value: "forest" },
      { name: "recife", value: "reef" },
    ],
    syllablesOptions: [
      { name: "aleatório", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
    ],
  },
  ru: {
    single: "Одно имя",
    full: "Полное имя",
    alu: "Имя с alu",
    options: "Параметры",
    numNames: "Количество генерируемых имен",
    dialect: "Диалект",
    dialects: [
      { name: "междудиалектный", value: "interdialect" },
      { name: "лесной", value: "forest" },
      { name: "рифовый", value: "reef" },
    ],
    syllablesOptions: [
      { name: "случайный", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
    ],
  },
  sv: {
    single: "Enkel",
    full: "Full",
    alu: "Alu",
    options: "Alternativ",
    numNames: "Antal Namn att Generera",
    dialect: "Dialekt",
    dialects: [
      { name: "interdialekt", value: "interdialect" },
      { name: "skog", value: "forest" },
      { name: "rev", value: "reef" },
    ],
    syllablesOptions: [
      { name: "slumpmässig", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
    ],
  },
  tr: {
    single: "Tek",
    full: "Tam",
    alu: "Alu",
    options: "Seçenekler",
    numNames: "Üretilecek İsim Sayısı",
    dialect: "Lehçe",
    dialects: [
      { name: "interdialekt", value: "interdialect" },
      { name: "orman", value: "forest" },
      { name: "resif", value: "reef" },
    ],
    syllablesOptions: [
      { name: "rastgele", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
    ],
  },
};

export default strings;
