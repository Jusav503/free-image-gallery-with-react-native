import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ImageDetailsScreen from "../screens/ImageDetailsScreen";
import TabNavigation from './TabNavigation';

const Navigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer theme={{ colors: { background: "#121212" } }}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={TabNavigation} />
          <Stack.Screen name="Details" component={ImageDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigator
