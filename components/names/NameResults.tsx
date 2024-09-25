import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { CardView, Text } from "../common/Themed";

type NameResultsProps = {
  names: string[];
  copyName: (name: string) => void;
};

export function NameResults({ names, copyName }: NameResultsProps) {
  const theme = useTheme();
  return (
    <View style={styles.results}>
      {names.map((name, i) => (
        <Pressable
          key={`nr_${i}`}
          onPress={() => copyName(name)}
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
          <CardView style={styles.nameCard}>
            <Text style={styles.name}>{name}</Text>
            <FontAwesome name="copy" size={24} color={theme.colors.text} />
          </CardView>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    flex: 1,
    gap: 16,
    paddingBottom: 32,
  },
  nameCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  name: {
    fontSize: 18,
    maxWidth: "85%",
  },
});
