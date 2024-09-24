import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { Text } from "@/components/common/Themed";
import { NameResults } from "@/components/names/NameResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useNameAlu } from "@/hooks/useNameAlu";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";

export default function NameAluScreen() {
  const theme = useTheme();
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
    loading,
    execute,
  } = useNameAlu();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names: uiNames, nameAlu: uiNameAlu } = getUI(appLanguage, dialect);
  const resultsVisible = numNames.length > 0 && names.length > 0;

  const copyAll = async () => {
    await Clipboard.setStringAsync(names.join("\n"));
  };

  const copy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[theme.colors.primary]}
        />
      }
    >
      <View style={styles.container}>
        <Accordion
          closedContent={<Text>{uiNames.options}</Text>}
          openedContent={
            <View
              style={[
                styles.optionContainer,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Text style={styles.label}>{uiNames.numNames}</Text>
              <NumericTextInput
                value={numNames}
                onChangeText={updateNumNames}
                placeholder="1-50"
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
          <Button icon="refresh" onPress={execute} disabled={loading} />
        </View>
        <ResultCount
          visible={resultsVisible}
          resultCount={names.length}
          style={styles.resultCount}
        />
        <NameResults names={names} copyName={copy} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionContainer: {},
  label: {
    paddingVertical: 16,
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
