import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import type { Word } from "fwew.js/dist/types";
import { StyleSheet, useColorScheme } from "react-native";

interface ResultInfoProps {
  word: Word;
}

export function FwewResultInfo({ word }: ResultInfoProps) {
  const colorScheme = useColorScheme();
  const { text } = Colors[colorScheme ?? "light"];

  return (
    <View style={[styles.container, { borderColor: text }]}>
      <Text>{JSON.stringify(word, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
