import { Accordion } from "@/components/Accordion";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { FlagMap } from "@/components/settings/Flags";
import strings, {
  AppLanguages,
  ExtendedLanguageCode,
  ResultsLanguages,
} from "@/constants/ui/settings";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";

export default function ModalScreen() {
  const [appLanguage, setAppLanguage] = useState<ExtendedLanguageCode>("en");
  const [resultsLanguage, setResultsLanguage] =
    useState<ExtendedLanguageCode>("en");

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        {/* App Language Select */}
        <Accordion
          closedContent={
            <View style={styles.iconContainer}>
              {FlagMap[appLanguage]}
              <Text style={styles.value}>{strings.en.appLanguage}</Text>
            </View>
          }
          openedContent={
            <>
              {AppLanguages.map((language, i) => (
                <OptionItem
                  key={i}
                  icon={FlagMap[language.value]}
                  value={language.label}
                  selected={appLanguage === language.value}
                  onSelect={() => setAppLanguage(language.value)}
                />
              ))}
            </>
          }
        />
        {/* Results Language Select */}
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
                  selected={appLanguage === language.value}
                  onSelect={() => setResultsLanguage(language.value)}
                />
              ))}
            </>
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
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
