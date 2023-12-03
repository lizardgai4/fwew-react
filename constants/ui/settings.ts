import type { LanguageCode } from "fwew.js";

export type ExtendedLanguageCode = LanguageCode | "es" | "nx";

export type LanguageMeta = {
  value: ExtendedLanguageCode;
  label: string;
  ui: boolean;
  results: boolean;
};

export const Languages: LanguageMeta[] = [
  // UI and Results
  { value: "de", label: "Deutsch", ui: true, results: true },
  { value: "en", label: "English", ui: true, results: true },
  { value: "nl", label: "Nederlands", ui: true, results: true },
  { value: "tr", label: "Türkçe", ui: true, results: true },
  // UI only
  { value: "es", label: "Español", ui: true, results: false },
  { value: "nx", label: "Lì'fya leNa'vi", ui: true, results: false },
  // Results only
  { value: "et", label: "Eesti", ui: false, results: true },
  { value: "fr", label: "Français", ui: false, results: true },
  { value: "hu", label: "Magyar", ui: false, results: true },
  { value: "pl", label: "Polski", ui: false, results: true },
  { value: "ru", label: "Русский", ui: false, results: true },
  { value: "sv", label: "Svenska", ui: false, results: true },
];
Languages.sort((a, b) => a.label.localeCompare(b.label));

export const UILanguages = Languages.filter((l) => l.ui);
export const ResultsLanguages = Languages.filter((l) => l.results);

const strings = {
  en: {
    appLanguage: "App Language",
    resultsLanguage: "Results Language",
  },
};

export default strings;
