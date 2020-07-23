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
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput, List } from "react-native-paper";
import ListSettings from "./list-settings";
import colors from "./colors";

// content of the modal which appears when user taps on an entry
function Settings({ screenType, onSettingsBackButtonPress }) {
  const [text, setText] = React.useState("");

  let title = (
    <Text selectable={true} style={styles.modal_navi}>
      {`${screenType} | settings`}
    </Text>
  );
  let content;
  switch (screenType) {
    case "fwew":
      content = (
        <View style={styles.modal_group}>
          <Text style={styles.modal_label}>part of speech filter</Text>
          <TextInput
            mode="outlined"
            label="show only..."
            value="all"
            placeholder="all"
            theme={inputTheme}
            style={styles.input}
          />
        </View>
      );
      break;
    case "list":
      content = <ListSettings />;
      break;
    case "random":
      content = (
        <ListSettings>
          <Text style={styles.modal_label}>how many?</Text>
          <TextInput
            mode="outlined"
            label="number of random words"
            value="8"
            placeholder="8"
            theme={inputTheme}
            style={styles.input}
          />
        </ListSettings>
      );
  }
  return (
    <View style={styles.modalContainer}>
      {title}
      {content}
      <Button
        title="ok"
        onPress={onSettingsBackButtonPress}
        color={colors.secondary}
      />
    </View>
  );
}

const inputTheme = {
  colors: {
    primary: colors.primary,
    accent: colors.secondary,
  },
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.modalBackground,
    flexDirection: "column",
    padding: 16,
    borderRadius: 16,
    borderColor: colors.modalBorder,
  },
  modal_group: {
    marginTop: 16,
    marginBottom: 16,
  },
  modal_navi: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  modal_label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modal_text: {
    fontSize: 14,
    fontWeight: "normal",
  },
  modal_row: {
    flexDirection: "row",
  },
  dropdown: {
    width: 128,
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
});

export default Settings;
