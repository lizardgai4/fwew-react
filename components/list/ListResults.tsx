import { ResultCard } from "@/components/common/ResultCard";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import type { Word } from "fwew.js";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";

type ListResultsProps = {
  loading?: boolean;
  results: Word[] | null;
};

export function ListResults({ loading, results }: ListResultsProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { common } = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  if (loading && Platform.OS === "web") {
    return <ActivityIndicator size="large" />;
  }

  if (results == null || results.map == null) {
    return null;
  }

  if (results.length === 0) {
    return <Themed.Text style={styles.text}>{common.noResults}</Themed.Text>;
  }

  return (
    <View style={styles.container}>
      {results.map((word) => (
        <ResultCard key={word.ID} word={word} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingBottom: 32,
  },
  text: {
    alignSelf: "center",
    padding: 16,
    fontSize: 16,
  },
});
