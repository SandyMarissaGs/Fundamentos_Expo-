import { Platform,  SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

export const ListaAlumnos = () => {
  return (
    <SafeAreaView style={style.mainS}>
      {/*Inicio de AppBar */}
      <View style={style.appBar}>
        <MaterialIcons name="arrow-back" size={20} color="#000" />
        <Text style={style.appBarTitle}> Lista de Usuarios</Text>
        <View style={{width: 20}}></View>
        </View>
      {/*Fin de AppBar */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#f3f9f8ff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    //padding: 16,
  },
  appBar: {
    height:50,
    width: "100%",
    backgroundColor: "#ab7aeaff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  appBarTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});