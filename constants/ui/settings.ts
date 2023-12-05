import type { ExtendedLanguageCode } from "@/types/common";

export type LanguageMeta = {
  value: ExtendedLanguageCode;
  label: string;
  ui: boolean;
  results: boolean;
};

export const Languages: LanguageMeta[] = [
  { value: "de", label: "Deutsch", ui: true, results: true },
  { value: "et", label: "Eesti", ui: true, results: true },
  { value: "en", label: "English", ui: true, results: true },
  { value: "es", label: "Español", ui: true, results: false },
  { value: "eo", label: "Esperanto", ui: true, results: false },
  { value: "fr", label: "Français", ui: true, results: true },
  { value: "nx", label: "Lì'fya leNa'vi", ui: true, results: false },
  { value: "hu", label: "Magyar", ui: true, results: true },
  { value: "nl", label: "Nederlands", ui: true, results: true },
  { value: "pl", label: "Polski", ui: true, results: true },
  { value: "pt", label: "Português", ui: true, results: false },
  { value: "ru", label: "Русский", ui: true, results: true },
  { value: "sv", label: "Svenska", ui: true, results: true },
  { value: "tr", label: "Türkçe", ui: true, results: true },
];

export const AppLanguages = Languages.filter((l) => l.ui);
export const ResultsLanguages = Languages.filter((l) => l.results);

export const credits = {
  development: ["Tirea Aean"],
  design: ["Tirea Aean", "Tsyili"],
  testing: ["Tirea Aean", "Tsyili", "Txonpay"],
  translation: [
    "Alyara Arati (es)",
    "Charlotte (nl)",
    "İsmail yiğit (tr)",
    "Palusyulang (pt)",
    "Tirea Aean",
  ],
};

type SettingsStrings = {
  [key in ExtendedLanguageCode]: {
    about: string;
    version: string;
    credits: string;
    development: string;
    design: string;
    testing: string;
    translation: string;
    appLanguage: string;
    resultsLanguage: string;
  };
};

const strings: SettingsStrings = {
  de: {
    about: "Über",
    version: "Version",
    credits: "Credits",
    development: "Entwicklung",
    design: "Design",
    testing: "Testen",
    translation: "Übersetzung",
    appLanguage: "App-Sprache",
    resultsLanguage: "Ergebnis-Sprache",
  },
  en: {
    about: "About",
    version: "Version",
    credits: "Credits",
    development: "Development",
    design: "Design",
    testing: "Testing",
    translation: "Translation",
    appLanguage: "App Language",
    resultsLanguage: "Results Language",
  },
  eo: {
    about: "Pri",
    version: "Versio",
    credits: "Kreditoj",
    development: "Disvolviĝo",
    design: "Dizajno",
    testing: "Testado",
    translation: "Traduko",
    appLanguage: "Lingvo de la aplikaĵo",
    resultsLanguage: "Lingvo de la rezultoj",
  },
  es: {
    about: "Acerca de",
    version: "Versión",
    credits: "Créditos",
    development: "Desarrollo",
    design: "Diseño",
    testing: "Pruebas",
    translation: "Traducción",
    appLanguage: "Idioma de la aplicación",
    resultsLanguage: "Idioma de los resultados",
  },
  et: {
    about: "Info",
    version: "Versioon",
    credits: "Autorid",
    development: "Arendus",
    design: "Disain",
    testing: "Testimine",
    translation: "Tõlge",
    appLanguage: "Rakenduse keel",
    resultsLanguage: "Tulemuste keel",
  },
  fr: {
    about: "À propos",
    version: "Version",
    credits: "Crédits",
    development: "Développement",
    design: "Design",
    testing: "Test",
    translation: "Traduction",
    appLanguage: "Langue de l'application",
    resultsLanguage: "Langue des résultats",
  },
  hu: {
    about: "Névjegy",
    version: "Verzió",
    credits: "Készítők",
    development: "Fejlesztés",
    design: "Design",
    testing: "Tesztelés",
    translation: "Fordítás",
    appLanguage: "Alkalmazás nyelve",
    resultsLanguage: "Eredmények nyelve",
  },
  nl: {
    about: "Over",
    version: "Versie",
    credits: "Credits",
    development: "Ontwikkeling",
    design: "Ontwerp",
    testing: "Testen",
    translation: "Vertaling",
    appLanguage: "App-taal",
    resultsLanguage: "Resultaten taal",
  },
  nx: {
    about: "teri",
    version: "srey",
    credits: "irayo",
    development: "rengopyu",
    design: "'ongopyu",
    testing: "fmetokyu",
    translation: "ralpengyu",
    appLanguage: "'urä lì'fya",
    resultsLanguage: "kumä lì'fya",
  },
  pl: {
    about: "O aplikacji",
    version: "Wersja",
    credits: "Autorzy",
    development: "Rozwój",
    design: "Projekt",
    testing: "Testowanie",
    translation: "Tłumaczenie",
    appLanguage: "Język aplikacji",
    resultsLanguage: "Język wyników",
  },
  pt: {
    about: "Sobre",
    version: "Versão",
    credits: "Créditos",
    development: "Desenvolvimento",
    design: "Design",
    testing: "Teste",
    translation: "Tradução",
    appLanguage: "Idioma do Aplicativo",
    resultsLanguage: "Idioma dos Resultados",
  },
  ru: {
    about: "О приложении",
    version: "Версия",
    credits: "Авторы",
    development: "Разработка",
    design: "Дизайн",
    testing: "Тестирование",
    translation: "Перевод",
    appLanguage: "Язык приложения",
    resultsLanguage: "Язык результатов",
  },
  sv: {
    about: "Om",
    version: "Version",
    credits: "Skapare",
    development: "Utveckling",
    design: "Design",
    testing: "Testning",
    translation: "Översättning",
    appLanguage: "App-språk",
    resultsLanguage: "Resultatspråk",
  },
  tr: {
    about: "Hakkında",
    version: "Sürüm",
    credits: "Katkıda Bulunanlar",
    development: "Geliştirme",
    design: "Tasarım",
    testing: "Test",
    translation: "Çeviri",
    appLanguage: "Uygulama Dili",
    resultsLanguage: "Sonuçlar Dili",
  },
};

export default strings;
