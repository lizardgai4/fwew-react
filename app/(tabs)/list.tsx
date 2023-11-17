import { SearchBar } from "@/components/SearchBar";
import { Text, View } from "@/components/Themed";
import { ListOptionsCond } from "@/components/list/ListOptionsCond";
import { ListOptionsWhat } from "@/components/list/ListOptionsWhat";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import Colors from "@/constants/Colors";
import {
  ListExpressionAttribute,
  ListMenuCond,
  ListMenuItem,
  WhatValue,
} from "@/constants/List";
import { Results } from "@/types/fwew";
import { list } from "fwew.js";
import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export default function ListScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Results>([]);

  const args = query.trim().split(" ");

  const execute = () => {
    if (args.length === 0) {
      setResults([]);
      return;
    }
    setResults(list(args));
  };

  useEffect(() => {
    if (results.length > 0 && query === "") {
      setResults([]);
      return;
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={setQuery} autoFocus placeholder="List" />
      <ScrollView keyboardShouldPersistTaps="always">
        <ListOptions query={query} onSelect={setQuery} execute={execute} />
        {query.length > 0 && results.length > 0 && (
          <Text style={styles.resultCount}>
            {`${results.length} result${results.length === 1 ? "" : "s"}`}
          </Text>
        )}
        <FwewSearchResults results={[results]} />
      </ScrollView>
    </View>
  );
}

interface ListOptionsProps {
  query: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  execute: () => void;
}

export function ListOptions({ query, onSelect, execute }: ListOptionsProps) {
  const [mode, setMode] = useState<ListExpressionAttribute>("what");
  const whatRef = useRef<ListMenuItem<WhatValue>>();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

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
        <View style={styles.specButtonContainer}>
          <TouchableOpacity
            onPress={handleSelectionSpec}
            style={[
              styles.button,
              {
                borderColor: andButtonDisabled
                  ? colors.placeholder
                  : colors.text,
              },
            ]}
            disabled={andButtonDisabled}
          >
            <Text
              style={{
                color: andButtonDisabled ? colors.placeholder : colors.text,
              }}
            >
              AND...
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={execute}
            style={[
              styles.button,
              {
                borderColor: andButtonDisabled
                  ? colors.placeholder
                  : colors.text,
              },
            ]}
            disabled={andButtonDisabled}
          >
            <Text
              style={{
                color: andButtonDisabled ? colors.placeholder : colors.text,
              }}
            >
              GO
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    marginTop: 10,
  },
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
  specButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  button: {
    width: 80,
    alignSelf: "center",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
