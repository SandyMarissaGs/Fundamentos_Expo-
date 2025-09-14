import { StyleSheet, View, Platform, StatusBar, SafeAreaView, TextInput, Text, TouchableOpacity} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

export const Formulario = () => {
  return (
    <SafeAreaView style={style.mainS}>
      <Text style={style.title}> Registro de Alumno</Text>
      <Text style={style.label}>Nombre:</Text>
      <TextInput style={style.input} placeholder="Escribe tu nombre"/>
      <Text style={style.label}>Carrera:</Text>
      <TextInput editable={false} style={style.input} placeholder="Escribe tu carrera"/>
      <Text style={style.label}>Descripcion:</Text>
      <TextInput multiline={true} numberOfLines={4} style={[style.input,style.textArea]} placeholder="Describe tu personalidad"/>
      <Text style={style.label}>Correo Electronico:</Text>
      <TextInput style={style.input} placeholder="Ingrese el correo" keyboardType="email-address"/>
      <Text style={style.label}>Contraseña:</Text>
      <TextInput style={style.input} placeholder="**********" secureTextEntry/>
      <Text style={style.label}>Telefono:</Text>
      <TextInput style={style.input} placeholder="123456" keyboardType="numeric"/>
      <TouchableOpacity style={style.botonConIcono}>
        <MaterialIcons name="send" size={20} color="#0c0c0cff" style={style.iconoIzquierda}/>
        <Text style={style.textoBoton}>Botón Grande</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

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
  },
  label: {
    weight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  botonConIcono: {
    backgroundColor: "#eaee9fff",
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
   textoBoton: {
    color: "#0f0f0fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
