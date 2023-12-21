import { Accordion } from "@/components/common/Accordion";
import { ResultInfo } from "@/components/common/ResultInfo";
import { MonoText } from "@/components/common/StyledText";
import { Text } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import type { LanguageCode, Word } from "fwew.js";
import { StyleSheet, View, useColorScheme } from "react-native";

type ResultCardProps = {
  word: Word;
};

export function ResultCard({ word }: ResultCardProps) {
  const { resultsLanguage } = useResultsLanguage();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];

  return (
    <Accordion
      closedContent={
        <View style={styles.closedContainer}>
          <Text style={styles.navi}>{word.Navi}</Text>
          <View
            style={[styles.posContainer, { backgroundColor: colors.innerCard }]}
          >
            <MonoText style={styles.pos}>{word.PartOfSpeech}</MonoText>
          </View>
          <Text style={styles.local} numberOfLines={1}>
            {local}
          </Text>
        </View>
      }
      openedContent={<ResultInfo word={word} />}
    />
  );
}

const styles = StyleSheet.create({
  closedContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  navi: {
    fontSize: 24,
  },
  posContainer: {
    padding: 4,
    borderRadius: 4,
  },
  pos: {
    fontSize: 16,
  },
  local: {
    flex: 1,
    fontSize: 18,
    marginRight: 32,
  },
});
