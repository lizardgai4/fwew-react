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
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "./colors";

// content of the modal which appears when user taps on an entry
function FwewSettings({ onSettingsBackButtonPress }) {
  const [posFilterText, setPosFilterText] = React.useState("all");
  const [languageCode, setLanguageCode] = React.useState("en");
  const [isReverseEnabled, setIsReverseEnabled] = React.useState(false);
  const toggleReverseSwitch = () =>
    setIsReverseEnabled((previousState) => !previousState);

  return (
    <View style={styles.modalContainer}>
      <Text selectable={true} style={styles.modal_navi}>
        fwew | settings
      </Text>
      <View style={styles.modal_group}>
        <Text style={styles.modal_label}>language</Text>
        <TextInput
          mode="outlined"
          label="language"
          value={languageCode}
          placeholder="en"
          theme={inputTheme}
          style={styles.input}
          onChangeText={(text) => {
            setLanguageCode(text);
          }}
        />
        <Text style={styles.modal_label}>search direction</Text>
        <View style={styles.modal_row}>
          <Text>
            {isReverseEnabled ? "English > Na'vi" : "Na'vi > English"}
          </Text>
          <Switch
            style={{ alignSelf: "flex-end" }}
            trackColor={{
              false: colors.switchTrackColorFalse,
              true: colors.switchTrackColorTrue,
            }}
            thumbColor={
              isReverseEnabled
                ? colors.switchThumbColorTrue
                : colors.switchThumbColorFalse
            }
            ios_backgroundColor={colors.switchIOSBackgroundColor}
            onValueChange={toggleReverseSwitch}
            value={isReverseEnabled}
          />
        </View>
        <Text style={styles.modal_label}>part of speech filter</Text>
        <TextInput
          mode="outlined"
          label="show only..."
          value={posFilterText}
          placeholder="all"
          theme={inputTheme}
          style={styles.input}
          onChangeText={(text) => {
            setPosFilterText(text);
          }}
        />
      </View>
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
  modal_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.modalRowBorder,
    borderRadius: 4,
    padding: 12,
  },
  input: {
    backgroundColor: colors.inputBackground,
  },
});

export default FwewSettings;
