import { Text, TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

interface RandomOptionsNumProps {
  numWords: string;
  setNumWords: React.Dispatch<React.SetStateAction<string>>;
  onSelect: (text: string) => void;
  next: () => void;
}

export function RandomOptionsNum({
  numWords,
  onSelect,
  next,
}: RandomOptionsNumProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Number of random words</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          value={numWords?.toString() ?? ""}
          onChangeText={onSelect}
          style={[styles.input, { borderColor: colors.text }]}
        />
        {numWords.length > 0 && (
          <TouchableOpacity
            onPress={next}
            style={[styles.button, { borderColor: colors.text }]}
          >
            <FontAwesome name="arrow-right" size={24} color={colors.text} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 1,
  },
  button: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
