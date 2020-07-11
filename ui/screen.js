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
import React, { Component } from "react";
import {
  ActivityIndicator,
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
import axios from "axios";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.ApiUrl = this.props.ApiUrl;
    this.state = {
      isLoading: true,
      text: "",
      data: [],
      endpoint: this.ApiUrl,
    };
  }

  async onRefresh() {
    this.setState({ data: [] });
    this.fetchData(this.state.endpoint);
  }

  fetchData(endpoint) {
    axios
      .get(endpoint)
      .then((response) => {
        this.setState({ isLoading: false, data: response.data });
      })
      .catch((e) => {
        this.setState({ isLoading: false, data: [] });
      });
  }

  async componentDidMount() {
    this.fetchData(this.state.endpoint);
  }

  async searchData(text) {
    this.setState(
      {
        text: text,
        endpoint: this.ApiUrl + text,
      },
      this.fetchData(this.ApiUrl + text)
    );
  }

  render() {
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

export default Screen;
