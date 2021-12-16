import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex:1}}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
