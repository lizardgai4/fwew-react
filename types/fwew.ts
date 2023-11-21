export interface Affix {
  Prefix: string[];
  Infix: string[];
  Suffix: string[];
  Lenition: string[];
}
export interface Word {
  ID: string;
  Navi: string;
  IPA: string;
  InfixLocations: string;
  PartOfSpeech: string;
  Source: string;
  Stressed: string;
  Syllables: string;
  InfixDots: string;
  DE: string;
  EN: string;
  ET: string;
  FR: string;
  HU: string;
  NL: string;
  PL: string;
  RU: string;
  SV: string;
  TR: string;
  Affixes: Affix;
}

export type Results = Word[];
export type ResultSet = Word[][];
