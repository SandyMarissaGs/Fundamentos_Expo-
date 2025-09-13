import Ionicons from "@expo/vector-icons/FontAwesome";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function Botones() {
  return (
    <View style={style.mainS}>
      <Text style={style.h1}> Botones </Text>
      {/* Boton 1 */}
      <TouchableOpacity style={style.botonBasico}>
        <Text style={style.Texto}>Boton 1</Text>
      </TouchableOpacity>
      {/* Boton 2 */}
      <TouchableOpacity style={style.botonIcono}>
        <Ionicons name="user" size={20} style={style.iconB} />
        <Text style={style.Text}> Boton Icono </Text>
      </TouchableOpacity>
      {/* Boton con icono a la derecha */}
        <TouchableOpacity style={style.botonIcono}>
            <Text style={style.text}> Siguiente </Text>
            <Ionicons name = "ban" size={20} color="#151414ff"style={style.iconRight}/>
        </TouchableOpacity>



    </View>
  );
}

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#b8f3ebff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeigth : 44,
    padding: 50,
  },
  h1: { fontSize: 25, fontWeight: "bold" },
  botonBasico: {
    backgroundColor: "#f5c5c5ff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  Text: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },
  botonIcono: {
    backgroundColor: "#fff",
    fontSize: 30,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconB: {
    color: "#a82c2cff",
  },
});
