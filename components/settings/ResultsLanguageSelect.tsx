import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { CardView, Text } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import { ResultsLanguages } from "@/constants/Language";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { StyleSheet, View } from "react-native";

export function ResultsLanguageSelect() {
  const { resultsLanguage, saveResultsLanguage } = useResultsLanguageContext();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <CardView style={styles.iconContainer}>
          <View style={styles.icon}>{FlagMap[resultsLanguage]}</View>
          <Text style={styles.value}>{ui.settings.resultsLanguage}</Text>
        </CardView>
      }
      openedContent={
        <CardView style={styles.contentContainer}>
          {ResultsLanguages.map((language, i) => (
            <CardView key={`srl_${i}`}>
              <OptionItem
                icon={FlagMap[language.value]}
                value={language.label}
                selected={resultsLanguage === language.value}
                onSelect={() => saveResultsLanguage(language.value)}
              />
            </CardView>
          ))}
        </CardView>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  icon: {
    paddingHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
