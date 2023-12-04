import { ResultCount } from "@/components/ResultCount";
import { SearchBar } from "@/components/SearchBar";
import { View } from "@/components/Themed";
import { ListResults } from "@/components/list/ListResults";
import { RandomOptions } from "@/components/random/RandomOptions";
import strings from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useRandom } from "@/hooks/useRandom";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function RandomScreen() {
  const { numWords, query, results, loading, setNumWords, search, execute } =
    useRandom();
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        search={search}
        placeholder={ui.random}
        execute={execute}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={execute} />
        }
      >
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
