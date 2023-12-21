import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useNameAlu } from "@/hooks/useNameAlu";
import { useTheme } from "@react-navigation/native";
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
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { names: uiNames, nameAlu: uiNameAlu } = i18n[appLanguage];

  const disabled =
    !numNames || !numSyllables || !nounMode || !adjMode || !dialect;

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[colors.primary]}
        />
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
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => numSyllables === value}
              onSelect={updateNumSyllables}
            />
            <Text style={styles.label}>{uiNameAlu.nounMode}</Text>
            <OptionSelect
              items={uiNameAlu.nounModes}
              active={(value) => nounMode === value}
              onSelect={setNounMode}
            />
            <Text style={styles.label}>{uiNameAlu.adjMode}</Text>
            <OptionSelect
              items={uiNameAlu.adjModes}
              active={(value) => adjMode === value}
              onSelect={setAdjMode}
              col
            />
            <Text style={styles.label}>{uiNames.dialect}</Text>
            <OptionSelect
              items={uiNames.dialects}
              active={(value) => dialect === value}
              onSelect={setDialect}
            />
          </>
        }
      />
      <Button onPress={execute} icon="refresh" disabled={disabled} />
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
