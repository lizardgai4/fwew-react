import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import { Dialects } from "@/constants/Names";
import useNameSingle from "@/hooks/useNameSingle";
import { ScrollView, StyleSheet } from "react-native";

export default function NameSingleScreen() {
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
      <Accordion
        closedContent={<Text>Options</Text>}
        openedContent={
          <>
            <Text style={styles.label}>Number of Names to Generate</Text>
            <NumericTextInput
              placeholder="1-50"
              value={numNames}
              onChangeText={updateNumNames}
              autoFocus
            />
            <Text style={styles.label}>Number of Syllables</Text>
            <NumericTextInput
              placeholder="1-4"
              value={numSyllables}
              onChangeText={updateNumSyllables}
            />
            <Text style={styles.label}>Dialect</Text>
            {Dialects.map((item, i) => (
              <OptionItem
                key={`ns_d_${i}`}
                value={item}
                selected={dialect === item}
                onSelect={() => setDialect(item)}
              />
            ))}
          </>
        }
      />
      <GenerateButton execute={execute} disabled={disabled} />
      <View>
        {names.map((name, i) => (
          <Text key={`ns_${i}`} selectable style={styles.name}>
            {name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
