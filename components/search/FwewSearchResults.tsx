import { ResultCard } from "@/components/common/ResultCard";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { Word } from "fwew.js";
import { ActivityIndicator, Platform, StyleSheet } from "react-native";
import { Text, View } from "../common/Themed";

type FwewSearchResultsProps = {
  loading?: boolean;
  results: Word[][];
};

export function FwewSearchResults(props: FwewSearchResultsProps) {
  const { loading, results } = props;
  const { appLanguage } = useAppLanguageContext();
  const { common } = i18n[appLanguage];

  if (loading && Platform.OS === "web") {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.outerContainer}>
      {results.map((result, i) => (
        <View key={`fsr_${i}`} style={styles.innerContainer}>
          {result.map((word, j) => {
            if (!word.ID) {
              return (
                <View key={`srl_${i}${j}`}>
                  <Text style={styles.label}>{word.Navi}</Text>
                  {j === result.length - 1 && (
                    <Text style={styles.text}>{common.noResults}</Text>
                  )}
                </View>
              );
            }
            return <ResultCard key={word.ID} word={word} />;
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    gap: 16,
    paddingBottom: 16,
  },
  innerContainer: {
    gap: 8,
  },
  text: {
    paddingHorizontal: 16,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
