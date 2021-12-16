import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const ImageDetailscreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { params: { imageId },} = route;
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="white" />
      </TouchableOpacity>
      <Text>details {imageId}</Text>
    </SafeAreaView>
  );
};

export default ImageDetailscreen;
