import  Ionicons  from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";

export default function Botones () {
 return (
    <View style={style.mainS}>
        <Text style={style.h1}> Botones </Text>

        <TouchableOpacity style={style.botonBasico}>
          <Text> Boton 1</Text>
        </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#b8f3ebff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigth:44,
        padding: 50
    },
    h1: { fontSize: 25,
    fontWeight: "bold",
  },
    botonBasico:{
      backgroundColor: '#f5c5c5ff',
      padding: 12,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,
    }

 
});