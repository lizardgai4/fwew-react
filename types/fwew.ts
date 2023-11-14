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
  Affixes: {
    Prefix: string | null;
    Infix: string | null;
    Suffix: string | null;
    Lenition: string | null;
    Comment: string | null;
  };
}

export type Results = Word[];
export type ResultSet = Results[];
