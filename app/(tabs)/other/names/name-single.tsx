import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { Text, View } from "@/components/common/Themed";
import { NameResults } from "@/components/names/NameResults";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import useNameSingle from "@/hooks/useNameSingle";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
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
  const { names: uiNames, nameSingle: uiNameSingle } = i18n[appLanguage];
  const { colors } = useTheme();
  const resultsVisible = numNames.length > 0 && names.length > 0;

  const copyAll = async () => {
    await Clipboard.setStringAsync(names.join("\n"));
  };

  const copy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <ScrollView
      style={styles.container}
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
          <View style={styles.optionContainer}>
            <NumericTextInput
              placeholder={`${uiNames.numNames} (1-50)`}
              value={numNames}
              onChangeText={updateNumNames}
              autoFocus
            />
            <Text style={styles.label}>{uiNameSingle.numSyllables}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => numSyllables === value}
              onSelect={updateNumSyllables}
            />
            <Text style={styles.label}>{uiNames.dialect}</Text>
            <OptionSelect
              items={uiNames.dialects}
              active={(value) => dialect === value}
              onSelect={setDialect}
            />
          </View>
        }
      />
      <View style={styles.buttonContainer}>
        <Button
          icon="clipboard"
          text={uiNames.copyAll}
          onPress={copyAll}
          disabled={!resultsVisible}
        />
        <Button
          icon="refresh"
          text=""
          onPress={execute}
          disabled={loading}
        />
      </View>
      <ResultCount
        visible={resultsVisible}
        resultCount={names.length}
        style={styles.resultCount}
      />
      <NameResults names={names} copyName={copy} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionContainer: {
    paddingTop: 4,
  },
  label: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingTop: 16,
  },
  resultCount: {
    padding: 16,
  },
});
