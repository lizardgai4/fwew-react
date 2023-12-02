import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import useNameSingle from "@/hooks/useNameSingle";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { NumericTextInput } from "../NumericTextInput";
import { SwitchInput } from "../SwitchInput";

export function NameSingle() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    dialect,
    setDialect,
    execute,
  } = useNameSingle();

  const disabled = !numNames || !numSyllables;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single</Text>
      <NumericTextInput
        placeholder="Number of names to generate (1-50)"
        value={numNames}
        onChangeText={updateNumNames}
        autoFocus
      />
      <NumericTextInput
        placeholder="Number of syllables in the name (1-4)"
        value={numSyllables}
        onChangeText={updateNumSyllables}
      />
      <SwitchInput
        leftLabel="Forest"
        rightLabel="Reef"
        value={dialect === "reef"}
        onValueChange={(isReef) => setDialect(isReef ? "reef" : "forest")}
      />
      <TouchableOpacity
        onPress={execute}
        disabled={disabled}
        style={[
          styles.generateButton,
          { borderColor: disabled ? colors.placeholder : colors.text },
        ]}
      >
        <FontAwesome name="refresh" size={24} color={colors.text} />
        <Text>Generate</Text>
      </TouchableOpacity>
      <ScrollView>
        {names.map((name, i) => (
          <Text key={i} selectable style={styles.name}>
            {name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  generateButton: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  name: {
    padding: 10,
    fontSize: 16,
  },
});
