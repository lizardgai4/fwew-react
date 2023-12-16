import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { View } from "@/components/common/Themed";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useFwew } from "@/hooks/useFwew";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function SearchScreen() {
  const {
    query,
    naviOnly,
    results,
    resultCount,
    loading,
    search,
    setNaviOnly,
    execute,
  } = useFwew();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} autoFocus />
      <SwitchInput
        leftLabel={ui.naviOnly}
        rightLabel=""
        value={naviOnly}
        onValueChange={setNaviOnly}
      />
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
        <FwewSearchResults loading={loading} results={results} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});
