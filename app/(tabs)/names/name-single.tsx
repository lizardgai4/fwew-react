import { Accordion } from "@/components/common/Accordion";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionItem } from "@/components/common/OptionItem";
import { RefreshButton } from "@/components/common/RefreshButton";
import { Text, View } from "@/components/common/Themed";
import stringsNameSingle from "@/constants/ui/name-single";
import stringsNames from "@/constants/ui/names";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
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
  const { appLanguage } = useAppLanguageContext();
  const uiNames = stringsNames[appLanguage];
  const uiNameSingle = stringsNameSingle[appLanguage];

  const disabled = !numNames || !numSyllables;

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
            <Text style={styles.label}>{uiNameSingle.numSyllables}</Text>
            <NumericTextInput
              placeholder="0-4"
              value={numSyllables}
              onChangeText={updateNumSyllables}
            />
            <Text style={styles.label}>{uiNames.dialect}</Text>
            {uiNames.dialects.map((item, i) => (
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
      <RefreshButton
        title={uiNames.generate}
        execute={execute}
        disabled={disabled}
      />
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
