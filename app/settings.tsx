import { Accordion } from "@/components/Accordion";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { FlagMap } from "@/components/settings/Flags";
import strings, {
  AppLanguages,
  ExtendedLanguageCode,
} from "@/constants/ui/settings";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";

export default function ModalScreen() {
  const [appLanguage, setAppLanguage] = useState<ExtendedLanguageCode>("en");

  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
