import { CardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Link href="/(tabs)/other/names">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.names}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lists">
          <CardView style={styles.card}>
            <Text style={styles.text}>
              {screens.lists.replaceAll(" ", "\n")}
            </Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/stats">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.stats}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/valid">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.valid}</Text>
          </CardView>
        </Link>
        <Link href="/(tabs)/other/lenition">
          <CardView style={styles.card}>
            <Text style={styles.text}>{screens.lenition}</Text>
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
