import { Dimensions, StyleSheet, Text, View } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container:{
    flexDirection:"row"
  },
  image: { 
    width: "100%", 
    height: HEIGHT / 1.2 
  },
  infoContainer: {
    paddingHorizontal: 10,
  },
  creator: {
    color: "white",
    backgroundColor: "#2c2c2c",
    padding: 10,
    margin:10,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
});

export default styles;
