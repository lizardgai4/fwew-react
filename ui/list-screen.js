import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import ActionBar from "./action-bar";
import MyStatusBar from "./status-bar";
import Entry from "./entry";
import GetData from "../api";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.ApiUrl = "https://tirea.learnnavi.org/api/list/";
    this.arrayHolder = [];
    this.state = {
      isLoading: true,
      text: "",
      data: [],
      endpoint: this.ApiUrl,
    };
  }

  // TODO: try to fix the searchbar so that it's not at least one render ahead
  async onRefresh() {
    this.setState({ data: [] });
    await this.updateData();
  }

  async updateData() {
    let json = await GetData(this.state.endpoint);
    console.log("<ListScreen componentDidMount>");
    console.log(json);
    console.log("</ListScreen componentDidMount");
    this.setState(
      {
        isLoading: false,
        data: json,
      },
      () => {
        this.arrayHolder = json;
      }
    );
  }

  async componentDidMount() {
    await this.updateData();
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  async searchData(text) {
    await this.updateData();
    this.setState({
      text: text,
      endpoint: this.ApiUrl + text,
    });
  }

  render() {
    console.log("<ListScreen render>");
    console.log(this.state);
    console.log("</ListScreen render>");
    if (this.state.isLoading) {
      return (
        <SafeAreaView style={styles.container}>
          {Platform.OS === "ios" ? (
            <MyStatusBar backgroundColor="#537AA8" barStyle="dark-content" />
          ) : (
            <MyStatusBar backgroundColor="#537AA8" barStyle="light-content" />
          )}
          <ActionBar>
            <TextInput
              onChangeText={(text) => this.searchData(text)}
              placeholder={"search..."}
              autoCapitalize={"none"}
              autoCorrect={false}
              style={styles.input}
            />
          </ActionBar>
          <ActivityIndicator style={{ marginTop: 16 }} />
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#537AA8" barStyle="light-content" />
        <ActionBar>
          <TextInput
            onChangeText={(text) => this.searchData(text)}
            placeholder={"search..."}
            autoCapitalize={"none"}
            autoCorrect={false}
            style={styles.input}
          />
        </ActionBar>
        {this.state.data.length > 0 && (
          <View style={{ flexDirection: "row", flex: 1 }}>
            <FlatList
              data={this.state.data}
              extraData={this.state.endpoint}
              keyExtractor={(item) => item.ID}
              contentContainerStyle={styles.contentContainer}
              renderItem={({ item, index }) => (
                <Entry
                  number={index + 1}
                  navi={item.Navi}
                  pos={item.PartOfSpeech}
                  en={item.EN}
                />
              )}
              refreshControl={
                <RefreshControl
                  // refresh control used for the Pull to Refresh
                  refreshing={this.state.isLoading}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }
            />
          </View>
        )}
      </View>
    );
  }
}

const INPUT_HEIGHT = Platform.OS === "ios" ? 32 : 40;
const INPUT_MARGIN_TOP = Platform.OS === "ios" ? 2 : 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  input: {
    height: INPUT_HEIGHT,
    marginTop: INPUT_MARGIN_TOP,
    width: "80%",
    paddingLeft: 16,
    marginLeft: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  contentContainer: {
    marginTop: 8,
    paddingBottom: 72,
  },
});

export default ListScreen;
