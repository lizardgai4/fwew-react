import { BoldText } from "@/components/common/StyledText";
import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";
import credits from "@/constants/Credits";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage];
  return (
    <View style={styles.creditsContainer}>
      <Text style={styles.label}>{ui.settings.credits}</Text>
      <BoldText style={styles.text}>{ui.settings.development}</BoldText>
      <Text style={styles.text}>{credits.development.join(", ")}</Text>
      <BoldText style={styles.text}>{ui.settings.design}</BoldText>
      <Text style={styles.text}>{credits.design.join(", ")}</Text>
      <BoldText style={styles.text}>{ui.settings.testing}</BoldText>
      <Text style={styles.text}>{credits.testing.join(", ")}</Text>
      <BoldText style={styles.text}>{ui.settings.translation}</BoldText>
      <Text style={styles.text}>{credits.translation.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  creditsContainer: {
    paddingTop: 8,
    gap: 8,
  },
  label: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
