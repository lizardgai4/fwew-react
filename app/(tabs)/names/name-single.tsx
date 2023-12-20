import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import useNameSingle from "@/hooks/useNameSingle";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
        <RefreshControl refreshing={loading} onRefresh={execute} />
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
          <TouchableOpacity key={`ns_${i}`} onPress={() => copy(name)}>
            <CardView style={styles.nameCard}>
              <Text style={styles.name}>{name}</Text>
              <FontAwesome name="copy" size={24} color={colors.text} />
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
