import type { ExtendedLanguageCode } from "@/types/common";

type CommonStrings = {
  [key in ExtendedLanguageCode]: {
    result: string;
    results: string;
  };
};

const strings: CommonStrings = {
  de: {
    result: "Ergebnis",
    results: "Ergebnisse",
  },
  es: {
    result: "resultado",
    results: "resultados",
  },
  eo: {
    result: "rezulto",
    results: "rezultoj",
  },
  et: {
    result: "tulemus",
    results: "tulemused",
  },
  fr: {
    result: "résultat",
    results: "résultats",
  },
  en: {
    result: "result",
    results: "results",
  },
  hu: {
    result: "eredmény",
    results: "eredmények",
  },
  nl: {
    result: "resultaat",
    results: "resultaten",
  },
  nx: {
    result: "kum",
    results: "kum",
  },
  pl: {
    result: "wynik",
    results: "wyniki",
  },
  pt: {
    result: "resultado",
    results: "resultados",
  },
  ru: {
    result: "результат",
    results: "результаты",
  },
  sv: {
    result: "resultat",
    results: "resultat",
  },
  tr: {
    result: "sonuç",
    results: "sonuçlar",
  },
};

export default strings;
