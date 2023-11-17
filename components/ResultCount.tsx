import { Text } from "@/components/Themed";
import { StyleSheet } from "react-native";

interface ResultCountProps {
  visible: boolean;
  resultCount: number;
}

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
