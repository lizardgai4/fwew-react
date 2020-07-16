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
import React, { Component, Fragment } from "react";
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import axios from "axios";
import Modal from "react-native-modal";
import ActionBar from "./action-bar";
import ModalContent from "./modal-content";
import WordList from "./word-list";

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

  // toggles info modal visible when user taps a list entry or modal backdrop
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
    return (
      <Fragment>
        {/* status bar */}
        <SafeAreaView style={styles.safeStatusBar} />
        <StatusBar barStyle="light-content" />

        {/* main content */}
        <SafeAreaView style={styles.safeContainer}>
          <View style={{ flex: 1 }}>
            <ActionBar>
              <TextInput
                onChangeText={(text) => this.searchData(text)}
                placeholder={"search..."}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={styles.input}
              />
            </ActionBar>

            {/*
            render activity indicator when loading 
            render word list when finished loading
            */}
            {this.state.isLoading ? (
              <ActivityIndicator style={{ marginTop: 16 }} />
            ) : (
              <WordList
                data={this.state.data}
                text={this.state.text}
                isLoading={this.state.isLoading}
                onRefresh={() => this.onRefresh()}
                toggleModal={(item) => this.toggleModal(item)}
              />
            )}

            {/* word information modal when user taps an entry in the list */}
            <Modal
              isVisible={this.state.isModalVisible}
              onBackButtonPress={() =>
                this.toggleModal(this.state.selectedItem)
              }
              onBackdropPress={() => this.toggleModal(this.state.selectedItem)}
              backdropTransitionOutTiming={0}
            >
              <ModalContent
                entry={this.state.selectedItem}
                onModalBackButtonPress={() => {
                  this.toggleModal(this.state.selectedItem);
                }}
              />
            </Modal>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

// height and top margin of the text input varies on iOS and Android due to the app bar height difference
const INPUT_HEIGHT = Platform.OS === "ios" ? 32 : 40;
const INPUT_MARGIN_TOP = Platform.OS === "ios" ? 2 : 4;

const styles = StyleSheet.create({
  safeStatusBar: {
    flex: 0,
    backgroundColor: "#537AA8",
  },
  safeContainer: {
    flex: 1,
  },
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
});

export default Screen;
