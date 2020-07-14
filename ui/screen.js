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
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Modal from "react-native-modal";
import ActionBar from "./action-bar";
import MyStatusBar from "./status-bar";
import Entry from "./entry";
import ModalContent from "./modal-content";

// The main content area of the app
class Screen extends Component {
  constructor(props) {
    super(props);
    this.ApiUrl = this.props.ApiUrl;
    this.state = {
      isLoading: true,
      text: "",
      data: [],
      endpoint: this.ApiUrl,
      isModalVisible: false,
      selectedItem: {},
    };
  }

  toggleModal = (item) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      selectedItem: item,
    });
  };

  // called when the user pulls down on the word list after it has rendered
  async onRefresh() {
    this.setState({ data: [] });
    this.fetchData(this.state.endpoint);
  }

  // fetches Na'vi word data from the Fwew API and updates the state data accordingly
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
    // fetch data and re-render after this component is mounted to the DOM and rendered in initial loading state
    this.fetchData(this.state.endpoint);
  }

  // called whenever the user types or modifies text in the text input of the action bar / app bar
  async searchData(text) {
    this.setState(
      {
        text: text,
        endpoint: this.ApiUrl + text,
      },
      // use this.ApiUrl + text rather than this.state.endpoint so that the list isn't a render behind the search bar
      this.fetchData(this.ApiUrl + text)
    );
  }

  render() {
    // render activity indicator when loading
    if (this.state.isLoading) {
      return (
        <SafeAreaView style={styles.container}>
          <MyStatusBar backgroundColor="#537AA8" barStyle="dark-content" />
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
    // otherwise render content according to data array
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
          // only try to render the list if there is data for it
          <View style={{ flexDirection: "row", flex: 1 }}>
            <FlatList
              data={this.state.data}
              extraData={this.state.endpoint}
              keyExtractor={(item) => item.ID}
              contentContainerStyle={styles.contentContainer}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    this.toggleModal(item);
                  }}
                >
                  <Entry
                    number={index + 1}
                    navi={item.Navi}
                    ipa={item.IPA}
                    pos={item.PartOfSpeech}
                    syllables={item.Syllables}
                    infixDots={item.InfixDots}
                    en={item.EN}
                  />
                </TouchableOpacity>
              )}
              // Pull to Refresh
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isLoading}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }
            />
          </View>
        )}
        {this.state.data.message && (
          // for the situation the API returns {message: "no results"}
          <View style={{ alignItems: "center" }}>
            <Text>
              {this.state.data.message}: {this.state.text}
            </Text>
          </View>
        )}
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
          onSwipeComplete={() => this.setState({ isModalVisible: false })}
          backdropTransitionOutTiming={0}
        >
          <ModalContent
            entry={this.state.selectedItem}
            // onModalBackButtonPress={() => {
            //   this.setState({ isModalVisible: false });
            // }}
          />
        </Modal>
      </View>
    );
  }
}

// height and top margin of the text input varies on iOS and Android due to the app bar height difference
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
