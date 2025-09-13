import Icon from "@expo/vector-icons/FontAwesome";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function BotonesV2() {
  return (
    <View style={style.mainS}>
      <Text style={style.title}> Botones Personalizados </Text>
      {/*Boton Granded */}
      <TouchableOpacity style={style.botonGrande}>
        <Text style={style.textoBoton}> Boton Grande</Text>
      </TouchableOpacity>
      {/*Boton grande con icono*/}
      <TouchableOpacity style={style.botonConIcono}>
        <Icon
          name="send"
          size={20}
          color={"#0c0c0cff"}
          style={style.iconoIzquierdo}
        />
        <Text style={style.textoBoton}> Boton Grande</Text>
      </TouchableOpacity>
      {/* Boton sombreado */}
      <TouchableOpacity style={[style.botonSombreado, style.sombra]}>
        <Text style={style.textoBoton}>Sombra</Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  textoBoton: {
    color: "#1e0783ff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  botonGrande: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    alignSelf: "center",
  },
  botonConIcono: {
    backgroundColor: "#ced634ff",
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 15,
  },
  iconoIzquierda: {
    marginRight: 10,
  },
  botonSombreado:{
    marginTop:10,
    backgroundColor:'#ff9800',
    paddingVertical:14,
    borderRadius:10,
    marginBottom:15,
  },
    ...Platform.select ({
        android: {
            elevation:6,
        },
        ios:{
            shadowColor:'#000',
            shadowoffset: { width:0, heigth: 2},
            shadowOpacity:0.3,
            shadowRadius:4,
        },
        }),
});
