import { Accordion } from "@/components/Accordion";
import { MonoText } from "@/components/StyledText";
import { Text } from "@/components/Themed";
import { FwewResultInfo } from "@/components/search/FwewResultInfo";
import type { Word } from "fwew.js";
import { StyleSheet } from "react-native";

interface ResultCardProps {
  word: Word;
}

export function FwewResultCard({ word }: ResultCardProps) {
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
      openedContent={<FwewResultInfo word={word} />}
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
