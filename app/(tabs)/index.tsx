import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { SearchBar } from "@/components/SearchBar";
import { Text, View } from "@/components/Themed";
import { useFwew } from "@/hooks/useFwew";
import { ScrollView, StyleSheet } from "react-native";

export default function TabOneScreen() {
  const [query, results, resultCount, search] = useFwew();

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} autoFocus />
      <ScrollView style={styles.results}>
        {query.length > 0 && resultCount > 0 && (
          <Text style={styles.resultCount}>
            {`${resultCount} result${resultCount === 1 ? "" : "s"}`}
          </Text>
        )}
        <FwewSearchResults results={results} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
  results: {
    width: "100%",
  },
});
