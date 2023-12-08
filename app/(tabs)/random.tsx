import { Accordion } from "@/components/common/Accordion";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { RefreshButton } from "@/components/common/RefreshButton";
import { ResultCount } from "@/components/common/ResultCount";
import { Text } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import strings from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { Word } from "fwew.js";
import { random } from "fwew.js";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

export default function RandomScreen() {
  const [numWords, setNumWords] = useState("8");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[]>([]);
  const debounce = useDebounce();
  const { appLanguage } = useAppLanguageContext();
  const ui = strings[appLanguage];

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
    }
  }, [numWords]);

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
        closedContent={<Text>{ui.randomOptions}</Text>}
        openedContent={
          <>
            <Text style={styles.label}>{ui.numWords}</Text>
            <NumericTextInput
              placeholder={"1-100"}
              onChangeText={updateNumWords}
              value={numWords}
            />
            {/* TODO: List Filter Expression Builder */}
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
  container: {
    flex: 1,
  },
  label: {
    padding: 16,
    fontWeight: "bold",
  },
  resultCount: {
    padding: 16,
    alignSelf: "center",
  },
});
