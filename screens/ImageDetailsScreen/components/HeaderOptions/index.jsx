import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';

import styles from "./styles";
import atoms from "../../../../components/atoms";

const HeaderOptions = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
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
          <View style={styles.modal}>
            <Feather name="download" size={24} color="white" style={{right:10}} />
            <Text style={atoms.largeText}>Descargar</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.cancelModalButtom}>
            <Text style={[atoms.mediumText, { letterSpacing: 1 }]}>Cancelar</Text>
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
