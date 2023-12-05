import type { ExtendedLanguageCode } from "@/types/common";

type ScreenStrings = {
  [key in ExtendedLanguageCode]: {
    search: string;
    list: string;
    random: string;
    numbers: string;
    names: string;
    settings: string;
  };
};

const strings: ScreenStrings = {
  de: {
    search: "Suche",
    list: "Liste",
    random: "Zufall",
    numbers: "Zahlen",
    names: "Namen",
    settings: "Einstellungen",
  },
  en: {
    search: "Search",
    list: "List",
    random: "Random",
    numbers: "Numbers",
    names: "Names",
    settings: "Settings",
  },
  eo: {
    search: "Serĉi",
    list: "Listo",
    random: "Hazarda",
    numbers: "Nombroj",
    names: "Nomoj",
    settings: "Agordoj",
  },
  es: {
    search: "Buscar",
    list: "Lista",
    random: "Aleatorio",
    numbers: "Números",
    names: "Nombres",
    settings: "Ajustes",
  },
  et: {
    search: "Otsing",
    list: "Nimekiri",
    random: "Juhuslik",
    numbers: "Numbrid",
    names: "Nimed",
    settings: "Seaded",
  },
  fr: {
    search: "Recherche",
    list: "Liste",
    random: "Aléatoire",
    numbers: "Nombres",
    names: "Noms",
    settings: "Paramètres",
  },
  hu: {
    search: "Keresés",
    list: "Lista",
    random: "Véletlen",
    numbers: "Számok",
    names: "Név",
    settings: "Beállítások",
  },
  nl: {
    search: "Zoeken",
    list: "Lijst",
    random: "Willekeurig",
    numbers: "Nummers",
    names: "Namen",
    settings: "Instellingen",
  },
  nx: {
    search: "fwew",
    list: "sna'o",
    random: "renulke",
    numbers: "holpxay",
    names: "tstxo",
    settings: "tìftxey",
  },
  pl: {
    search: "Szukaj",
    list: "Lista",
    random: "Losowy",
    numbers: "Liczby",
    names: "Imiona",
    settings: "Ustawienia",
  },
  // TODO: pt
  pt: {
    search: "Procurar",
    list: "Lista",
    random: "Aleatório",
    numbers: "Números",
    names: "Nomes",
    settings: "Configurações",
  },
  ru: {
    search: "Поиск",
    list: "Список",
    random: "Случайный",
    numbers: "Числа",
    names: "Имена",
    settings: "Настройки",
  },
  sv: {
    search: "Sök",
    list: "Lista",
    random: "Slumpmässig",
    numbers: "Nummer",
    names: "Namn",
    settings: "Inställningar",
  },
  tr: {
    search: "Arama",
    list: "Liste",
    random: "Rastgele",
    numbers: "Sayılar",
    names: "İsimler",
    settings: "Ayarlar",
  },
};

export default strings;
