import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getImage } from "../../api/pexels";
import styles from "./styles";
import HeaderOptions from "./components/HeaderOptions";

const ImageDetailscreen = () => {
  const route = useRoute();
  const {
    params: { imageId },
  } = route;
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchImageData = async () => {
    setLoading(true);
    const fetchedImageData = await getImage(imageId);
    setImage(fetchedImageData);
    setLoading(false);
  };
  useEffect(() => {
    fetchImageData();
  }, []);

  if (loading || !image) {
    return (
      <ActivityIndicator size="large" color="white" style={styles.loading} />
    );
  }
  const {
    photographer,
    photographer_url,
    src: { portrait },
    alt,
  } = image;

  return (
      <View style={{flex:1}}>
        <HeaderOptions />
        <View style={{flex:1}}>
          <ScrollView>
            <View style>
              <Image source={{ uri: portrait }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.creator}>By: {photographer}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
  );
};

export default ImageDetailscreen;
