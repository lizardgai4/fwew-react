import { ResultCount } from "@/components/common/ResultCount";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { SearchBar } from "@/components/common/SearchBar";
import { View } from "@/components/common/Themed";
import { useFwew } from "@/hooks/useFwew";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function SearchScreen() {
  const { query, results, resultCount, loading, search, execute } = useFwew();

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} autoFocus />
      <ScrollView
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={execute} />
        }
      >
        <ResultCount
          visible={query.length > 0 && resultCount > 0}
          resultCount={resultCount}
        />
        <FwewSearchResults query={query} results={results} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
