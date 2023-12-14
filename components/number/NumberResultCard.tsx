import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { FwewError, FwewNumber } from "fwew.js";
import { StyleSheet } from "react-native";

type NumberResultCardProps = {
  result: FwewNumber | FwewError | null;
};

export function NumberResultCard({ result }: NumberResultCardProps) {
  const appLanguageValue = useAppLanguageContext();
  const appLanguage = appLanguageValue?.appLanguage ?? "en";
  const ui = i18n[appLanguage];

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
      <Text style={styles.navi}>{result.name}</Text>
      <View style={styles.numbersContainer}>
        <View style={styles.number}>
          <Text style={styles.label}>{ui.numbers.octal}</Text>
          <Text style={styles.value}>{result.octal}</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.label}>{ui.numbers.decimal}</Text>
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
