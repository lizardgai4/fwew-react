import { Accordion } from "@/components/common/Accordion";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionItem } from "@/components/common/OptionItem";
import { RefreshButton } from "@/components/common/RefreshButton";
import { Text, View } from "@/components/common/Themed";
import stringsNameAlu from "@/constants/ui/name-alu";
import stringsNames from "@/constants/ui/names";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
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
  const { appLanguage } = useAppLanguageContext();
  const uiNames = stringsNames[appLanguage];
  const uiNameAlu = stringsNameAlu[appLanguage];

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
        closedContent={<Text>{uiNames.options}</Text>}
        openedContent={
          <>
            <Text style={styles.label}>{uiNames.numNames}</Text>
            <NumericTextInput
              placeholder="1-50"
              value={numNames}
              onChangeText={updateNumNames}
              autoFocus
            />
            <Text style={styles.label}>{uiNameAlu.numSyllables}</Text>
            <NumericTextInput
              placeholder="0-4"
              value={numSyllables}
              onChangeText={updateNumSyllables}
            />
            <Text style={styles.label}>{uiNameAlu.nounMode}</Text>
            {uiNameAlu.nounModes.map((item, i) => (
              <OptionItem
                key={`na_n_${i}`}
                value={item.name}
                selected={nounMode === item.value}
                onSelect={() => setNounMode(item.value)}
              />
            ))}
            <Text style={styles.label}>{uiNameAlu.adjMode}</Text>
            {uiNameAlu.adjModes.map((item, i) => (
              <OptionItem
                key={`na_a_${i}`}
                value={item.name}
                selected={adjMode === item.value}
                onSelect={() => setAdjMode(item.value)}
              />
            ))}
            <Text style={styles.label}>{uiNames.dialect}</Text>
            {uiNames.dialects.map((item, i) => (
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
      <RefreshButton
        title={uiNames.generate}
        execute={execute}
        disabled={disabled}
      />
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
