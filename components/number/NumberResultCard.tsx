import { Text, View } from "@/components/Themed";
import type { FwewNumber, FwewError } from "fwew.js/dist/types";
import { StyleSheet } from "react-native";

interface NumberResultCardProps {
  result: FwewNumber | FwewError | null;
}

export function NumberResultCard({ result }: NumberResultCardProps) {
  if (!result) {
    return null;
  }

  if ("message" in result) {
    return (
      <View style={{ alignItems: "center", padding: 16 }}>
        <Text>{result.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.navi}>{result.navi}</Text>
      <View style={styles.numbersContainer}>
        <View style={styles.number}>
          <Text style={styles.label}>octal:</Text>
          <Text style={styles.value}>{result.octal}</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.label}>decimal:</Text>
          <Text style={styles.value}>{result.decimal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  navi: {
    fontSize: 32,
    padding: 16,
  },
  numbersContainer: {
    alignItems: "flex-start",
  },
  number: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 8,
  },
  label: {
    fontSize: 24,
  },
  value: {
    fontSize: 18,
  },
});
