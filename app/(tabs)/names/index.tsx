import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

export default function NamesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.container}>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-single"
      >
        <Text style={styles.linkText}>Single</Text>
      </Link>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-full"
      >
        <Text style={styles.linkText}>Full</Text>
      </Link>
      <Link
        style={[styles.link, { borderColor: colors.text }]}
        href="/(tabs)/names/name-alu"
      >
        <Text style={styles.linkText}>Alu</Text>
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
