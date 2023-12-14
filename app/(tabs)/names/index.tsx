import { Text, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

export default function NamesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  const { names } = i18n[appLanguage];

  return (
    <View style={styles.container}>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-single"
      >
        <Text style={styles.linkText}>{names.single}</Text>
      </Link>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-full"
      >
        <Text style={styles.linkText}>{names.full}</Text>
      </Link>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-alu"
      >
        <Text style={styles.linkText}>{names.alu}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  link: {
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
    width: 128,
  },
  linkText: {
    flex: 1,
    fontSize: 16,
  },
});
