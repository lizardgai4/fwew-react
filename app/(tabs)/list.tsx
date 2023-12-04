import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { View } from "@/components/common/Themed";
import { ListOptions } from "@/components/list/ListOptions";
import { ListResults } from "@/components/list/ListResults";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useList } from "@/hooks/useList";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function ListScreen() {
  const { query, results, loading, search, execute } = useList();
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        search={search}
        placeholder={ui.list}
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
