import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
};

export function ResultCount({ visible, resultCount }: ResultCountProps) {
  if (!visible) return null;

  return (
    <Text style={styles.resultCount}>
      {`${resultCount} result${resultCount === 1 ? "" : "s"}`}
    </Text>
  );
}

const styles = StyleSheet.create({
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
});
