import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { Button, SearchBar } from "react-native-elements";

import atoms from "../../components/atoms";
import { searchImages } from "../../api/pexels";
import CardImage from "../../components/CardImage";

const index = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  const loadImages = async (searchTerm) => {
    const res = await searchImages(searchTerm);
    setImages(res);
  };
  useEffect(() => {
    loadImages();
  }, []);

  const handleSearch = async () => await loadImages(search);

  return (
    <View style={{ marginTop: -10 }}>
      <SearchBar
        value={search}
        placeholder="Search..."
        autoCapitalize="none"
        autoCompleteType="off"
        onChangeText={(text) => setSearch(text)}
        containerStyle={{
          backgroundColor: "#121212",
          borderBottomColor: "#121212",
          borderTopColor: "#121212",
        }}
      />
      <Button
        title="Search"
        onPress={() => handleSearch()}
        buttonStyle={{marginHorizontal:8, backgroundColor:"#2c2c2c"}}
      />
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <CardImage image={item} widthImage={2.1} heightImage={220} />
        )}
        numColumns="2"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default index;
