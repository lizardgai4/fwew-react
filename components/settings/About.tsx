import { Credits } from "@/components/settings/Credits";
import { Version } from "@/components/settings/Version";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { StyleSheet } from "react-native";

export function About() {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView style={styles.expanded}>
      <Version />
      <Credits />
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expanded: {
    padding: 16,
    gap: 8,
  },
});
