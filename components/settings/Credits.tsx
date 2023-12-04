import { BoldText } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import strings, { credits } from "@/constants/ui/settings";
import { StyleSheet } from "react-native";

export function Credits() {
  return (
    <View style={styles.creditsContainer}>
      <Text style={styles.label}>{strings.en.credits}</Text>
      <BoldText style={styles.text}>{strings.en.development}</BoldText>
      <Text style={styles.text}>{credits.development.join(", ")}</Text>
      <BoldText style={styles.text}>{strings.en.design}</BoldText>
      <Text style={styles.text}>{credits.design.join(", ")}</Text>
      <BoldText style={styles.text}>{strings.en.testing}</BoldText>
      <Text style={styles.text}>{credits.testing.join(", ")}</Text>
      <BoldText style={styles.text}>{strings.en.translation}</BoldText>
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
