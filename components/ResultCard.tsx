import { Pressable, StyleSheet } from "react-native";
import { Word } from "../hooks/useFwew";
import { Text, View } from "./Themed";
import { MonoText } from "./StyledText";
import { useState } from "react";
import { ResultInfo } from "./ResultInfo";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ResultCardProps {
  word: Word;
}

export function ResultCard({ word }: ResultCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggleExpanded}>
        <Text style={styles.navi}>{word.Navi}</Text>
        <MonoText style={styles.partOfSpeech}>{word.PartOfSpeech}</MonoText>
        <Text>{word.EN}</Text>
        {expanded ? (
          <MonoText style={styles.arrow}>&#9660;</MonoText>
        ) : (
          <MonoText style={styles.arrow}>&#9654;</MonoText>
        )}
      </TouchableOpacity>
      {expanded && <ResultInfo word={word} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
  navi: {
    fontSize: 24,
  },
  partOfSpeech: {
    fontSize: 16,
  },
  local: {
    fontSize: 12,
  },
  arrow: {
    marginLeft: "auto",
    fontSize: 24,
  },
});
