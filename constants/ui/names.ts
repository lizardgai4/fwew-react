import type { Dialect } from "fwew.js";
import type { ExtendedLanguageCode } from "@/types/common";

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
  },
};

export default strings;
