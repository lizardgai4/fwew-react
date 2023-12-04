import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import stringsNameAlu from "@/constants/ui/name-alu";
import stringsNames from "@/constants/ui/names";
import { useNameAlu } from "@/hooks/useNameAlu";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function NameAluScreen() {
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    nounMode,
    setNounMode,
    adjMode,
    setAdjMode,
    dialect,
    setDialect,
    loading,
    execute,
  } = useNameAlu();

  const disabled =
    !numNames || !numSyllables || !nounMode || !adjMode || !dialect;

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={execute} />
      }
    >
      <Accordion
        closedContent={<Text>{stringsNames.en.options}</Text>}
        openedContent={
          <>
            <Text style={styles.label}>{stringsNames.en.numNames}</Text>
            <NumericTextInput
              placeholder="1-50"
              value={numNames}
              onChangeText={updateNumNames}
              autoFocus
            />
            <Text style={styles.label}>{stringsNameAlu.en.numSyllables}</Text>
            <NumericTextInput
              placeholder="1-4"
              value={numSyllables}
              onChangeText={updateNumSyllables}
            />
            <Text style={styles.label}>{stringsNameAlu.en.nounMode}</Text>
            {stringsNameAlu.en.nounModes.map((item, i) => (
              <OptionItem
                key={`na_n_${i}`}
                value={item}
                selected={nounMode === item}
                onSelect={() => setNounMode(item)}
              />
            ))}
            <Text style={styles.label}>{stringsNameAlu.en.adjMode}</Text>
            {stringsNameAlu.en.adjModes.map((item, i) => (
              <OptionItem
                key={`na_a_${i}`}
                value={item}
                selected={adjMode === item}
                onSelect={() => setAdjMode(item)}
              />
            ))}
            <Text style={styles.label}>{stringsNames.en.dialect}</Text>
            {stringsNames.en.dialects.map((item, i) => (
              <OptionItem
                key={`na_d_${i}`}
                value={item.name}
                selected={dialect === item.value}
                onSelect={() => setDialect(item.value)}
              />
            ))}
          </>
        }
      />
      <GenerateButton execute={execute} disabled={disabled} />
      <View>
        {names.map((name, i) => (
          <Text key={`na_r_${i}`} selectable style={styles.name}>
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
