import type { Dialect } from "fwew.js";
import type { ExtendedLanguageCode } from "@/types/settings";

type DialectMeta = {
  name: string;
  value: Dialect;
};

type NameStrings = {
  [key in ExtendedLanguageCode]: {
    single: string;
    full: string;
    alu: string;
    options: string;
    numNames: string;
    dialect: string;
    dialects: DialectMeta[];
    generate: string;
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
    generate: "Generieren",
  },
  en: {
    single: "Single",
    full: "Full",
    alu: "Alu",
    options: "Options",
    numNames: "Number of Names to Generate",
    dialect: "Dialect",
    dialects: [
      { name: "interdialect", value: "interdialect" },
      { name: "forest", value: "forest" },
      { name: "reef", value: "reef" },
    ],
    generate: "Generate",
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
    generate: "Generar",
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
    generate: "Genereeri",
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
    generate: "Générer",
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
    generate: "Generálás",
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
    generate: "Genereren",
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
    generate: "ngop",
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
    generate: "Generuj",
  },
  ru: {
    single: "Простой",
    full: "Полный",
    alu: "Алу",
    options: "Опции",
    numNames: "Количество генерируемых имен",
    dialect: "Диалект",
    dialects: [
      { name: "междудиалектный", value: "interdialect" },
      { name: "лесной", value: "forest" },
      { name: "рифовый", value: "reef" },
    ],
    generate: "Генерировать",
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
    generate: "Generera",
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
    generate: "Üret",
  },
};

export default strings;
