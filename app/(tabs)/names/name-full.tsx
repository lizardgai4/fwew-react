import { Accordion } from "@/components/Accordion";
import { NumericTextInput } from "@/components/NumericTextInput";
import { OptionItem } from "@/components/OptionItem";
import { Text, View } from "@/components/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import Colors from "@/constants/Colors";
import stringsNameFull from "@/constants/ui/name-full";
import stringsNames from "@/constants/ui/names";
import { useNameFull } from "@/hooks/useNameFull";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";

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
    loading,
    execute,
  } = useNameFull();

  const disabled = !numNames || !syllables1 || !syllables2 || !syllables3;

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
              value={numNames}
              onChangeText={updateNumNames}
              placeholder="1-50"
              autoFocus
            />
            <Text style={styles.label}>{stringsNameFull.en.numSyllables1}</Text>
            <NumericTextInput
              value={syllables1}
              onChangeText={updateSyllables1}
              placeholder="1-4"
            />
            <Text style={styles.label}>{stringsNameFull.en.numSyllables2}</Text>
            <NumericTextInput
              value={syllables2}
              onChangeText={updateSyllables2}
              placeholder="1-4"
            />
            <Text style={styles.label}>{stringsNameFull.en.numSyllables3}</Text>
            <NumericTextInput
              value={syllables3}
              onChangeText={updateSyllables3}
              placeholder="1-4"
            />
            <Text style={styles.label}>{stringsNameFull.en.nameEnding}</Text>
            <Text
              style={{ color: colors.placeholder, padding: 10, paddingTop: 0 }}
            >
              {stringsNameFull.en.nameEndingHint}
            </Text>
            {stringsNameFull.en.nameEndings.map((item, i) => (
              <OptionItem
                key={`nf_e_${i}`}
                value={item}
                selected={ending === item}
                onSelect={() => setEnding(item)}
              />
            ))}
            <Text style={styles.label}>{stringsNames.en.dialect}</Text>
            {stringsNames.en.dialects.map((item, i) => (
              <OptionItem
                key={`nf_d_${i}`}
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
