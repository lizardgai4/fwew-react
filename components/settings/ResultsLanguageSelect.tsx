import { Accordion } from "@/components/Accordion";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { FlagMap } from "@/components/settings/Flags";
import type { ExtendedLanguageCode } from "@/constants/ui/settings";
import strings, { ResultsLanguages } from "@/constants/ui/settings";
import { useState } from "react";
import { StyleSheet } from "react-native";

export function ResultsLanguageSelect() {
  const [resultsLanguage, setResultsLanguage] =
    useState<ExtendedLanguageCode>("en");

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          {FlagMap[resultsLanguage]}
          <Text style={styles.value}>{strings.en.resultsLanguage}</Text>
        </View>
      }
      openedContent={
        <>
          {ResultsLanguages.map((language, i) => (
            <OptionItem
              key={i}
              icon={FlagMap[language.value]}
              value={language.label}
              selected={resultsLanguage === language.value}
              onSelect={() => setResultsLanguage(language.value)}
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
