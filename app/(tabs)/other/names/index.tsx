import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import { View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { ScrollView, StyleSheet } from "react-native";

export default function NamesScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names } = getUI(appLanguage, dialect);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenLinkCard
          href="/other/names/name-single"
          title={names.single}
          description="Neytiri"
        />
        <ScreenLinkCard
          href="/other/names/name-full"
          title={names.full}
          description="Neytiri te Tskaha Mo'at'ite"
        />
        <ScreenLinkCard
          href="/other/names/name-alu"
          title={names.alu}
          description="Neytiri alu Taronyu Teyluä"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    gap: 32,
  },
});
