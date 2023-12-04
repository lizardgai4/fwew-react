import { Accordion } from "@/components/Accordion";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { FlagMap } from "@/components/settings/Flags";
import type { ExtendedLanguageCode } from "@/constants/ui/settings";
import strings, { AppLanguages } from "@/constants/ui/settings";
import { useState } from "react";
import { StyleSheet } from "react-native";

export function AppLanguageSelect() {
  const [appLanguage, setAppLanguage] = useState<ExtendedLanguageCode>("en");

  return (
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
