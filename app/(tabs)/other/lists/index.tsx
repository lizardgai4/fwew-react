import { ItalicText } from "@/components/common/StyledText";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

export default function ListsScreen() {
  const auxtheme = getTheme()
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  const content = (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/lists/cameron">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.cameronWords}</Text>
            <ItalicText>{screens.cameronWords}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lists/homonyms">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.homonyms}</Text>
            <ItalicText>{screens.homonyms}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lists/multi-ipa">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.multiIPA}</Text>
            <ItalicText>{screens.multiIPA}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lists/oddballs">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.oddballs}</Text>
            <ItalicText>{screens.oddballs}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lists/profanity">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.profanity}</Text>
            <ItalicText>{screens.profanity}</ItalicText>
          </GradientCardView>
        </Link>
        <Link href="/(tabs)/other/lists/that">
          <GradientCardView style={styles.card}>
            <Text style={styles.text}>{screens.that}</Text>
            <ItalicText>{screens.that}</ItalicText>
          </GradientCardView>
        </Link>
      </View>
    </ScrollView>
  );

  return auxtheme.Background(content);
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
