import Colors from "@/constants/Colors";
import { useDialectContext } from "@/context/DialectContext";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from "react-native";

type ActionButtonsProps = {
  style?: ViewStyle;
};

export function ActionButtons({ style }: ActionButtonsProps) {
  const { dialectDisplay, toggleDialect } = useDialectContext();

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        gap: 16,
        ...style,
      }}
    >
      <Pressable style={styles.actionButton} onPress={toggleDialect}>
        {({ pressed }) => (
          <View
            style={{
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              opacity: pressed ? 0.5 : 1,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              {dialectDisplay}
            </Text>
          </View>
        )}
      </Pressable>
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
