import { MonoText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { FwewError, FwewNumber } from "fwew.js";
import { Fragment } from "react";
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
      <View style={styles.container}>
        <Text>{ui.common.noResults}</Text>
      </View>
    );
  }

  return (
    <CardView style={styles.container}>
      <Text style={styles.navi}>{result.name}</Text>
      <CardView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <CardView style={{ alignItems: "flex-end" }}>
          <Text style={styles.text}>{ui.numbers.octal}</Text>
          <Text style={styles.text}>{ui.numbers.decimal}</Text>
        </CardView>
        <CardView style={{ alignItems: "flex-end" }}>
          <MonoText style={styles.text}>{result.octal}</MonoText>
          <MonoText style={styles.text}>{result.decimal}</MonoText>
        </CardView>
      </CardView>
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
          <Fragment key={`nrp_${digit}_${i}`}>
            <Power base={`${digit}×8`} exponent={`${a.length - i - 1}`} />
          </Fragment>
        );
      }
      return (
        <Fragment key={`nrp_${digit}_${i}`}>
          <Power base={` + ${digit}×8`} exponent={`${a.length - i - 1}`} />
        </Fragment>
      );
    });
  return <MonoText>{octalDigits}</MonoText>;
}

function Power({ base, exponent }: { base: string; exponent: string }) {
  return (
    <CardView style={{ flexDirection: "row" }}>
      <MonoText style={{ fontSize: 18 }}>{base}</MonoText>
      <MonoText style={{ fontSize: 10 }}>{exponent}</MonoText>
    </CardView>
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
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
