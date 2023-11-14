import { MonoText } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import type { Word } from "@/types/fwew";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FwewResultInfo } from "./FwewResultInfo";

interface ResultCardProps {
  word: Word;
}

export function FwewResultCard({ word }: ResultCardProps) {
  const [expanded, setExpanded] = useState(false);
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? "#eeeeee" : "#000000";

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={toggleExpanded}>
        <Text style={styles.navi}>{word.Navi}</Text>
        <MonoText style={styles.partOfSpeech}>{word.PartOfSpeech}</MonoText>
        <Text style={styles.local} numberOfLines={1}>
          {word.EN}
        </Text>
        {expanded ? (
          <FontAwesome
            size={24}
            name="chevron-down"
            color={color}
            style={styles.arrow}
          />
        ) : (
          <FontAwesome
            size={24}
            name="chevron-right"
            color={color}
            style={styles.arrow}
          />
        )}
      </TouchableOpacity>
      {expanded && <FwewResultInfo word={word} />}
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
    flex: 1,
  },
  arrow: {
    marginLeft: "auto",
  },
});
