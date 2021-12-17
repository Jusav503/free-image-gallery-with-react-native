import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ImageDetailscreen from "./screens/ImageDetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="black" />
      <NavigationContainer theme={{ colors: { background: "#121212" } }}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={ImageDetailscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
