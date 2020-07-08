import React, { useContext, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import Entry from "./entry";

// Import Context
import { AppContext } from "../AppContext";

export default function ResultView(props) {
  const { state, dispatch } = useContext(AppContext);
  const ApiUrl = "https://tirea.learnnavi.org/api";
  const ApiUrlFwew = `${ApiUrl}/fwew/`;
  const ApiUrlFwewReverse = `${ApiUrl}/fwew/r/`;
  const ApiUrlList = `${ApiUrl}/list/`;
  const ApiUrlRandom = `${ApiUrl}/random/`;

  const changeDataValue = (newValue) => {
    dispatch({ type: "UPDATE_DATA", data: newValue });
  };

  const changeLoadingStatus = (newValue) => {
    dispatch({ type: "UPDATE_LOADING_STATUS", data: newValue });
  };

  const getDataFromFwewApi = async () => {
    let numRandom = 10; // stub
    let args = ""; // stub
    let url;
    switch (props.endpoint) {
      case "fwew":
        url = ApiUrlFwew;
        break;
      case "fwewReverse":
        url = ApiUrlFwewReverse;
        break;
      case "list":
        url = ApiUrlList;
        if (args) {
          url += args;
        }
        break;
      case "random":
        url = ApiUrlRandom;
        if (numRandom) {
          url += numRandom + "/";
          if (args) {
            url += args;
          }
        }
        break;
    }
    let response;
    try {
      response = await axios.get(url + state.inputText);
    } catch (e) {
      response = { data: [] };
    }
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      changeLoadingStatus(true);
      const fwewData = await getDataFromFwewApi();
      changeDataValue(fwewData);
      changeLoadingStatus(false);
    };
    fetchData();
  }, [state.inputText]);

  let content;
  if (state.isLoading) {
    content = <ActivityIndicator style={{ marginTop: 16 }} />;
  } else if (state.data.message != null) {
    // 404 or other error, usually no result
    content = (
      <View style={styles.container}>
        <Text>{state.data.message + ": " + state.inputText}</Text>
      </View>
    );
  } else if (state.data.search_url != null) {
    // hit the root endpoint of the api, ignore the response
    content = <Text>{""}</Text>;
  } else {
    content = (
      <FlatList
        data={state.data}
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
      />
    );
  }

  return <SafeAreaView style={styles.list}>{content}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  contentContainer: {
    marginTop: 8,
    paddingBottom: 72,
  },
});
