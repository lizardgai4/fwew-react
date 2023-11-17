import { ResultCount } from "@/components/ResultCount";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { ListOptions } from "@/components/list/ListOptions";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import type { Results } from "@/types/fwew";
import { list } from "fwew.js";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

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
        <ResultCount
          visible={query.length > 0 && results.length > 0}
          resultCount={results.length}
        />
        <FwewSearchResults results={[results]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
});
