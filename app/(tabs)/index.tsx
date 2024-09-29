import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useFwew } from "@/hooks/useFwew";
import { useTheme } from "@react-navigation/native";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

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
    cancel,
  } = useFwew();
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).search;
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const ratio =
    [
      { breakpoint: 1280, value: 3 },
      { breakpoint: 950, value: 2 },
      { breakpoint: 720, value: 1 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;

  return (
    <View
      style={[styles.container, { flexDirection: wide ? "row" : "column" }]}
    >
      <View style={{ flex: wide ? 1 : undefined }}>
        <SearchBar
          query={query}
          search={search}
          execute={execute}
          cancel={cancel}
          autoFocus
        />
        <SwitchInput
          leftLabel={ui.naviOnly}
          rightLabel=""
          value={naviOnly}
          onValueChange={setNaviOnly}
        />
      </View>
      <View style={{ flex: ratio }}>
        <ResultCount
          visible={query.length > 0 && resultCount > 0}
          resultCount={resultCount}
          style={styles.resultCount}
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={execute}
              colors={[colors.primary]}
            />
          }
        >
          <FwewSearchResults loading={loading} results={results} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  resultCount: {
    padding: 16,
  },
});
