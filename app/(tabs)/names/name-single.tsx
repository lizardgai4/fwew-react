import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import stringsNameSingle from "@/constants/ui/name-single";
import stringsNames from "@/constants/ui/names";
import useNameSingle from "@/hooks/useNameSingle";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function NameSingleScreen() {
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    dialect,
    setDialect,
    loading,
    execute,
  } = useNameSingle();

  const disabled = !numNames || !numSyllables;

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
            <Text style={styles.label}>
              {stringsNameSingle.en.numSyllables}
            </Text>
            <NumericTextInput
              placeholder="1-4"
              value={numSyllables}
              onChangeText={updateNumSyllables}
            />
            <Text style={styles.label}>{stringsNames.en.dialect}</Text>
            {stringsNames.en.dialects.map((item, i) => (
              <OptionItem
                key={`ns_d_${i}`}
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
