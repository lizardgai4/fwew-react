import { Accordion } from "@/components/common/Accordion";
import { OptionItem } from "@/components/common/OptionItem";
import { PlainCardView, GradientCardView, Text } from "@/components/common/Themed";
import { Auxthemes } from "@/constants/Auxthemes";
import { useDialectContext } from "@/context/DialectContext";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useAuxthemeContext } from "@/context/AuxthemeContext";
import { StyleSheet } from "react-native";

export function AuxthemeSelect() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { auxtheme, saveAuxtheme } = useAuxthemeContext();
  
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <PlainCardView style={styles.iconContainer}>
          <Text style={styles.value}>{ui.settings.auxtheme}</Text>
        </PlainCardView>
      }
      openedContent={
        <PlainCardView>
          {Auxthemes.map((language, i) => (
            <PlainCardView key={`sal_${i}`} style={{ paddingHorizontal: 8 }}>
              <OptionItem
                value={language.label}
                selected={auxtheme === language.value}
                onSelect={() => saveAuxtheme(language.value)}
              />
            </PlainCardView>
          ))}
        </PlainCardView>
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