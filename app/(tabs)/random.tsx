import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilder } from "@/components/common/FilterExpressionBuilder";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { RefreshButton } from "@/components/common/RefreshButton";
import { ResultCount } from "@/components/common/ResultCount";
import { Text } from "@/components/common/Themed";
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

export default function RandomScreen() {
  const [numWords, setNumWords] = useState("8");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);
  const [filterExpressions, setFilterExpressions] = useState<string[]>([""]);
  const debounce = useDebounce();
  const { appLanguage } = useAppLanguageContext();
  const uiRandom = stringsRandom[appLanguage];
  const uiList = stringsList[appLanguage];
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const addDisabled = filterExpressions[filterExpressions.length - 1] === "";

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
    setFilterExpressions([...filterExpressions, ""]);
  };

  const updateFilterExpression = (index: number, expression: string) => {
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
      const data = await random(+numWords, filterExpressions.join(" and "));
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
              <>
                {i > 0 && <Text style={styles.label}>{uiList.and}</Text>}
                <FilterExpressionBuilder
                  key={`feb_${i}`}
                  onChange={(text) => updateFilterExpression(i, text)}
                />
              </>
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
