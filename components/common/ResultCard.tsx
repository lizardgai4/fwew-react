import { Accordion } from "@/components/common/Accordion";
import { ResultInfo } from "@/components/common/ResultInfo";
import { MonoText } from "@/components/common/StyledText";
import { Text } from "@/components/common/Themed";
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
