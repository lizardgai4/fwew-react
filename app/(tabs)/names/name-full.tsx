import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { Text, View } from "@/components/common/Themed";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useNameFull } from "@/hooks/useNameFull";
import { useTheme } from "@react-navigation/native";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
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

  const disabled =
    !numNames || !syllables1 || !syllables2 || !syllables3 || !ending;

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
      <Accordion
        closedContent={<Text>{uiNames.options}</Text>}
        openedContent={
          <>
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
          </>
        }
      />
      <Button onPress={execute} icon="refresh" disabled={disabled} />
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
