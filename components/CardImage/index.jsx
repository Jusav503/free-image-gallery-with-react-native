import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;

const CardImage = ({widthImage, heightImage, photo}) => {
  return (
    <View style={[styles.imageContainer, {width: WIDTH / widthImage}]}>
      <Image style={{width: "100%", height: heightImage}} source={{ uri: photo.src.medium }} />
    </View>
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
