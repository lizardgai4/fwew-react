import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { PhonemeFrequencyMap } from "fwew.js";
import { dictLen, phonemeFrequency } from "fwew.js";
import { useEffect, useState } from "react";

// Helper to ensure numbers are guaranteed from maps
let numberOnly: number = 0

function assign(value: number | undefined) {
  // if value is null or undefined, don't do anything
  if (typeof value === 'number') {
     numberOnly = value;
  } else {
    numberOnly = 0
  }
}

export function useStats() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState<String>();
  const [phonemeGrid, setPhonemes] = useState<String[][]>([]);
  const [clusterMap, setClusters] = useState<number[][]>([]);
  const debounce = useDebounce();
  let abortController = new AbortController();

  const execute = async () => {
    setLoading(true);

    let data1: String;
    let data2: Map<string,Map<string,Map<string,number>>>
    let value1: Map<string,Map<string,number>>
    
    try {
        data1 = await dictLen({
          signal: abortController.signal,
        });
        data2 = await phonemeFrequency({
          signal: abortController.signal,
        });
    } catch (e: any) {
      setLoading(false);
      return;
    }

    let i: number = 0
    let phonemeGrid: string[][] = [[],[],[]];
    let clusterMap: number[][] = [[],[],[]];

    let clusters1: string[] = ["f", "s", "ts"];
    let clusters2: string[] = ["p", "t", "k", "px", "tx", "kx", "m", "n", "ng", "r", "l", "w", "y"];

    for (const [key, value1] of data2.entries()) {
      if (key == "Clusters") {
        i = 0
        clusters1.forEach((consonant1: string) => {
          clusters2.forEach((consonant2: string) => {
            assign(data2.get(key)?.get(consonant1)?.get(consonant2))
            clusterMap[i].push(numberOnly);
          });
          i += 1
        });
      } else {
        i = 0
        for (const [key, value2] of Object.entries(value1)) {
          phonemeGrid[i].push(key)
          for (const [key, value3] of Object.entries(value2)) {
            phonemeGrid[i].push(String(value3) + " " + key)
          }
          i += 1
        }
      }
    }
    
    setWordCount(data1)
    setPhonemes(phonemeGrid);
    setClusters(clusterMap);
    setLoading(false);
  };

  const cancel = () => {
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
  }, [resultsLanguage]);

  return {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
    execute,
    cancel,
  } as const;
}
