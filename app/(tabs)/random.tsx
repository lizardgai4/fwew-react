import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilder } from "@/components/common/FilterExpressionBuilder";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { RefreshButton } from "@/components/common/RefreshButton";
import { ResultCount } from "@/components/common/ResultCount";
import { Text, View } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import Colors from "@/constants/Colors";
import stringsRandom from "@/constants/ui/random";
import stringsList from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { FontAwesome } from "@expo/vector-icons";
import type { Word } from "fwew.js";
import { random } from "fwew.js";
import { useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { FilterExpressionMenuValue } from "@/types/list";

export default function RandomScreen() {
  const [numWords, setNumWords] = useState("8");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);
  const [filterExpressions, setFilterExpressions] = useState<
    FilterExpressionMenuValue[]
  >([{ spec: "" }]);
  const debounce = useDebounce();
  const { appLanguage } = useAppLanguageContext();
  const uiRandom = stringsRandom[appLanguage];
  const uiList = stringsList[appLanguage];
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const addDisabled =
    filterExpressions[filterExpressions.length - 1].spec === "";

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

  const addFilterExpression = () => {
    setFilterExpressions([...filterExpressions, { spec: "" }]);
  };

  const updateFilterExpression = (
    index: number,
    expression: FilterExpressionMenuValue
  ) => {
    const newExpressions = [...filterExpressions];
    newExpressions[index] = expression;
    setFilterExpressions(newExpressions);
  };

  const execute = async () => {
    if (numWords.length === 0) {
      return;
    }
    setLoading(true);
    if (filterExpressions.join("").length > 0) {
      const filterString = filterExpressions
        .map((f) => `${f.what?.value} ${f.cond?.value} ${f.spec.trim()}`)
        .join(" and ");
      console.log(numWords, filterString);
      const data = await random(+numWords, filterString);
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
    if (numWords.length > 0) {
      debounce(execute);
      return;
    }
  }, [numWords, filterExpressions]);

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
            />
            <Text style={styles.label}>{uiRandom.where}</Text>
            {filterExpressions.map((_, i) => (
              <View key={`feb_${i}`}>
                {i > 0 && <Text style={styles.label}>{uiList.and}</Text>}
                <FilterExpressionBuilder
                  value={filterExpressions[i]}
                  onChange={(value) => updateFilterExpression(i, value)}
                />
              </View>
            ))}
            <TouchableOpacity
              onPress={addFilterExpression}
              style={{
                flexDirection: "row",
                gap: 8,
                padding: 16,
                borderWidth: 1,
                borderColor: addDisabled ? colors.placeholder : colors.text,
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={addDisabled}
            >
              <FontAwesome
                name="plus"
                size={24}
                color={addDisabled ? colors.placeholder : colors.text}
              />
            </TouchableOpacity>
          </>
        }
      />
      <RefreshButton
        execute={() => debounce(execute)}
        disabled={numWords.length === 0}
        title=""
      />
      <ResultCount
        visible={numWords.length > 0 && results.length > 0}
        resultCount={results.length}
      />
      <ListResults results={results} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
