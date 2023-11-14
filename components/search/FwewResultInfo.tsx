import { Word } from "@/hooks/useFwew";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

interface ResultInfoProps {
  word: Word;
}

export function FwewResultInfo({ word }: ResultInfoProps) {
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
