import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import type { Dialect } from "fwew.js";
import { nameSingle } from "fwew.js";
import { useEffect, useState } from "react";

export default function useNameSingle() {
  const [numNames, setNumNames] = useState<NumericString | undefined>();
  const [numSyllables, setNumSyllables] = useState<NumericString | undefined>();
  const [dialect, setDialect] = useState<Dialect | undefined>();
  const [names, setNames] = useState<string[]>([]);
  const debounce = useDebounce();

  const execute = async () => {
    if (!numNames || !numSyllables || !dialect) return;
    const names = await nameSingle(numNames, numSyllables, dialect);
    setNames(names.trim().split("\n"));
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
  }, [numNames, numSyllables, dialect]);

  return {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    dialect,
    setDialect,
    execute,
  };
}
