import { Accordion } from "@/components/common/Accordion";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionItem } from "@/components/common/OptionItem";
import { Text, View } from "@/components/common/Themed";
import { GenerateButton } from "@/components/names/GenerateButton";
import Colors from "@/constants/Colors";
import stringsNameFull, { nameEndings } from "@/constants/ui/name-full";
import stringsNames from "@/constants/ui/names";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
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
  const { appLanguage } = useAppLanguageContext();
  const uiNames = stringsNames[appLanguage];
  const uiNameFull = stringsNameFull[appLanguage];

  const disabled = !numNames || !syllables1 || !syllables2 || !syllables3;

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
              value={numNames}
              onChangeText={updateNumNames}
              placeholder="1-50"
              autoFocus
            />
            <Text style={styles.label}>{uiNameFull.numSyllables1}</Text>
            <NumericTextInput
              value={syllables1}
              onChangeText={updateSyllables1}
              placeholder="1-4"
            />
            <Text style={styles.label}>{uiNameFull.numSyllables2}</Text>
            <NumericTextInput
              value={syllables2}
              onChangeText={updateSyllables2}
              placeholder="1-4"
            />
            <Text style={styles.label}>{uiNameFull.numSyllables3}</Text>
            <NumericTextInput
              value={syllables3}
              onChangeText={updateSyllables3}
              placeholder="1-4"
            />
            <Text style={styles.label}>{uiNameFull.nameEnding}</Text>
            <Text
              style={{ color: colors.placeholder, padding: 10, paddingTop: 0 }}
            >
              {uiNameFull.nameEndingHint}
            </Text>
            {nameEndings.map((item, i) => (
              <OptionItem
                key={`nf_e_${i}`}
                value={item}
                selected={ending === item}
                onSelect={() => setEnding(item)}
              />
            ))}
            <Text style={styles.label}>{uiNames.dialect}</Text>
            {uiNames.dialects.map((item, i) => (
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
