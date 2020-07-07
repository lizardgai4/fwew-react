import React, { Component } from "react";
import { Image, TextInput, View } from "react-native";
import fwew from "../assets/fwew.png";
import styles from "./styles";

export default class ActionBar extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <View style={styles.action_bar}>
        <Image source={fwew} style={styles.icon} />
        <TextInput
          value={this.state.query}
          onChangeText={(query) => this.setState({ query })}
          placeholder={"search..."}
          style={styles.input}
        />
      </View>
    );
  }
}
