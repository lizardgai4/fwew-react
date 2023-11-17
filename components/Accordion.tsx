import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { View } from "./Themed";

interface AccordionProps {
  closedContent: React.ReactNode;
  openedContent: React.ReactNode;
}

export function Accordion({ closedContent, openedContent }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, { borderColor: colors.text }]}
        onPress={toggleExpanded}
      >
        {closedContent}
        {expanded ? (
          <FontAwesome
            size={24}
            name="chevron-down"
            color={colors.text}
            style={styles.arrow}
          />
        ) : (
          <FontAwesome
            size={24}
            name="chevron-right"
            color={colors.text}
            style={styles.arrow}
          />
        )}
      </TouchableOpacity>
      {expanded && openedContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 16,
    borderWidth: 1,
  },
  arrow: {
    marginLeft: "auto",
  },
});
