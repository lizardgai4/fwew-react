import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { NonSearchResults } from "@/components/multi_ipa/MultiIPA";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useOddballs } from "@/hooks/useOddballs";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function OddballsScreen() {
  const {
    results,
    resultCount,
    loading,
    execute,
  } = useOddballs();
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
      }
    >
      <ResultCount
        visible={resultCount > 0}
        resultCount={resultCount}
      />
      <NonSearchResults loading={loading} results={results} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
