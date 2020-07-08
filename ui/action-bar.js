import React, { useContext } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import fwew from "../assets/fwew.png";

// Import Context
import { AppContext } from "../AppContext";

export default function ActionBar(props) {
  const { state, dispatch } = useContext(AppContext);
  const changeInputValue = (newValue) => {
    dispatch({ type: "UPDATE_INPUT", data: newValue });
  };

  if (props.search) {
    return (
      <View style={styles.action_bar}>
        <Image source={fwew} style={styles.icon} />
        <TextInput
          value={state.inputText}
          onChangeText={(query) => changeInputValue(query)}
          placeholder={"search..."}
          autoCapitalize={"none"}
          autoCorrect={false}
          style={styles.input}
        />
      </View>
    );
  }

  return (
    <View style={styles.action_bar}>
      <Image source={fwew} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  action_bar: {
    height: 60,
    width: "100%",
    backgroundColor: "#7494BA",
    paddingTop: 4,
    flexDirection: "row",
  },
  icon: { marginLeft: 8, width: 48, height: 48 },
  input: {
    height: 48,
    width: "80%",
    paddingLeft: 16,
    marginLeft: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
});
