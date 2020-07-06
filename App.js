import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

// import UI components
import ActionBar from "./ui/action-bar";
import Entry from "./ui/entry";
import ResultView from "./ui/result-view";
import styles from "./ui/styles";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7494BA" />
        <ActionBar />
        <ResultView />
      </View>
    );
  }
}
