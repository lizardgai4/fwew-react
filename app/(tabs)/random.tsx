import { ResultCount } from "@/components/ResultCount";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { RandomOptions } from "@/components/random/RandomOptions";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { useRandom } from "@/hooks/useRandom";
import { ScrollView, StyleSheet } from "react-native";

export default function RandomScreen() {
  const [numWords, query, results, setNumWords, search, execute] = useRandom();

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} placeholder="Random" />
      <ScrollView keyboardShouldPersistTaps="always">
        <RandomOptions
          numWords={numWords}
          setNumWords={setNumWords}
          query={query}
          onSelect={search}
          execute={execute}
        />
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
