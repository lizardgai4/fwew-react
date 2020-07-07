import React, { useContext, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import axios from "axios";
import Entry from "./entry";
import styles from "./styles";

// Import Context
import { AppContext } from "../AppContext";

export default function ResultView() {
  const { state, dispatch } = useContext(AppContext);
  const ApiUrlFwew = "https://tirea.learnnavi.org/api/fwew/";

  const changeDataValue = (newValue) => {
    dispatch({ type: "UPDATE_DATA", data: newValue });
  };

  const changeLoadingStatus = (newValue) => {
    dispatch({ type: "UPDATE_LOADING_STATUS", data: newValue });
  };

  const getDataFromFwewApi = async () => {
    let response;
    try {
      response = await axios.get(ApiUrlFwew + state.inputText);
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
    content = (
      <SafeAreaView style={styles.container}>
        <Text>{state.data.message + ": " + state.inputText}</Text>
      </SafeAreaView>
    );
  } else if (state.data.search_url != null) {
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
