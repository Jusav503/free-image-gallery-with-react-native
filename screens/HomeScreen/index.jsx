import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getImages } from "../../api/pexels";
import CardImage from "../../components/CardImage";

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => <CardImage photo={item} widthImage={2.1} heightImage={120} />}
        numColumns="2"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{alignItems:"center"}
})

export default HomeScreen;
