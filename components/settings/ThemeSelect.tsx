import { useThemeNameContext } from "@/context/ThemeNameContext";
import { ThemeNames } from "@/themes";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../common/Accordion";
import { OptionItem } from "../common/OptionItem";
import { Text } from "../common/Themed";

export function ThemeSelect() {
  const { themeName, saveThemeName } = useThemeNameContext();

  return (
    <Accordion
      closedContent={
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Text style={styles.value}>
              {themeName.slice(0, 2).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.value}>Theme</Text>
        </View>
      }
      openedContent={
        <View style={styles.contentContainer}>
          {ThemeNames.map((tn, i) => (
            <View key={`stn_${i}`}>
              <OptionItem
                icon={
                  <Text style={[styles.icon, styles.value]}>
                    {tn.slice(0, 2).toUpperCase()}
                  </Text>
                }
                value={tn}
                selected={themeName === tn}
                onSelect={() => saveThemeName(tn)}
              />
            </View>
          ))}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
  },
  icon: {
    height: 32,
    width: 32,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginHorizontal: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
