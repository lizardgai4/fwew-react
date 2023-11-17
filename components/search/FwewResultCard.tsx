import { MonoText } from "@/components/StyledText";
import { Text } from "@/components/Themed";
import type { Word } from "fwew.js";
import { StyleSheet } from "react-native";
import { Accordion } from "../Accordion";
import { FwewResultInfo } from "./FwewResultInfo";

interface ResultCardProps {
  word: Word;
}

export function FwewResultCard({ word }: ResultCardProps) {
  return (
    <Accordion
      closedContent={
        <>
          <Text style={styles.navi}>{word.data.Navi}</Text>
          <MonoText style={styles.partOfSpeech}>
            {word.data.PartOfSpeech}
          </MonoText>
          <Text style={styles.local} numberOfLines={1}>
            {word.data.EN}
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
