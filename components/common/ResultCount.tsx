import { Text } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet, TextStyle } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
  style?: TextStyle;
};

export function ResultCount({ visible, resultCount, style }: ResultCountProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];
  if (!visible) return null;

  if (appLanguage === "nx") {
    const octalResultCount = resultCount.toString(8);
    return (
      <Text style={[styles.resultCount, style]}>
        {`°${octalResultCount}a ${ui.common.result}`}
      </Text>
    );
  }

  return (
    <Text style={[styles.resultCount, style]}>
      {`${resultCount} ${
        resultCount === 1 ? ui.common.result : ui.common.results
      }`}
    </Text>
  );
}

const styles = StyleSheet.create({
  resultCount: {
    alignSelf: "center",
  },
});
