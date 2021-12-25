import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, } from "react-native";
import Navigator from "./navigation/Navigator";

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="black" />
      <Navigator/>
    </View>
  );
}
