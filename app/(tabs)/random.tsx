import { Accordion } from "@/components/common/Accordion";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { RefreshButton } from "@/components/common/RefreshButton";
import { ResultCount } from "@/components/common/ResultCount";
import { Text, View } from "@/components/common/Themed";
import { ListResults } from "@/components/list/ListResults";
import Colors from "@/constants/Colors";
import stringsList from "@/constants/ui/list";
import stringsRandom from "@/constants/ui/random";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import { ListMenuCondItem, ListMenuWhatItem } from "@/types/list";
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
  const [filterExpression, setFilterExpression] = useState("");
  const debounce = useDebounce();
  const { appLanguage } = useAppLanguageContext();
  const ui = stringsRandom[appLanguage];

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
    if (numWords.length > 0) {
      debounce(execute);
      return;
    }
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
        closedContent={<Text>{ui.randomOptions}</Text>}
        openedContent={
          <>
            <Text style={styles.label}>{ui.numWords}</Text>
            <NumericTextInput
              placeholder={"1-100"}
              onChangeText={updateNumWords}
              value={numWords}
            />
            <Text style={styles.label}>{ui.where}</Text>
            <FilterExpressionBuilder onChange={setFilterExpression} />
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

type FilterExpressionBuilderProps = {
  onChange: (text: string) => void;
};

function FilterExpressionBuilder({ onChange }: FilterExpressionBuilderProps) {
  const [what, setWhat] = useState<ListMenuWhatItem>();
  const [cond, setCond] = useState<ListMenuCondItem>();
  const [spec, setSpec] = useState<string>("");
  const { appLanguage } = useAppLanguageContext();
  const ui = stringsList[appLanguage];
  const whatValues = ui.listMenu.whatValues;
  const condValues = what ? ui.listMenu.condValues[what.value] : [];

  useEffect(() => {
    if (!what || !cond || !spec) {
      return;
    }
    onChange(`${what.value} ${cond.value} ${spec}`);
  }, [what, cond, spec]);

  return (
    <View style={{}}>
      {/* what */}
      <DropDownSelect
        options={whatValues}
        value={what}
        initiallyOpen
        renderOption={(option) => (
          <Text style={{ padding: 10 }}>{option?.description}</Text>
        )}
        keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
        onChange={setWhat}
      />
      {/* cond */}
      {what && (
        <DropDownSelect
          options={condValues}
          value={cond}
          initiallyOpen
          renderOption={(option) => (
            <Text style={{ padding: 10 }}>{option?.description}</Text>
          )}
          keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
          onChange={setCond}
        />
      )}
      {/* spec */}
      {what && cond && (
        <NumericTextInput
          value={spec}
          onChangeText={setSpec}
          placeholder={`${what?.description} ${cond?.description}...`}
        />
      )}
    </View>
  );
}

type DropDownSelectProps<T> = {
  options: T[];
  value: T;
  initiallyOpen?: boolean;
  renderOption: (option: T) => React.ReactNode;
  keyExtractor: (option: T, index: number) => string;
  onChange: (value: T) => void;
};

function DropDownSelect<T>({
  options,
  value,
  initiallyOpen,
  renderOption,
  keyExtractor,
  onChange,
}: DropDownSelectProps<T>) {
  const [open, setOpen] = useState(initiallyOpen ?? false);
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const toggle = () => setOpen((prev) => !prev);

  const handleChange = (option: T) => {
    onChange(option);
    toggle();
  };

  return (
    <View style={{ borderWidth: 1, borderColor: colors.text }}>
      <TouchableOpacity
        onPress={toggle}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 10,
          paddingVertical: 8,
        }}
      >
        {value ? renderOption(value) : <View style={{ padding: 16 }} />}
        <FontAwesome
          name={open ? "chevron-down" : "chevron-right"}
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
      {open && (
        <>
          {options.map((option, i) => (
            <TouchableOpacity
              key={keyExtractor(option, i)}
              onPress={() => handleChange(option)}
            >
              {renderOption(option)}
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
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
