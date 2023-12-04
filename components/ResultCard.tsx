import { Accordion } from "@/components/Accordion";
import { ResultInfo } from "@/components/ResultInfo";
import { MonoText } from "@/components/StyledText";
import { Text } from "@/components/Themed";
import { useResultsLanguage } from "@/hooks/useResultsLanguage";
import type { LanguageCode, Word } from "fwew.js";
import { StyleSheet } from "react-native";

type ResultCardProps = {
  word: Word;
};

export function ResultCard({ word }: ResultCardProps) {
  const { resultsLanguage } = useResultsLanguage();
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];

  return (
    <Accordion
      closedContent={
        <>
          <Text style={styles.navi}>{word.Navi}</Text>
          <MonoText style={styles.partOfSpeech}>{word.PartOfSpeech}</MonoText>
          <Text style={styles.local} numberOfLines={1}>
            {local}
          </Text>
        </>
      }
      openedContent={<ResultInfo word={word} />}
    />
  );
}

const styles = StyleSheet.create({
  navi: {
    fontSize: 24,
  },
  partOfSpeech: {
    fontSize: 16,
  },
  local: {
    flex: 1,
  },
});
