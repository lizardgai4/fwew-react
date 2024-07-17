import { Text, View } from "@/components/common/Themed";
import { FlatList, StyleSheet } from "react-native";

export default function CameronScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cameron words:</Text>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={[
          {
            key: "A1 Names:",
            value:
              "Akwey, Ateyo, Eytukan, Eywa, Mo'at, Na'vi, Newey, Neytiri, Ninat, Omatikaya, Otranyu, Rongloa, Silwanin, Tskaha, Tsu'tey, Tsumongwi",
          },
          {
            key: "A2 Names:",
            value:
              "Aonung, Kiri, Lo'ak, Neteyam, Ronal, Rotxo, Tonowari, Tuktirey, Tsireya",
          },
          {
            key: "Nouns:",
            value:
              "'itan, 'ite, atan, au (drum), eyktan, i'en, Iknimaya, mikyun, ontu, seyri, tsaheylu, tsahìk, unil",
          },
          {
            key: "Life:",
            value: "Atokirina', Ikran, Palulukan, Riti, talioang, teylu, Toruk",
          },
          { key: "Other:", value: "eyk, irayo, makto, taron, te" },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={{ marginBottom: 10 }}>
              <Text>
                <Text style={styles.subheader}>{item.key}</Text>{" "}
                <Text style={styles.words}>{item.value}</Text>
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  words: {
    fontSize: 16,
  },
});
