import { BoldText } from "@/components/common/StyledText";
import { Text, View } from "@/components/common/Themed";
import strings, { credits } from "@/constants/ui/settings";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { StyleSheet } from "react-native";

export function Credits() {
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];
  return (
    <View style={styles.creditsContainer}>
      <Text style={styles.label}>{ui.credits}</Text>
      <BoldText style={styles.text}>{ui.development}</BoldText>
      <Text style={styles.text}>{credits.development.join(", ")}</Text>
      <BoldText style={styles.text}>{ui.design}</BoldText>
      <Text style={styles.text}>{credits.design.join(", ")}</Text>
      <BoldText style={styles.text}>{ui.testing}</BoldText>
      <Text style={styles.text}>{credits.testing.join(", ")}</Text>
      <BoldText style={styles.text}>{ui.translation}</BoldText>
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
