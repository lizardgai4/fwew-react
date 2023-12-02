import { Text, TextInput, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import useNameSingle from "@/hooks/useNameSingle";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

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
    <View>
      {/* title */}
      <Text style={styles.title}>Single</Text>
      {/* n input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Number of names to generate (1-50)"
          placeholderTextColor={colors.placeholder}
          value={numNames}
          onChangeText={updateNumNames}
          keyboardType="number-pad"
          style={[styles.input, { borderColor: colors.text }]}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="never"
          autoFocus
        />
        <TouchableOpacity
          onPress={() => updateNumNames("")}
          style={[styles.clearButton, { borderColor: colors.text }]}
        >
          <FontAwesome name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      {/* s input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Number of syllables in the name (1-4)"
          placeholderTextColor={colors.placeholder}
          value={numSyllables}
          onChangeText={updateNumSyllables}
          keyboardType="number-pad"
          style={[styles.input, { borderColor: colors.text }]}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="never"
          autoFocus
        />
        <TouchableOpacity
          onPress={() => updateNumSyllables("")}
          style={[styles.clearButton, { borderColor: colors.text }]}
        >
          <FontAwesome name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      {/* dialect switch */}
      <View style={styles.switch}>
        <Text>Forest</Text>
        <Switch
          value={dialect === "reef"}
          onValueChange={(isReef) => setDialect(isReef ? "reef" : "forest")}
        />
        <Text>Reef</Text>
      </View>
      {/* generate button */}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
  },
  clearButton: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
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
