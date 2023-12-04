import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import strings from "@/constants/ui/names";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

export default function NamesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { appLanguage } = useAppLanguageContext();
  let ui = strings[appLanguage];

  return (
    <View style={styles.container}>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-single"
      >
        <Text style={styles.linkText}>{ui.single}</Text>
      </Link>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-full"
      >
        <Text style={styles.linkText}>{ui.full}</Text>
      </Link>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-alu"
      >
        <Text style={styles.linkText}>{ui.alu}</Text>
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
