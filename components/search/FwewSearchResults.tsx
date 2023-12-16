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

export function FwewSearchResults({
  loading,
  results,
}: FwewSearchResultsProps) {
  const { appLanguage } = useAppLanguageContext();
  const { common } = i18n[appLanguage];

  if (loading && Platform.OS === "web") {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      {results.map((result, i) => (
        <View key={`fsr_${i}`}>
          {result.map((word, j) => {
            if (!word.ID) {
              return (
                <>
                  <Text
                    key={`srl_${i}`}
                    style={[styles.label, i === 0 ? styles.first : null]}
                  >
                    {word.Navi}
                  </Text>
                  {j === result.length - 1 && (
                    <Text style={styles.text}>{common.noResults}</Text>
                  )}
                </>
              );
            }
            return <ResultCard key={word.ID} word={word} />;
          })}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 16,
    fontSize: 16,
  },
  label: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  first: {
    paddingTop: 0,
  },
});
