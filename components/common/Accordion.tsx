import { View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

type AccordionProps = {
  closedContent: React.ReactNode;
  openedContent: React.ReactNode;
  initiallyOpen?: boolean;
};

export function Accordion({
  closedContent,
  openedContent,
  initiallyOpen,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(initiallyOpen ?? false);
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
