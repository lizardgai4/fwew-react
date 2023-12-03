import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import Colors from "@/constants/Colors";
import { Dialects, NameEndings } from "@/constants/Names";
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
            <Text
              style={{ color: colors.placeholder, padding: 10, paddingTop: 0 }}
            >
              -'itan for male, -'ite for female, -'itu for non-binary
            </Text>
            {NameEndings.map((item, i) => (
              <OptionItem
                key={`nf_e_${i}`}
                value={item}
                selected={ending === item}
                onSelect={() => setEnding(item)}
              />
            ))}
            <Text style={styles.label}>Dialect</Text>
            {Dialects.map((item, i) => (
              <OptionItem
                key={`nf_d_${i}`}
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
