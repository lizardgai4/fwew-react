import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionItem } from "@/components/common/OptionItem";
import { Text, View } from "@/components/common/Themed";
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

  const disabled =
    !numNames || !syllables1 || !syllables2 || !syllables3 || !ending;

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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 8,
              }}
            >
              {stringsNames[appLanguage].syllablesOptions.map((option, i) => (
                <OptionItem
                  key={`nf_s_0_${i}`}
                  value={option.name}
                  selected={syllables1 === option.value}
                  onSelect={() => updateSyllables1(option.value)}
                />
              ))}
            </View>
            <Text style={styles.label}>{uiNameFull.numSyllables2}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 8,
              }}
            >
              {stringsNames[appLanguage].syllablesOptions.map((option, i) => (
                <OptionItem
                  key={`nf_s_1_${i}`}
                  value={option.name}
                  selected={syllables2 === option.value}
                  onSelect={() => updateSyllables2(option.value)}
                />
              ))}
            </View>
            <Text style={styles.label}>{uiNameFull.numSyllables3}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 8,
              }}
            >
              {stringsNames[appLanguage].syllablesOptions.map((option, i) => (
                <OptionItem
                  key={`nf_s_2_${i}`}
                  value={option.name}
                  selected={syllables3 === option.value}
                  onSelect={() => updateSyllables3(option.value)}
                />
              ))}
            </View>
            <Text style={styles.label}>{uiNameFull.nameEnding}</Text>
            <Text
              style={{ color: colors.placeholder, padding: 10, paddingTop: 0 }}
            >
              {uiNameFull.nameEndingHint}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 8,
              }}
            >
              {nameEndings.map((item, i) => (
                <OptionItem
                  key={`nf_e_${i}`}
                  value={item}
                  selected={ending === item}
                  onSelect={() => setEnding(item)}
                />
              ))}
            </View>
            <Text style={styles.label}>{uiNames.dialect}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 8,
              }}
            >
              {uiNames.dialects.map((item, i) => (
                <OptionItem
                  key={`nf_d_${i}`}
                  value={item.name}
                  selected={dialect === item.value}
                  onSelect={() => setDialect(item.value)}
                />
              ))}
            </View>
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
