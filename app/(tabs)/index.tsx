import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { View } from "@/components/common/Themed";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { NaviOnlySwitch } from "@/components/search/NaviOnlySwitch";
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

  return (
    <View style={styles.container}>
      <SearchBar query={query} search={search} autoFocus />
      <NaviOnlySwitch value={naviOnly} onValueChange={setNaviOnly} />
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
        <FwewSearchResults results={results} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
