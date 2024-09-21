import Colors from "@/constants/Colors";
import { useDialectContext } from "@/context/DialectContext";
import { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <DialectButton />
      <ActionButton href="/favorites" icon="heart" />
      <ActionButton href="/settings" icon="gear" />
    </View>
  );
}

function DialectButton() {
  const { dialectDisplay, toggleDialect } = useDialectContext();
  return (
    <Pressable style={styles.actionButton} onPress={toggleDialect}>
      {({ pressed }) => (
        <View style={[styles.dialectButton, { opacity: pressed ? 0.5 : 1 }]}>
          <Text style={styles.dialectText}>{dialectDisplay}</Text>
        </View>
      )}
    </Pressable>
  );
}

type ABProps = {
  href: Href<string>;
  icon: FontAwesomeIconName;
};

function ActionButton({ href, icon }: ABProps) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.actionButton}>
        {({ pressed }) => (
          <FontAwesome
            name={icon}
            size={25}
            color={Colors.dark.text}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    gap: 16,
  },
  dialectButton: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  dialectText: {
    color: "#fff",
    fontSize: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
