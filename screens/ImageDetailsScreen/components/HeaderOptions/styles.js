import { Dimensions, StyleSheet, Text, View } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: { 
    padding: 15, 
    flexDirection: "row",
    justifyContent:"space-between"
  },
  modalContainer:{
    width:WIDTH,
    height:HEIGHT,
    marginTop:HEIGHT/14,
    opacity:0.9,
    backgroundColor:'#121212',
    alignItems: "center",
  },
  modal:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop:HEIGHT/4,
    borderRadius: 10,
    padding:30,
  },
  cancelModalButtom:{
    borderWidth:2,
    borderColor:"white",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius:50,
    alignItems:"center",
    marginTop:10,
  },
  
});
export default styles;
