import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
export const FormularioV2 = () => {
  return (
    <SafeAreaView style={style.mainS}>
      <ScrollView>
        <Text style={style.title}>Formulario V2</Text>

        <View style={style.container}>
          <TouchableOpacity style={style.cerrarBoton}>
            <MaterialIcons name="close" size={20} color="#fafafaff" />
          </TouchableOpacity>

          <Image source={{uri: "https://previews.123rf.com/images/yupiramos/yupiramos1710/yupiramos171003189/87385894-software-language-programmer-avatar-vector-illustration-design.jpg"}}style={style.avatar}/>
          <Text style={style.name}>Sandy Garcia</Text>
          <View style={style.infoContainer}>
            <Text style={style.label}> Carrera</Text>
            <Text style={style.info}>Ing. Sistemas Computacionales</Text>
            <Text style={style.label}> Especialidad </Text>
            <Text style={style.info}>Desarrollo de Software</Text>
            <Text style={style.label}> Correo </Text>
            <Text style={style.info}>sandymarissa2004@gmail.com</Text>
            <Text style={style.label}> Telefono </Text>
            <Text style={style.info}>9531337079</Text>
            <Text style={style.label}> Num. De Control </Text>
            <Text style={style.info}>22620061</Text>
          </View>
          <TouchableOpacity style={style.botonConIcono}>
            <MaterialIcons
              name="save"
              size={20}
              color="#0c0c0cff"
              style={style.iconoIzquierda}
            />
            <Text style={style.textoBoton}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#a7f4eaff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 15,
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
  name: {
    color: "#0e0e0eff",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#f8a8b6ff",
    padding: 5,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 10,
  },
  info: {
    fontSize: 13,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#e8d5d5ff",
    padding: 10,
  },
  botonConIcono: {
    backgroundColor: "#f6d2f8ff",
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 15,
    width: "80%",
  },
  iconoIzquierda: {
    marginRight: 10,
  },
  textoBoton: {
    color: "#0f0f0fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  cerrarBoton: {
    position: "absolute",
    top: 15,
    right: 15,
    //zIndex: 10,
    borderRadius: 30,
    backgroundColor: "#f54242",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
