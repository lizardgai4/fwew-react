import { MonoText } from "@/components/common/StyledText";
import { CardView, Text } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { FwewError, FwewNumber } from "fwew.js";
import { StyleSheet, View } from "react-native";

type NumberResultCardProps = {
  result: FwewNumber | FwewError | null;
};

export function NumberResultCard({ result }: NumberResultCardProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  if (!result) {
    return null;
  }

  if ("message" in result) {
    return (
      <View style={styles.container}>
        <Text>{ui.common.noResults}</Text>
      </View>
    );
  }

  return (
    <CardView style={styles.container}>
      <Text style={styles.navi}>{result.name}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.text}>{ui.numbers.octal}</Text>
          <Text style={styles.text}>{ui.numbers.decimal}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <MonoText style={styles.text}>{result.octal}</MonoText>
          <MonoText style={styles.text}>{result.decimal}</MonoText>
        </View>
      </View>
      <Scientific result={result} />
    </CardView>
  );
}

function Scientific({ result }: { result: FwewNumber }) {
  const octalDigits = result.octal
    .split("")
    .slice(1)
    .map((digit, i, a) => {
      if (i === 0) {
        return (
          <Power
            key={`nrp_${digit}_${i}`}
            base={`${digit}×8`}
            exponent={`${a.length - i - 1}`}
          />
        );
      }
      return (
        <Power
          key={`nrp_${digit}_${i}`}
          base={` + ${digit}×8`}
          exponent={`${a.length - i - 1}`}
        />
      );
    });
  return <View style={{ flexDirection: "row" }}>{octalDigits}</View>;
}

function Power({ base, exponent }: { base: string; exponent: string }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <MonoText style={{ fontSize: 18 }}>{base}</MonoText>
      <MonoText style={{ fontSize: 12 }}>{exponent}</MonoText>
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
    fontSize: 24,
    userSelect: "text",
  },
  text: {
    fontSize: 18,
    padding: 8,
    userSelect: "text",
  },
});
