import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

import styles from "./styles";
import atoms from "../../../../components/atoms";

const HeaderOptions = (props) => {
  const { imageId, src } = props;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const saveImageUrl = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
  };

  const saveFile = async () => {
    try {
      let fileUri = FileSystem.documentDirectory + imageId + ".jpeg";
      const { uri } = await FileSystem.downloadAsync(src, fileUri);
      saveImageUrl(uri);
    } catch (e) {
      console.log(e);
    }
  };

  const onPressDownload = () => {
    saveFile();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => onPressDownload()} style={styles.modal}>
            <Feather
              name="download"
              size={24}
              color="white"
              style={{ right: 10 }}
            />
            <Text style={atoms.largeText}>Descargar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.cancelModalButtom}
          >
            <Text style={[atoms.mediumText, { letterSpacing: 1 }]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Entypo name="dots-three-vertical" size={22} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderOptions;
