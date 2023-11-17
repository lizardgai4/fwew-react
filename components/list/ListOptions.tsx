import { Text } from "@/components/Themed";
import { ListOptionsCond } from "@/components/list/ListOptionsCond";
import ListOptionsSpec from "@/components/list/ListOptionsSpec";
import { ListOptionsWhat } from "@/components/list/ListOptionsWhat";
import {
  ListExpressionAttribute,
  ListMenuCond,
  ListMenuItem,
  WhatValue,
} from "@/types/list";
import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";

interface ListOptionsProps {
  query: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  execute: () => void;
}

export function ListOptions({ query, onSelect, execute }: ListOptionsProps) {
  const [mode, setMode] = useState<ListExpressionAttribute>("what");
  const whatRef = useRef<ListMenuItem<WhatValue>>();

  const andButtonDisabled =
    query.length === 0 ||
    query.trim().split(" ").length < 3 ||
    (query.trim().split(" ").length + 1) % 4 !== 0 ||
    query.endsWith("and");

  const next = () => {
    const transitionMap = {
      what: "cond",
      cond: "spec",
      spec: "what",
    } as const;
    setMode((prev) => transitionMap[prev]);
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
      setMode("what");
    }
  }, [query]);

  return (
    <>
      <Text style={styles.title}>LIST OPTIONS</Text>
      {mode === "what" && <ListOptionsWhat onSelect={handleSelectWhat} />}
      {mode === "cond" && (
        <ListOptionsCond what={whatRef.current} onSelect={handleSelectCond} />
      )}
      {mode === "spec" && (
        <ListOptionsSpec
          execute={execute}
          handleSelectionSpec={handleSelectionSpec}
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
