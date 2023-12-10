import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { FilterExpressionBuilder } from "@/components/common/FilterExpressionBuilder";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { ResultCount } from "@/components/common/ResultCount";
import { SmallButton } from "@/components/common/SmallButton";
import { Text, View } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import stringsList from "@/constants/ui/list";
import stringsRandom from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import type { Word } from "fwew.js";
import { random } from "fwew.js";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function RandomScreen() {
  const {
    filters,
    filterExpression,
    disabled,
    incomplete,
    addFilterExpression,
    removeFilterExpression,
    updateFilterExpression,
  } = useFilterExpression();
  const [numWords, setNumWords] = useState("8");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);
  const debounce = useDebounce();
  const { appLanguage } = useAppLanguageContext();
  const uiRandom = stringsRandom[appLanguage];
  const uiList = stringsList[appLanguage];

  const updateNumWords = (num: string) => {
    if (num === "") {
      setNumWords("");
      return;
    }
    const n = +num;
    if (isNaN(n) || n < 1 || n > 100) {
      return;
    }
    setNumWords(num);
  };

  const execute = async () => {
    if (numWords.length === 0) {
      return;
    }
    setLoading(true);
    if (filterExpression.length > 0) {
      if (incomplete) {
        return;
      }
      console.log(numWords, filterExpression);
      const data = await random(+numWords, filterExpression);
      setResults(data);
      setLoading(false);
      return;
    }
    const data = await random(+numWords);
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    if (numWords.length === 0) {
      setResults([]);
      return;
    }
    if (incomplete) {
      return;
    }
    debounce(execute);
  }, [numWords, filterExpression]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => debounce(execute)}
        />
      }
    >
      <Accordion
        closedContent={<Text>{uiRandom.randomOptions}</Text>}
        openedContent={
          <>
            <Text style={styles.label}>{uiRandom.numWords}</Text>
            <NumericTextInput
              placeholder={"1-100"}
              onChangeText={updateNumWords}
              value={numWords}
              autoFocus
            />
            <Text style={styles.label}>{uiRandom.where}</Text>
            {filters.map((_, i) => (
              <View key={`feb_${i}`}>
                {i > 0 && <Text style={styles.label}>{uiList.and}</Text>}
                <SmallButton
                  onPress={() => removeFilterExpression(i)}
                  icon="trash"
                />
                <FilterExpressionBuilder
                  value={filters[i]}
                  onChange={(value) => updateFilterExpression(i, value)}
                />
              </View>
            ))}
            <Button
              onPress={addFilterExpression}
              icon="plus"
              disabled={disabled}
            />
          </>
        }
      />
      <Button onPress={() => debounce(execute)} icon="refresh" />
      <ResultCount
        visible={numWords.length > 0 && results.length > 0}
        resultCount={results.length}
      />
      <ListResults loading={loading} results={results} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
