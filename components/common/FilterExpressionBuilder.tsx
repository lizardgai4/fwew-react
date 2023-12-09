import { DropDownSelect } from "@/components/common/DropDownSelect";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { Text, View } from "@/components/common/Themed";
import stringsList from "@/constants/ui/list";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import type { ListMenuCondItem, ListMenuWhatItem } from "@/types/list";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

type FilterExpressionBuilderProps = {
  onChange: (text: string) => void;
};

export function FilterExpressionBuilder({
  onChange,
}: FilterExpressionBuilderProps) {
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
      <DropDownSelect
        options={whatValues}
        value={what}
        initiallyOpen
        renderOption={(option) => (
          <Text style={styles.text}>{option?.description}</Text>
        )}
        keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
        onChange={setWhat}
      />
      {what && (
        <DropDownSelect
          options={condValues}
          value={cond}
          initiallyOpen
          renderOption={(option) => (
            <Text style={styles.text}>{option?.description}</Text>
          )}
          keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
          onChange={setCond}
        />
      )}
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

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});
