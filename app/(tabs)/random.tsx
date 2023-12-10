import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { ResultCount } from "@/components/common/ResultCount";
import { Text } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import strings from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterExpression } from "@/hooks/useFilterExpression";
import { useRandom } from "@/hooks/useRandom";
import { NumericString } from "@/types/common";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function RandomScreen() {
  const [numWords, setNumWords] = useState<NumericString>("8");
  const {
    filters,
    filterExpression,
    disabled,
    incomplete,
    add,
    remove,
    update,
  } = useFilterExpression();
  const { loading, results, execute } = useRandom();
  const debounce = useDebounce();
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

  const updateNumWords = (num: NumericString) => {
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

  const getData = async () => {
    if (numWords.length === 0) {
      return;
    }
    if (filterExpression.length > 0 && incomplete) {
      return;
    }
    debounce(() => execute(numWords, filterExpression));
  };

  useEffect(() => {
    if (!incomplete) {
      getData();
    }
  }, [numWords, filterExpression]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => getData()} />
      }
    >
      <Accordion
        closedContent={<Text>{ui.randomOptions}</Text>}
        openedContent={
          <>
            <Text style={styles.label}>{ui.numWords}</Text>
            <NumericTextInput
              placeholder={"1-100"}
              onChangeText={updateNumWords}
              value={numWords}
              autoFocus
            />
            <Text style={styles.label}>{ui.where}</Text>
            <FilterExpressionBuilderList
              filters={filters}
              add={add}
              remove={remove}
              update={update}
              disabled={disabled}
            />
          </>
        }
      />
      <Button onPress={() => getData()} icon="refresh" />
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
