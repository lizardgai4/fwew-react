import { ResultCard } from "@/components/common/ResultCard";
import { Text } from "@/components/common/Themed";
import strings from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { Word } from "fwew.js";
import { ActivityIndicator, Platform, StyleSheet } from "react-native";

type ListResultsProps = {
  loading?: boolean;
  results: Word[];
};

export function ListResults({ loading, results }: ListResultsProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  if (loading && Platform.OS === "web") {
    return <ActivityIndicator size="large" />;
  }
  if (
    results === undefined ||
    results.map === undefined ||
    results.length === 0
  ) {
    return <Text style={styles.text}>{ui.noResults}</Text>;
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
  spinner: {
    alignSelf: "center",
    padding: 16,
  },
  text: {
    alignSelf: "center",
    padding: 16,
    fontSize: 16,
  },
});
