import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import FwewScreen from "./fwew-screen";
import ListScreen from "./list-screen";
import RandomScreen from "./random-screen";

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
        // `activeTintColor: "tomato",
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
