import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ImageScreen = ({ photo }) => {
  return ( 
    <ScrollView>
      <Text style={{color:"green"}}>{photo.photographer}</Text>
    </ScrollView>
  );
};

export default ImageScreen;
