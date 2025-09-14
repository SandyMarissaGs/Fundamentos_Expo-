import { Platform, Image, SafeAreaView, StatusBar, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
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
      {/*Inicio de contenido (lista de alumnos) */}
      <ScrollView style={{padding: 16}}>
        <Text style={style.sectionTitle}>Alumnos De Aplicaciones Moviles</Text>

        {[1,2,3,4,5,6,7].map((item, index) => (
           <View style={style.card}>
          <Image source={{uri: "https://previews.123rf.com/images/yupiramos/yupiramos1710/yupiramos171003189/87385894-software-language-programmer-avatar-vector-illustration-design.jpg"}}style={style.avatar}/>
          <View style={style.cardInfo}>
            <Text style={style.userName}>Sandy Marissa</Text>
            <Text style={style.userDetails}>Ing. Sistemas Computacionales</Text>
            <TouchableOpacity style={style.saveButton}>
              <Text style={style.saveButtonText}> Ver mas</Text>
            </TouchableOpacity>
            </View>
        </View>
        ))}
      </ScrollView>
      {/*Cierre de contenido (lista de alumnos) */}
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
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 16,
  },
  card: {
    padding: 16,
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "#ffffff",
    elevation: 2,
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
    justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  userDetails: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#f6d2f8ff",
    marginTop: 10,
    padding: 10,
    alignSelf: "flex-end",
    paddingVertical: 6,
    borderRadius: 15,
  },
  saveButtonText: {
    color: "#0f0f0fff",
    fontWeight: "bold",
  },
});