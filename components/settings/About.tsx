import { CardView } from "@/components/common/Themed";
import { Credits } from "@/components/settings/Credits";
import { Version } from "@/components/settings/Version";
import { StyleSheet } from "react-native";

export function About() {
  return (
    <CardView style={styles.expanded}>
      <Version />
      <Credits />
    </CardView>
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
