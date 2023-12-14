import { Text } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
};

export function ResultCount({ visible, resultCount }: ResultCountProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];
  if (!visible) return null;

  if (appLanguage === "nx") {
    const octalResultCount = resultCount.toString(8);
    return (
      <Text style={styles.resultCount}>
        {`°${octalResultCount}a ${ui.common.result}`}
      </Text>
    );
  }

  return (
    <Text style={styles.resultCount}>
      {`${resultCount} ${
        resultCount === 1 ? ui.common.result : ui.common.results
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
