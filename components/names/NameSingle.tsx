import { NumericTextInput } from "@/components/NumericTextInput";
import { SwitchInput } from "@/components/SwitchInput";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import useNameSingle from "@/hooks/useNameSingle";
import { ScrollView, StyleSheet } from "react-native";

export function NameSingle() {
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
      <GenerateButton execute={execute} disabled={disabled} />
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
  name: {
    padding: 10,
    fontSize: 16,
  },
});
