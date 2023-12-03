import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { SwitchInput } from "@/components/SwitchInput";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import Colors from "@/constants/Colors";
import { useNameFull } from "@/hooks/useNameFull";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";

export default function NameFullScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

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
    <ScrollView>
      <Accordion
        closedContent={<Text>Options</Text>}
        openedContent={
          <>
            <Text style={styles.label}>Number of Names to Generate</Text>
            <NumericTextInput
              value={numNames}
              onChangeText={updateNumNames}
              placeholder="1-50"
              autoFocus
            />
            <Text style={styles.label}>Number of Syllables in First Name </Text>
            <NumericTextInput
              value={syllables1}
              onChangeText={updateSyllables1}
              placeholder="1-4"
            />
            <Text style={styles.label}>Number of Syllables in Family Name</Text>
            <NumericTextInput
              value={syllables2}
              onChangeText={updateSyllables2}
              placeholder="1-4"
            />
            <Text style={styles.label}>
              Number of Syllables in Parent's Name
            </Text>
            <NumericTextInput
              value={syllables3}
              onChangeText={updateSyllables3}
              placeholder="1-4"
            />
            <Text style={styles.label}>Name Ending</Text>
            <Text style={{ color: colors.placeholder, paddingHorizontal: 10 }}>
              choose -'itan (son) for male, or -'ite (daughter) for female
            </Text>
            <SwitchInput
              leftLabel="-'itan"
              rightLabel="-'ite"
              value={ending === "'ite"}
              onValueChange={(isItan) => setEnding(isItan ? "'ite" : "'itan")}
            />
            <Text style={styles.label}>Dialect</Text>
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
          <Text key={`nf_${i}`} selectable style={styles.name}>
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
