import { ResultCount } from "@/components/common/ResultCount";
import { SearchBar } from "@/components/common/SearchBar";
import { SwitchInput } from "@/components/common/SwitchInput";
import { FwewSearchResults } from "@/components/search/FwewSearchResults";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useValid } from "@/hooks/useValid";
import { useTheme } from "@react-navigation/native";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/common/Themed";

export default function ValidScreen() {
  const {
    query,
    results,
    loading,
    search,
    execute,
    cancel,
  } = useValid();
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  var bold = false

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
      <SearchBar query={query} search={search} cancel={cancel} autoFocus />
      {bold = false}
      {results.map((row) => (
          <Text style={styles.container}>{row}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontSize: 16
  },
});
