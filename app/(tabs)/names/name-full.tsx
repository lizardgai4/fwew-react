import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { CardView, Text, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useNameFull } from "@/hooks/useNameFull";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export default function NameFullScreen() {
  const theme = useTheme();
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
  const { appLanguage } = useAppLanguageContext();
  const { names: uiNames, nameFull: uiNameFull } = i18n[appLanguage];
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
            <Text style={styles.label}>{uiNameFull.numSyllables1}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => syllables1 === value}
              onSelect={updateSyllables1}
            />
            <Text style={styles.label}>{uiNameFull.numSyllables2}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => syllables2 === value}
              onSelect={updateSyllables2}
            />
            <Text style={styles.label}>{uiNameFull.numSyllables3}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => syllables3 === value}
              onSelect={updateSyllables3}
            />
            <Text style={styles.label}>{uiNameFull.nameEnding}</Text>
            <Text
              style={{ color: colors.placeholder, padding: 10, paddingTop: 0 }}
            >
              {uiNameFull.nameEndingHint}
            </Text>
            <OptionSelect
              items={uiNameFull.nameEndingOptions}
              active={(value) => ending === value}
              onSelect={setEnding}
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
          <TouchableOpacity key={`nf_${i}`} onPress={() => copy(name)}>
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
