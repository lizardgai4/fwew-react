import { DropDownSelect } from "@/components/common/DropDownSelect";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { Text, View } from "@/components/common/Themed";
import stringsList from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type {
  FilterExpressionMenuValue,
  ListMenuCondItem,
  ListMenuWhatItem,
} from "@/types/list";
import { StyleSheet } from "react-native";
import { AlphaTextInput } from "./AlphaTextInput";

type FilterExpressionBuilderProps = {
  value: FilterExpressionMenuValue;
  onChange: (value: FilterExpressionMenuValue) => void;
};

export function FilterExpressionBuilder({
  value,
  onChange,
}: FilterExpressionBuilderProps) {
  const { appLanguage } = useAppLanguageContext();
  const ui = stringsList[appLanguage];
  const whatValues = ui.listMenu.whatValues;
  const condValues = value.what ? ui.listMenu.condValues[value.what.value] : [];
  const isNumericSpec =
    value.what?.value === "syllables" ||
    value.what?.value === "stress" ||
    value.what?.value === "length";

  const setWhat = (what: ListMenuWhatItem | undefined) => {
    onChange({
      what,
      cond: undefined,
      spec: value.spec,
    });
  };

  const setCond = (cond: ListMenuCondItem | undefined) => {
    onChange({
      what: value?.what,
      cond,
      spec: value.spec,
    });
  };

  const setSpec = (spec: string) => {
    onChange({
      what: value?.what,
      cond: value?.cond,
      spec,
    });
  };

  return (
    <View>
      {/* what */}
      <DropDownSelect
        options={whatValues}
        value={value.what}
        initiallyOpen={!value.what}
        renderOption={(option) => (
          <Text style={styles.text}>{option?.description}</Text>
        )}
        keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
        onChange={setWhat}
      />
      {/* cond */}
      {value.what && (
        <DropDownSelect
          options={condValues}
          value={value.cond}
          initiallyOpen={!value.cond}
          renderOption={(option) => (
            <Text style={styles.text}>{option?.description}</Text>
          )}
          keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
          onChange={setCond}
        />
      )}
      {/* spec numeric */}
      {value.what && value.cond && isNumericSpec && (
        <NumericTextInput
          value={value.spec}
          onChangeText={setSpec}
          placeholder={`${value.what?.description} ${value.cond?.description}...`}
          autoFocus
        />
      )}
      {/* spec non-numeric */}
      {value.what && value.cond && !isNumericSpec && (
        <AlphaTextInput
          value={value.spec}
          onChangeText={setSpec}
          placeholder={`${value.what?.description} ${value.cond?.description}...`}
          autoFocus
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
