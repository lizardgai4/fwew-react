import { Text } from "@/components/Themed";
import strings from "@/constants/ui/common";
import { StyleSheet } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
};

export function ResultCount({ visible, resultCount }: ResultCountProps) {
  if (!visible) return null;

  return (
    <Text style={styles.resultCount}>
      {`${resultCount} ${
        resultCount === 1 ? strings.en.result : strings.en.results
      }`}
    </Text>
  );
}

const styles = StyleSheet.create({
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
});
