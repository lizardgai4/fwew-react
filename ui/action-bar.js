import React, { useContext } from "react";
import { Image, TextInput, View } from "react-native";
import fwew from "../assets/fwew.png";
import styles from "./styles";

// Import Context
import { AppContext } from "../AppContext";

export default function ActionBar() {
  const { state, dispatch } = useContext(AppContext);
  const changeInputValue = (newValue) => {
    dispatch({ type: "UPDATE_INPUT", data: newValue });
  };

  return (
    <View style={styles.action_bar}>
      <Image source={fwew} style={styles.icon} />
      <TextInput
        value={state.inputText}
        onChangeText={(query) => changeInputValue(query)}
        placeholder={"search..."}
        style={styles.input}
      />
    </View>
  );
}
