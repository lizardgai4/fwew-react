import { StyleSheet } from "react-native";
import { Word } from "../hooks/useFwew";
import { Text, View } from "./Themed";

interface ResultInfoProps {
  word: Word;
}

export function ResultInfo({ word }: ResultInfoProps) {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(word, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#eee",
  },
});
