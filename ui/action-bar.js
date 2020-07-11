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
import { Image, Platform, StyleSheet, View } from "react-native";
import fwew from "../assets/fwew.png";

function ActionBar(props) {
  return (
    <View style={styles.action_bar}>
      <Image source={fwew} style={styles.icon} />
      {props.children}
    </View>
  );
}

const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
const ICON_SIZE = Platform.OS === "ios" ? 32 : 48;

const styles = StyleSheet.create({
  action_bar: {
    height: APPBAR_HEIGHT,
    width: "100%",
    backgroundColor: "#7494BA",
    paddingTop: 4,
    flexDirection: "row",
  },
  icon: { marginLeft: 8, width: ICON_SIZE, height: ICON_SIZE },
});

export default ActionBar;
