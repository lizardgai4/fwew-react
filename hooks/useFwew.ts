import { useEffect, useState } from "react";
import Api from "../constants/Api";
import { useDebounce } from "./useDebounce";

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

export function useFwew(): [string, ResultSet, (query: string) => void] {
  const [query, search] = useState("");
  const [results, setResults] = useState<ResultSet>([]);
  const debounce = useDebounce();

  const fwew = async () => {
    if (!query) {
      setResults([]);
      return;
    }
    try {
      const response0 = await fetch(`${Api.url}/fwew/${query}`);
      const results0 = (await response0.json()) as ResultSet;
      const response1 = await fetch(`${Api.url}/fwew/r/en/${query}`);
      const results1 = (await response1.json()) as ResultSet;
      setResults([...results0, ...results1]);
    } catch (error) {
      console.log(error);
      setResults([]);
    }
  };

  useEffect(() => {
    debounce(fwew, 500);
  }, [query]);

  return [query, results, search];
}
