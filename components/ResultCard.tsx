import { Accordion } from "@/components/Accordion";
import { MonoText } from "@/components/StyledText";
import { Text } from "@/components/Themed";
import { ResultInfo } from "@/components/ResultInfo";
import type { Word } from "fwew.js";
import { StyleSheet } from "react-native";

type ResultCardProps = {
  word: Word;
};

export function ResultCard({ word }: ResultCardProps) {
  return (
    <Accordion
      closedContent={
        <>
          <Text style={styles.navi}>{word.Navi}</Text>
          <MonoText style={styles.partOfSpeech}>{word.PartOfSpeech}</MonoText>
          <Text style={styles.local} numberOfLines={1}>
            {word.EN}
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
