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
import { useEffect, useState } from "react";
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
  const [what, setWhat] = useState<ListMenuWhatItem | undefined>(value.what);
  const [cond, setCond] = useState<ListMenuCondItem | undefined>(value.cond);
  const [spec, setSpec] = useState<string>(value.spec);
  const { appLanguage } = useAppLanguageContext();
  const ui = stringsList[appLanguage];
  const whatValues = ui.listMenu.whatValues;
  const condValues = what ? ui.listMenu.condValues[what.value] : [];
  const isNumericSpec =
    what?.value === "syllables" ||
    what?.value === "stress" ||
    what?.value === "length";

  useEffect(() => {
    if (!what || !cond || !spec) {
      return;
    }
    onChange({ what, cond, spec });
  }, [what, cond, spec]);

  return (
    <View>
      {/* what */}
      <DropDownSelect
        options={whatValues}
        value={what}
        initiallyOpen={!what}
        renderOption={(option) => (
          <Text style={styles.text}>{option?.description}</Text>
        )}
        keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
        onChange={setWhat}
      />
      {/* cond */}
      {what && (
        <DropDownSelect
          options={condValues}
          value={cond}
          initiallyOpen={!cond}
          renderOption={(option) => (
            <Text style={styles.text}>{option?.description}</Text>
          )}
          keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
          onChange={setCond}
        />
      )}
      {/* spec numeric */}
      {what && cond && isNumericSpec && (
        <NumericTextInput
          value={spec}
          onChangeText={setSpec}
          placeholder={`${what?.description} ${cond?.description}...`}
          autoFocus
        />
      )}
      {/* spec non-numeric */}
      {what && cond && !isNumericSpec && (
        <AlphaTextInput
          value={spec}
          onChangeText={setSpec}
          placeholder={`${what?.description} ${cond?.description}...`}
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
