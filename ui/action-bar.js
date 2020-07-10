import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import fwew from "../assets/fwew.png";

export default function ActionBar(props) {
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
