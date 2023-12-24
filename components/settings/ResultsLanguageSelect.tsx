import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { CardView, Text } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import { ResultsLanguages } from "@/constants/Language";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { StyleSheet } from "react-native";

export function ResultsLanguageSelect() {
  const { resultsLanguage, saveResultsLanguage } = useResultsLanguageContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];

  return (
    <Accordion
      closedContent={
        <CardView style={styles.iconContainer}>
          {FlagMap[resultsLanguage]}
          <Text style={styles.value}>{ui.settings.resultsLanguage}</Text>
        </CardView>
      }
      openedContent={
        <>
          {ResultsLanguages.map((language, i) => (
            <OptionItem
              key={i}
              icon={FlagMap[language.value]}
              value={language.label}
              selected={resultsLanguage === language.value}
              onSelect={() => saveResultsLanguage(language.value)}
            />
          ))}
        </>
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
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
