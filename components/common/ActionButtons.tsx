import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export function ActionButtons() {
  return (
    <View style={{ flexDirection: "row", padding: 16, gap: 16 }}>
      <Link href="/favorites" asChild>
        <Pressable style={styles.actionButton}>
          {({ pressed }) => (
            <FontAwesome
              name="heart"
              size={25}
              color={Colors.dark.text}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
      <Link href="/settings" asChild>
        <Pressable style={styles.actionButton}>
          {({ pressed }) => (
            <FontAwesome
              name="gear"
              size={25}
              color={Colors.dark.text}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding: 16,
  },
});
