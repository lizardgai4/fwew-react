import { MonoText } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import type { Word } from "fwew.js";
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
  const { text } = Colors[colorScheme ?? "light"];

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, { borderColor: text }]}
        onPress={toggleExpanded}
      >
        <Text style={styles.navi}>{word.data.Navi}</Text>
        <MonoText style={styles.partOfSpeech}>
          {word.data.PartOfSpeech}
        </MonoText>
        <Text style={styles.local} numberOfLines={1}>
          {word.data.EN}
        </Text>
        {expanded ? (
          <FontAwesome
            size={24}
            name="chevron-down"
            color={text}
            style={styles.arrow}
          />
        ) : (
          <FontAwesome
            size={24}
            name="chevron-right"
            color={text}
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
