import type { Dialect } from "fwew.js";

const dialects: Dialect[] = ["interdialect", "forest", "reef"];

const strings = {
  de: {
    single: "Einzel",
    full: "Voll",
    alu: "Alu",
    options: "Optionen",
    numNames: "Anzahl der zu generierenden Namen",
    dialect: "Dialekt",
    dialects,
    generate: "Generieren",
  },
  en: {
    single: "Single",
    full: "Full",
    alu: "Alu",
    options: "Options",
    numNames: "Number of Names to Generate",
    dialect: "Dialect",
    dialects,
    generate: "Generate",
  },
};

export default strings;
