import type { NameEnding } from "fwew.js";
import type { ExtendedLanguageCode } from "@/types/common";

export const nameEndings: NameEnding[] = ["'itan", "'ite", "'itu"];

type NameFullStrings = {
  [key in ExtendedLanguageCode]: {
    numSyllables1: string;
    numSyllables2: string;
    numSyllables3: string;
    nameEnding: string;
    nameEndingHint: string;
  };
};

const strings: NameFullStrings = {
  de: {
    numSyllables1: "Anzahl der Silben im Vornamen",
    numSyllables2: "Anzahl der Silben im Familiennamen",
    numSyllables3: "Anzahl der Silben im Elternnamen",
    nameEnding: "Namensendung",
    nameEndingHint:
      "-'itan für männlich, -'ite für weiblich, -'itu für nicht-binär (nicht kanonisch)",
  },
  en: {
    numSyllables1: "Number of syllables in first name",
    numSyllables2: "Number of syllables in family name",
    numSyllables3: "Number of syllables in parent's name",
    nameEnding: "Name ending",
    nameEndingHint:
      "-'itan for male, -'ite for female, -'itu for non-binary (non-canon)",
  },
  eo: {
    numSyllables1: "Nombro de Silaboj en la Nomo",
    numSyllables2: "Nombro de Silaboj en la Familia Nomo",
    numSyllables3: "Nombro de Silaboj en la Patra Nomo",
    nameEnding: "Nomo Fino",
    nameEndingHint:
      "-'itan por viro, -'ite por virino, -'itu por nebinara (nekana)",
  },
  es: {
    numSyllables1: "Número de Sílabas en el Nombre",
    numSyllables2: "Número de Sílabas en el Apellido",
    numSyllables3: "Número de Sílabas en el Nombre del Padre",
    nameEnding: "Terminación del Nombre",
    nameEndingHint:
      "-'itan para masculino, -'ite para femenino, -'itu para no binario (no canónico)",
  },
  et: {
    numSyllables1: "Eesnime silpide arv",
    numSyllables2: "Perekonnanime silpide arv",
    numSyllables3: "Vanema nime silpide arv",
    nameEnding: "Nime lõpp",
    nameEndingHint:
      "-'itan meessoost, -'ite naissoost, -'itu mitte-binaarne (mitte-kanoniline)",
  },
  fr: {
    numSyllables1: "Nombre de Syllabes dans le Prénom",
    numSyllables2: "Nombre de Syllabes dans le Nom de Famille",
    numSyllables3: "Nombre de Syllabes dans le Nom du Parent",
    nameEnding: "Terminaison du Nom",
    nameEndingHint:
      "-'itan pour masculin, -'ite pour féminin, -'itu pour non-binaire (non-canonique)",
  },
  hu: {
    numSyllables1: "Keresztnév szótagjainak száma",
    numSyllables2: "Vezetéknév szótagjainak száma",
    numSyllables3: "Szülők nevének szótagjainak száma",
    nameEnding: "Név Vége",
    nameEndingHint:
      "-'itan férfiaknak, -'ite nőknek, -'itu nem-binárisoknak (nem kánonikus)",
  },
  nl: {
    numSyllables1: "Aantal lettergrepen in de voornaam",
    numSyllables2: "Aantal lettergrepen in de achternaam",
    numSyllables3: "Aantal lettergrepen in de naam van de ouder",
    nameEnding: "Naam Einde",
    nameEndingHint:
      "-'itan voor mannelijk, -'ite voor vrouwelijk, -'itu voor non-binair (niet-canoniek)",
  },
  nx: {
    numSyllables1: "holpxay lì'kongä a mì stxo a'awve",
    numSyllables2: "holpxay lì'kongä a mì stxo soaiä",
    numSyllables3: "holpxay lì'kongä a mì stxo sa'semä",
    nameEnding: "tì'i'a tstxoä",
    nameEndingHint: "-'itan fpi fnelan, -'ite fpi fnele, -'itu fpi aylahe",
  },
  pl: {
    numSyllables1: "Liczba sylab w imieniu",
    numSyllables2: "Liczba sylab w nazwisku",
    numSyllables3: "Liczba sylab w imieniu rodzica",
    nameEnding: "Zakończenie imienia",
    nameEndingHint:
      "-'itan dla męskich, -'ite dla żeńskich, -'itu dla niebinarnych (niekanoniczne)",
  },
  pt: {
    numSyllables1: "Número de sílabas no primeiro nome",
    numSyllables2: "Número de sílabas no nome de familia",
    numSyllables3: "Número de sílabas no nome do parente",
    nameEnding: "Final do nome",
    nameEndingHint:
      "-'itan para masculino, -'ite para feminino, -'itu para não binário (não canônico)",
  },
  ru: {
    numSyllables1: "Количество слогов в имени",
    numSyllables2: "Количество слогов в фамилии",
    numSyllables3: "Количество слогов в имени родителя",
    nameEnding: "Окончание Имени",
    nameEndingHint:
      "-'itan для мужчин, -'ite для женщин, -'itu для небинарных (неканонический)",
  },
  sv: {
    numSyllables1: "Antal stavelser i förnamn",
    numSyllables2: "Antal stavelser i efternamn",
    numSyllables3: "Antal stavelser i föräldersnamn",
    nameEnding: "Namnändelse",
    nameEndingHint:
      "-'itan för manlig, -'ite för kvinnlig, -'itu för icke-binär (icke-kanonisk)",
  },
  tr: {
    numSyllables1: "İsimdeki hece sayısı",
    numSyllables2: "Soyadındaki hece sayısı",
    numSyllables3: "Ebeveyn adındaki hece sayısı",
    nameEnding: "İsim Sonu",
    nameEndingHint:
      "-'itan erkekler için, -'ite kadınlar için, -'itu cinsiyetsiz için (kanonik olmayan)",
  },
};

export default strings;
