import { ResultCount } from "@/components/ResultCount";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import strings from "@/constants/ui/list";
import { useList } from "@/hooks/useList";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function ListScreen() {
  const { query, results, loading, search, execute } = useList();

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        search={search}
        placeholder={strings.en.list}
        execute={execute}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={execute} />
        }
      >
        <ListOptions query={query} onSelect={search} execute={execute} />
        <ResultCount
          visible={query.length > 0 && results.length > 0}
          resultCount={results.length}
        />
        <ListResults results={results} />
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
