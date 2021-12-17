import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import styles from "./styles";

const HeaderOptions = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderOptions;
