import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/components/common/Themed";

export default function CameronScreen() {
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const ui = i18n[appLanguage].search;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <Text style={styles.header}>Lenition:</Text>
      <FlatList
          data={[
            { key: 'Px:', value: 'P' },
            { key: 'P:', value: 'F' },
            { key: 'Tx:', value: 'T' },
            { key: 'T:', value: 'S' },
            { key: 'Kx:', value: 'K' },
            { key: 'K:', value: 'H' },
            { key: 'Ts:', value: 'S' },
            { key: '\':', value: 'Disappears (except before psuedovowel)' },
            { key: 'Leniting prefixes:', value: 'me+, pxe+, ay+, pe+' },
            { key: 'Leniting adpositions:', value: 'fpi, ìlä, lisre, mì, nuä, pxisre, ro, sko, sre, wä' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text><Text style={styles.subheader}>{item.key}</Text> <Text style={styles.words}>{item.value}</Text></Text>
              </View>
            );
          }}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  words: {
    fontSize: 16,
  }
});
