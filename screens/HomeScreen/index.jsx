import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";

import { getImages } from "../../api/pexels";
import ImageScreen from "../ImageScreen/index";

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res)
  };
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={({ item }) => <ImageScreen photo={item} />}
      />
    </View>
  );
};

export default HomeScreen;
