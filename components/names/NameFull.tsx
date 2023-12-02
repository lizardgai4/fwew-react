import { NumericTextInput } from "@/components/NumericTextInput";
import { SwitchInput } from "@/components/SwitchInput";
import { Text, View } from "@/components/Themed";
import { useNameFull } from "@/hooks/useNameFull";
import { ScrollView, StyleSheet } from "react-native";
import { GenerateButton } from "./GenerateButton";

export function NameFull() {
  const {
    names,
    numNames,
    updateNumNames,
    syllables1,
    updateSyllables1,
    syllables2,
    updateSyllables2,
    syllables3,
    updateSyllables3,
    dialect,
    setDialect,
    ending,
    setEnding,
    execute,
  } = useNameFull();

  const disabled = !numNames || !syllables1 || !syllables2 || !syllables3;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full</Text>
      <NumericTextInput
        value={numNames}
        onChangeText={updateNumNames}
        placeholder="Number of names to generate (1-50)"
        autoFocus
      />
      <NumericTextInput
        value={syllables1}
        onChangeText={updateSyllables1}
        placeholder="Number of syllables in the first name (1-4)"
      />
      <NumericTextInput
        value={syllables2}
        onChangeText={updateSyllables2}
        placeholder="Number of syllables in the family name (1-4)"
      />
      <NumericTextInput
        value={syllables3}
        onChangeText={updateSyllables3}
        placeholder="Number of syllables in the parent's name (1-4)"
      />
      <SwitchInput
        leftLabel="-'itan"
        rightLabel="-'ite"
        value={ending === "'ite"}
        onValueChange={(isItan) => setEnding(isItan ? "'ite" : "'itan")}
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
