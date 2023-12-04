import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { Text, View } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import strings, { AppLanguages } from "@/constants/ui/settings";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

export function AppLanguageSelect() {
  const appLanguageValue = useAppLanguageContext();
  if (!appLanguageValue) return null;
  const { appLanguage, saveAppLanguage } = appLanguageValue;
  const ui = strings[appLanguage];

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          {FlagMap[appLanguage]}
          <Text style={styles.value}>{ui.appLanguage}</Text>
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
              onSelect={() => saveAppLanguage(language.value)}
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
