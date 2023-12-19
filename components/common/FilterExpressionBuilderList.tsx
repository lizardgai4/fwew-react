import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Button } from "./Button";
import { FilterExpressionBuilder } from "./FilterExpressionBuilder";
import { SmallButton } from "./SmallButton";
import { Text, View } from "./Themed";

type FilterExpressionBuilderListProps = {
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, expression: FilterExpressionBuilderValue) => void;
  disabled: boolean;
};

export function FilterExpressionBuilderList(
  props: FilterExpressionBuilderListProps
) {
  const { filters, add, remove, update, disabled } = props;
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { list } = i18n[appLanguage];

  return (
    <View>
      {filters.map((_, i) => (
        <View key={`feb_${i}`} style={styles.feb}>
          {i > 0 && <Text style={styles.label}>{list.and}</Text>}
          <SmallButton
            onPress={() => remove(i)}
            icon="trash"
            color={colors.notification}
          />
          <FilterExpressionBuilder
            value={filters[i]}
            onChange={(value) => update(i, value)}
          />
        </View>
      ))}
      <Button onPress={add} icon="plus" disabled={disabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  feb: {
    paddingBottom: 8,
  },
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
