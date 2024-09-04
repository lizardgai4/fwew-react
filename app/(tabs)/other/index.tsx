import { ItalicText } from "@/components/common/StyledText";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { Background, BackgroundReef } from "@/themes/frutigerAero";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  const content = (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/names">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.names}</Text>
            <ItalicText>{screens.names}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lists">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.lists}</Text>
            <ItalicText>{screens.lists}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/stats">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.stats}</Text>
            <ItalicText>{screens.stats}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/valid">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.valid}</Text>
            <ItalicText>{screens.valid}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lenition">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.lenition}</Text>
            <ItalicText>{screens.lenition}</ItalicText>
          </GradientCardView>
        </Link>
      </View>
    </ScrollView>
  );

  return dialect === "reef"
  ? BackgroundReef(content)
  : Background(content);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    padding: 16,
  },
  card: {
    padding: 32,
    width: 256,
    height: 128,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 24,
  },
});
