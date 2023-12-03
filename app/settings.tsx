import { Accordion } from "@/components/Accordion";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { FlagMap } from "@/components/settings/Flags";
import strings, {
  ExtendedLanguageCode,
  UILanguages,
} from "@/constants/ui/settings";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";

export default function ModalScreen() {
  const [uiLanguage, setUILanguage] = useState<ExtendedLanguageCode>("en");

  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Accordion
        closedContent={
          <View style={styles.iconContainer}>
            {FlagMap[uiLanguage]}
            <Text style={styles.value}>{strings.en.appLanguage}</Text>
          </View>
        }
        openedContent={
          <>
            {UILanguages.map((language, i) => (
              <OptionItem
                key={i}
                icon={FlagMap[language.value]}
                value={language.label}
                selected={uiLanguage === language.value}
                onSelect={() => setUILanguage(language.value)}
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
