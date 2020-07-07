import React, { useReducer } from "react";
import { StatusBar, View, Text } from "react-native";
import update from "immutability-helper";

// Import Context
import { AppContext } from "./AppContext";

// import UI components
import ActionBar from "./ui/action-bar";
import ResultView from "./ui/result-view";
import styles from "./ui/styles";

// Set up Initial State
const initialState = {
  inputText: "",
  data: [],
  isLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return update(state, { inputText: { $set: action.data } });
    case "UPDATE_DATA":
      return update(state, { data: { $set: action.data } });
    case "UPDATE_LOADING_STATUS":
      return update(state, { isLoading: { $set: action.data } });
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7494BA" />
      <AppContext.Provider value={{ state, dispatch }}>
        <ActionBar />
        <ResultView />
      </AppContext.Provider>
    </View>
  );
}
