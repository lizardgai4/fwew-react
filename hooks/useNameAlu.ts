import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import type { AdjectiveMode, Dialect, NounMode } from "fwew.js";
import { nameAlu } from "fwew.js";
import { useEffect, useState } from "react";

export function useNameAlu() {
  const [numNames, setNumNames] = useState<NumericString | undefined>();
  const [numSyllables, setNumSyllables] = useState<NumericString | undefined>();
  const [nounMode, setNounMode] = useState<NounMode | undefined>();
  const [adjMode, setAdjMode] = useState<AdjectiveMode | undefined>();
  const [dialect, setDialect] = useState<Dialect | undefined>();
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const debounce = useDebounce();

  const execute = async () => {
    if (!numNames || !numSyllables || !nounMode || !adjMode || !dialect) {
      return;
    }
    setLoading(true);
    const results = await nameAlu(
      numNames,
      numSyllables,
      nounMode,
      adjMode,
      dialect
    );
    setNames(results.trim().split("\n"));
    setLoading(false);
  };

  const updateNumNames = (text: string) => {
    if (text === "") {
      setNumNames(undefined);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 50 || num < 1) return;
    setNumNames(`${num}`);
  };

  const updateNumSyllables = (text: string) => {
    if (text === "") {
      setNumSyllables(undefined);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 1) return;
    setNumSyllables(`${num}`);
  };

  useEffect(() => {
    debounce(execute, 300);
  }, [numNames, numSyllables, nounMode, adjMode, dialect]);

  return {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    nounMode,
    setNounMode,
    adjMode,
    setAdjMode,
    dialect,
    setDialect,
    loading,
    execute,
  };
}
