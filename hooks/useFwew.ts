import type { ResultSet } from "@/types/fwew";
import { useEffect, useState } from "react";
import Api from "../constants/Api";
import { useDebounce } from "./useDebounce";

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
