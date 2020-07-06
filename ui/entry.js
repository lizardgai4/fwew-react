import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

class EntryIndex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.entry_index}>
        <Text style={styles.entry_number}>{this.props.number}</Text>
      </View>
    );
  }
}

export default class Entry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.entry}>
        <EntryIndex number={this.props.number} />
        <Text style={styles.entry_navi}>{this.props.navi}</Text>
        <Text style={styles.entry_pos}>{this.props.pos}</Text>
        <Text style={styles.entry_en}>{this.props.en}</Text>
      </View>
    );
  }
}
