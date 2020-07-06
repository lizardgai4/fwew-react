import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import fwew from "./assets/fwew.png";

class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
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

class Entry extends Component {
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

class ResultView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://tirea.learnnavi.org/api/random/10")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <SafeAreaView style={styles.list}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.ID}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item, index }) => (
              <Entry
                number={index + 1}
                navi={item.Navi}
                pos={item.PartOfSpeech}
                en={item.EN}
              />
            )}
          />
        )}
      </SafeAreaView>
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
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
    borderRadius: 32,
  },
  list: {
    width: "100%",
  },
  contentContainer: {
    marginTop: 8,
    paddingBottom: 72,
  },
  entry: {
    padding: 20,
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#ddd",
    flexDirection: "row",
    overflow: "hidden",
  },
  entry_index: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7494BA",
    borderRadius: 45,
  },
  entry_number: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  entry_navi: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 16,
  },
  entry_pos: { fontStyle: "italic", fontSize: 14, marginLeft: 8, marginTop: 8 },
  entry_en: { fontSize: 14, marginLeft: 8, marginTop: 8 },
});
