import { Text } from "@/components/common/Themed";
import { ListOptionsCond } from "@/components/list/ListOptionsCond";
import { ListOptionsSpec } from "@/components/list/ListOptionsSpec";
import { ListOptionsWhat } from "@/components/list/ListOptionsWhat";
import { RandomOptionsNum } from "@/components/random/RandomOptionsNum";
import strings from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { ListMenuCond, ListMenuItem, WhatValue } from "@/types/list";
import { RandomExpressionAttribute } from "@/types/random";
import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";

type RandomOptionsProps = {
  numWords: string;
  setNumWords: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  execute: () => void;
};

export function RandomOptions({
  numWords,
  setNumWords,
  query,
  onSelect,
  execute,
}: RandomOptionsProps) {
  const [mode, setMode] = useState<RandomExpressionAttribute>("num");
  const whatRef = useRef<ListMenuItem<WhatValue>>();
  const appLanguageValue = useAppLanguageContext();
  const appLanguage = appLanguageValue?.appLanguage ?? "en";
  let ui = strings[appLanguage] ?? strings["en"];

  const andButtonDisabled =
    query.length === 0 ||
    query.trim().split(" ").length < 5 ||
    (query.trim().split(" ").length + 3) % 4 !== 0 ||
    query.endsWith("and");

  const next = () => {
    const transitionMap = {
      num: "what",
      what: "cond",
      cond: "spec",
      spec: "what",
    } as const;
    if (mode === "num") {
      onSelect((prev) => `${prev} where `);
    }
    setMode((prev) => transitionMap[prev]);
  };

  const handleChangeNumWords = (num: string) => {
    const n = +num;
    if (isNaN(n)) {
      return;
    }
    setNumWords(num);
    onSelect(`${num}`);
  };

  const handleSelectWhat = (what: ListMenuItem<WhatValue>) => {
    onSelect((prev) => (prev ? `${prev} ${what.value} ` : what.value));
    whatRef.current = what;
    next();
  };

  const handleSelectCond = (cond: ListMenuCond[WhatValue][number]) => {
    onSelect((prev) => (prev ? `${prev} ${cond.value} ` : cond.value));
    next();
  };

  const handleSelectionSpec = () => {
    onSelect((prev) => (prev ? `${prev} and ` : ""));
    next();
  };

  useEffect(() => {
    if (query.includes("  ")) {
      onSelect((prev) => prev.replace("  ", " "));
    }
    if (query === "") {
      setMode("num");
    }
  }, [query]);

  return (
    <>
      <Text style={styles.title}>{ui.randomOptions}</Text>
      {mode === "num" && (
        <RandomOptionsNum
          numWords={numWords}
          onSelect={handleChangeNumWords}
          execute={execute}
          next={next}
        />
      )}
      {mode === "what" && <ListOptionsWhat onSelect={handleSelectWhat} />}
      {mode === "cond" && (
        <ListOptionsCond what={whatRef.current} onSelect={handleSelectCond} />
      )}
      {mode === "spec" && (
        <ListOptionsSpec
          execute={execute}
          onSelect={handleSelectionSpec}
          andButtonDisabled={andButtonDisabled}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    marginTop: 10,
  },
});
