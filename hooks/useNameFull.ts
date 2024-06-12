import { useDebounce } from "@/hooks/useDebounce";
import type { NumericString } from "@/types/common";
import type { Dialect, NameEnding } from "fwew.js";
import { nameFull } from "fwew.js";
import { useEffect, useState } from "react";

export function useNameFull() {
  const [ending, setEnding] = useState<NameEnding>("random");
  const [numNames, setNumNames] = useState<NumericString>("4");
  const [syllables1, setSyllables1] = useState<NumericString>("0");
  const [syllables2, setSyllables2] = useState<NumericString>("0");
  const [syllables3, setSyllables3] = useState<NumericString>("0");
  const [dialect, setDialect] = useState<Dialect>("forest");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const debounce = useDebounce();

  const execute = async () => {
    if (!ending) return;
    if (!numNames) return;
    if (!syllables1) return;
    if (!syllables2) return;
    if (!syllables3) return;
    if (!dialect) return;
    setLoading(true);
    const names = await nameFull(
      ending,
      numNames,
      syllables1,
      syllables2,
      syllables3,
      dialect
    );
    setNames(names.trim().split("\n"));
    setLoading(false);
  };

  const updateNumNames = (text: string) => {
    if (text === "") {
      setNumNames(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 50 || num < 1) return;
    setNumNames(`${num}`);
  };

  const updateSyllables1 = (text: string) => {
    if (text === "") {
      setSyllables1(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setSyllables1(`${num}`);
  };

  const updateSyllables2 = (text: string) => {
    if (text === "") {
      setSyllables2(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setSyllables2(`${num}`);
  };

  const updateSyllables3 = (text: string) => {
    if (text === "") {
      setSyllables3(text);
      setNames([]);
      return;
    }
    const num = parseInt(text);
    if (isNaN(num) || num > 4 || num < 0) return;
    setSyllables3(`${num}`);
  };

  useEffect(() => {
    debounce(execute);
  }, [ending, numNames, syllables1, syllables2, syllables3, dialect]);

  return {
    names,
    numNames,
    updateNumNames,
    syllables1,
    updateSyllables1,
    syllables2,
    updateSyllables2,
    syllables3,
    updateSyllables3,
    dialect,
    setDialect,
    ending,
    setEnding,
    loading,
    execute,
  };
}
