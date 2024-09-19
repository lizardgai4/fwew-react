import { CardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function ListsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/lists/cameron">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.cameronWords}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/homonyms">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.homonyms}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/multi-ipa">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.multiIPA}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/oddballs">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.oddballs}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/profanity">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.profanity}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists/that">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.that}</Text>
          </CardView>
        </Link>
      </View>
    </ScrollView>
  );
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
