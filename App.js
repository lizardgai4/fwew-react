import React, { useReducer } from "react";
import { StatusBar, View } from "react-native";
import update from "immutability-helper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

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

function FwewScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7494BA" />
      <AppContext.Provider value={{ state, dispatch }}>
        <ActionBar search />
        <ResultView />
      </AppContext.Provider>
    </View>
  );
}

function ListScreen() {
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

function RandomScreen() {
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

function NumberScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7494BA" />
      <AppContext.Provider value={{ state, dispatch }}>
        <ActionBar search />
        <ResultView />
      </AppContext.Provider>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Fwew":
              iconName = "search";
              break;
            case "List":
              iconName = "list";
              break;
            case "Random":
              iconName = "help-circle";
              break;
            case "Number":
              iconName = "hash";
              break;
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        // `activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Fwew" component={FwewScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Random" component={RandomScreen} />
      <Tab.Screen name="Number" component={NumberScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
