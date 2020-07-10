import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Screen from "./screen";

const ApiRoot = "https://tirea.learnnavi.org/api";

function FwewScreen() {
  const endpoint = ApiRoot + "/fwew/";
  return <Screen ApiUrl={endpoint} />;
}

function ListScreen() {
  const endpoint = ApiRoot + "/list/";
  return <Screen ApiUrl={endpoint} />;
}

function RandomScreen() {
  const endpoint = ApiRoot + "/random/";
  return <Screen ApiUrl={endpoint}></Screen>;
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
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
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Fwew" component={FwewScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Random" component={RandomScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
