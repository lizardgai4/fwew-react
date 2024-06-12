import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { CardView, Text } from "@/components/common/Themed";
import { FlagMap } from "@/components/settings/Flags";
import { AppLanguages } from "@/constants/Language";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

export function AppLanguageSelect() {
  const appLanguageValue = useAppLanguageContext();
  if (!appLanguageValue) return null;
  const { appLanguage, saveAppLanguage } = appLanguageValue;
  const ui = i18n[appLanguage];

  return (
    <Accordion
      closedContent={
        <CardView style={styles.iconContainer}>
          {FlagMap[appLanguage]}
          <Text style={styles.value}>{ui.settings.appLanguage}</Text>
        </CardView>
      }
      openedContent={
        <CardView>
          {AppLanguages.map((language, i) => (
            <CardView key={`sal_${i}`} style={{ paddingHorizontal: 8 }}>
              <OptionItem
                icon={FlagMap[language.value]}
                value={language.label}
                selected={appLanguage === language.value}
                onSelect={() => saveAppLanguage(language.value)}
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
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
