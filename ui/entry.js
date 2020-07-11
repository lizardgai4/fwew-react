import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import EntryIndex from "./entry-index";

function Entry(props) {
  return (
    <View style={styles.entry}>
      <EntryIndex number={props.number} />
      <Text numberOfLines={1} selectable={true} style={styles.entry_navi}>
        {props.navi + " "}
        <Text selectable={true} style={styles.entry_pos}>
          {props.pos + " "}
        </Text>
        <Text selectable={true} style={styles.entry_en}>
          {props.en}
        </Text>
      </Text>
      <Entypo
        style={styles.entry_chevron}
        name="chevron-thin-right"
        size={24}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  entry: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#ddd",
    flexDirection: "row",
  },
  entry_navi: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 16,
    flex: 1,
  },
  entry_pos: { fontStyle: "italic", fontSize: 14, marginLeft: 8, marginTop: 8 },
  entry_en: { fontSize: 14, marginLeft: 8, marginTop: 8 },
  entry_chevron: { marginLeft: "auto" },
});

export default Entry;
