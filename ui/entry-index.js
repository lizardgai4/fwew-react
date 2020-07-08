import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EntryIndex(props) {
  return (
    <View style={styles.entry_index}>
      <Text style={styles.entry_number}>{props.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  entry_index: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7494BA",
    borderRadius: 45,
  },
  entry_number: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});
