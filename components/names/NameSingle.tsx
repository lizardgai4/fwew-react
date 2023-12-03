import { Accordion } from "@/components/Accordion";
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
    <ScrollView>
      <Text style={styles.title}>Single</Text>
      <Accordion
        closedContent={<Text>Options</Text>}
        openedContent={
          <>
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
          </>
        }
      />
      <GenerateButton execute={execute} disabled={disabled} />
      <View>
        {names.map((name, i) => (
          <Text key={i} selectable style={styles.name}>
            {name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  label: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    padding: 10,
    fontSize: 16,
  },
});
