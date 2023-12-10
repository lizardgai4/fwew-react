import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { FilterExpressionBuilder } from "@/components/common/FilterExpressionBuilder";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { ResultCount } from "@/components/common/ResultCount";
import { Text, View } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import Colors from "@/constants/Colors";
import stringsList from "@/constants/ui/list";
import stringsRandom from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { FilterExpressionMenuValue } from "@/types/list";
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
    filterExpressions[filterExpressions.length - 1]?.spec === "";
  const incompleteExpressions = filterExpressions.filter(
    (fe) => (fe.what || fe.cond) && !fe.spec.trim()
  );

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

  const removeFilterExpression = (index: number) => {
    const newExpressions = [...filterExpressions];
    newExpressions.splice(index, 1);
    setFilterExpressions(newExpressions);
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
    const filterString = filterExpressions
      .map((f) =>
        `${f.what?.value ?? ""} ${f.cond?.value ?? ""} ${f.spec}`
          .trim()
          .replace(/ +/g, " ")
      )
      .join(" and ")
      .trim();
    if (filterString.length > 0) {
      if (incompleteExpressions.length > 0) {
        return;
      }
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
    if (incompleteExpressions.length > 0) {
      return;
    }
    debounce(execute);
  }, [numWords, filterExpressions]);

  useEffect(() => {
    setFilterExpressions((prev) => {
      return prev.map((e) => {
        return {
          what: e.what && {
            value: e.what.value,
            description: stringsList[appLanguage].listMenu.whatValues.filter(
              (w) => w.value === e.what?.value
            )[0]?.description,
          },
          cond: e.cond && {
            value: e.cond.value,
            description:
              e.what &&
              stringsList[appLanguage].listMenu.condValues[e.what.value].filter(
                (c) => c.value === e.cond?.value
              )[0]?.description,
          },
          spec: e.spec,
        } as FilterExpressionMenuValue;
      });
    });
  }, [appLanguage]);

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
            {filterExpressions.map((_, i) => (
              <View key={`feb_${i}`}>
                {i > 0 && <Text style={styles.label}>{uiList.and}</Text>}
                <TouchableOpacity
                  onPress={() => removeFilterExpression(i)}
                  style={[styles.button, { borderColor: colors.text }]}
                >
                  <FontAwesome name="trash" size={24} color={colors.text} />
                </TouchableOpacity>
                <FilterExpressionBuilder
                  value={filterExpressions[i]}
                  onChange={(value) => updateFilterExpression(i, value)}
                />
              </View>
            ))}
            <Button
              onPress={addFilterExpression}
              icon="plus"
              disabled={addDisabled}
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
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
});
