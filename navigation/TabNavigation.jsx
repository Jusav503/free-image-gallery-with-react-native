import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import SearchImageScreen from "../screens/SearchImageScreen";

const Drawer = createDrawerNavigator();

export default function TabNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { backgroundColor: "#121212" },
        drawerLabelStyle: { color: "white" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: "" }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchImageScreen}
        options={{ headerTitle: "" }}
      />
    </Drawer.Navigator>
  );
}
