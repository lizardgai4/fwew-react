import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useNameAlu } from "@/hooks/useNameAlu";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
    dialect,
    setDialect,
    loading,
    execute,
  } = useNameAlu();
  const { appLanguage } = useAppLanguageContext();
  const { names: uiNames, nameAlu: uiNameAlu } = i18n[appLanguage];
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
          colors={[theme.colors.primary]}
        />
      }
    >
      <Accordion
        closedContent={<Text>{uiNames.options}</Text>}
        openedContent={
          <View style={styles.optionContainer}>
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
            <Text style={styles.label}>{uiNames.dialect}</Text>
            <OptionSelect
              items={uiNames.dialects}
              active={(value) => dialect === value}
              onSelect={setDialect}
            />
          </View>
        }
      />
      <View style={{ paddingTop: 16 }}>
        <Button
          icon="clipboard"
          text={uiNames.copyAll}
          onPress={copyAll}
          disabled={!resultsVisible}
        />
      </View>
      <ResultCount
        visible={resultsVisible}
        resultCount={names.length}
        style={styles.resultCount}
      />
      <View style={styles.results}>
        {names.map((name, i) => (
          <TouchableOpacity key={`na_${i}`} onPress={() => copy(name)}>
            <CardView style={styles.nameCard}>
              <Text style={styles.name}>{name}</Text>
              <FontAwesome name="copy" size={24} color={theme.colors.text} />
            </CardView>
          </TouchableOpacity>
        ))}
      </View>
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
  resultCount: {
    padding: 16,
  },
  results: {
    flex: 1,
    gap: 16,
    paddingBottom: 32,
  },
  nameCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  name: {
    fontSize: 18,
  },
});
