import { Text } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { StyleSheet, TextStyle } from "react-native";

type ResultCountProps = {
  visible: boolean;
  resultCount: number;
  style?: TextStyle;
};

export function ResultCount({ visible, resultCount, style }: ResultCountProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  if (!visible) return null;

  if (["nx0", "nx1"].includes(appLanguage)) {
    const octalResultCount = resultCount.toString(8);
    return (
      <Text style={[styles.resultCount, style]}>
        {`°${octalResultCount}a ${ui.common.results(resultCount)}`}
      </Text>
    );
  }

  return (
    <Text style={[styles.resultCount, style]}>
      {`${resultCount} ${ui.common.results(resultCount)}`}
    </Text>
  );
}

const styles = StyleSheet.create({
  resultCount: {
    alignSelf: "center",
  },
});
