import { ResultCard } from "@/components/common/ResultCard";
import { Text } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { Word } from "fwew.js";
import { ActivityIndicator, Platform, StyleSheet } from "react-native";

type ListResultsProps = {
  loading?: boolean;
  results: Word[] | null;
};

export function ListResults({ loading, results }: ListResultsProps) {
  const { appLanguage } = useAppLanguageContext();
  const { common } = i18n[appLanguage];

  if (loading && Platform.OS === "web") {
    return <ActivityIndicator size="large" />;
  }

  if (results == null || results.map == null) {
    return null;
  }

  if (results.length === 0) {
    return <Text style={styles.text}>{common.noResults}</Text>;
  }

  return (
    <>
      {results.map((word) => (
        <ResultCard key={word.ID} word={word} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    padding: 16,
    fontSize: 16,
  },
});
