import { ResultCount } from "@/components/ResultCount";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { ListOptions } from "@/components/list/ListOptions";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useList } from "@/hooks/useList";
import { ScrollView, StyleSheet } from "react-native";

export default function ListScreen() {
  const [query, results, search, execute] = useList();

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        search={search}
        placeholder="List"
        execute={execute}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        {results.length === 0 && <ListOptions query={query} onSelect={search} execute={execute} />}
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
