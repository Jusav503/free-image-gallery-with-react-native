import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const WIDTH = Dimensions.get("window").width;

const CardImage = ({widthImage, heightImage, image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Details', {imageId: image.id})}>
      <View style={[styles.imageContainer, {width: WIDTH / widthImage}]}>
        <Image style={{width: "100%", height: heightImage}} source={{ uri: image.src.medium }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 5,
    overflow: "hidden",
    margin: 3,
  },
});

export default CardImage;
