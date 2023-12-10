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
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { AlphaTextInput } from "./AlphaTextInput";
import { RefreshButton } from "./RefreshButton";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type FilterExpressionBuilderProps = {
  value: FilterExpressionMenuValue;
  onChange: (value: FilterExpressionMenuValue) => void;
  removeSelf?: () => void;
};

export function FilterExpressionBuilder({
  value,
  onChange,
  removeSelf,
}: FilterExpressionBuilderProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
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
      {/* remove */}
      <TouchableOpacity
        onPress={removeSelf}
        style={[styles.button, { borderColor: colors.text }]}
      >
        <FontAwesome name="trash" size={24} color={colors.text} />
      </TouchableOpacity>
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
