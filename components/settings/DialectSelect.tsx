import { DialectDisplay, Dialects } from "@/constants/Dialects";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { StyleSheet } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { CardView, Text } from "../common/Themed";

export function DialectSelect() {
  const { dialect, saveDialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <CardView style={styles.iconContainer}>
          <Text style={[styles.icon, styles.value]}>
            {DialectDisplay[dialect].abbr}
          </Text>
          <Text style={styles.value}>{ui.names.dialect}</Text>
        </CardView>
      }
      openedContent={
        <CardView style={styles.contentContainer}>
          {Dialects.map((d, i) => (
            <CardView key={`sd_${i}`}>
              <OptionItem
                icon={<Text style={[styles.icon, styles.value]}>{d.abbr}</Text>}
                value={d.name}
                selected={dialect === d.value}
                onSelect={() => saveDialect(d.value)}
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
