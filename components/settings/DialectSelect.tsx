import { Dialects } from "@/constants/Dialects";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { StyleSheet } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { CardView, Text } from "../common/Themed";

export function DialectSelect() {
  const { dialect, dialectDisplay, saveDialect } = useDialectContext();
  const { appLanguage } = useAppLanguageContext();
  const ui = getUI(appLanguage, dialect);

  return (
    <Accordion
      closedContent={
        <CardView style={styles.iconContainer}>
          <Text style={styles.value}>{dialectDisplay}</Text>
          <Text style={styles.value}>{ui.names.dialect}</Text>
        </CardView>
      }
      openedContent={
        <CardView>
          {Dialects.map((d, i) => (
            <CardView key={`sd_${i}`} style={{ paddingHorizontal: 8 }}>
              <OptionItem
                icon={null}
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
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
