import { Text } from "@/components/Themed";
import { ListOptionsCond } from "@/components/list/ListOptionsCond";
import { ListOptionsSpec } from "@/components/list/ListOptionsSpec";
import { ListOptionsWhat } from "@/components/list/ListOptionsWhat";
import { useListOptions } from "@/hooks/useListOptions";
import type { ListMenuCond, ListMenuItem, WhatValue } from "@/types/list";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

interface ListOptionsProps {
  query: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  execute: () => void;
}

export function ListOptions({ query, onSelect, execute }: ListOptionsProps) {
  const { whatRef, mode, setMode, nextMode } = useListOptions();

  const andButtonDisabled =
    query.length === 0 ||
    query.trim().split(" ").length < 3 ||
    (query.trim().split(" ").length + 1) % 4 !== 0 ||
    query.trim().endsWith("and");

  const handleSelectWhat = (what: ListMenuItem<WhatValue>) => {
    onSelect((prev) => (prev ? `${prev} ${what.value} ` : what.value));
    whatRef.current = what;
    nextMode();
  };

  const handleSelectCond = (cond: ListMenuCond[WhatValue][number]) => {
    onSelect((prev) => (prev ? `${prev} ${cond.value} ` : cond.value));
    nextMode();
  };

  const handleSelectionSpec = () => {
    onSelect((prev) => (prev ? `${prev} and ` : ""));
    nextMode();
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
