{
  /* This file is part of fwew-react. 
    fwew-react: Fwew Na'vi Dictionary app written using React Native
    Copyright (C) 2020  Corey Scheideman <corscheid@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. */
}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EntryIndex from "./entry-index";

// a list row entry item
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
