import { 
  StyleSheet, 
  View, 
  Platform, 
  StatusBar, 
  SafeAreaView, 
  TextInput, 
  Text 
} from "react-native";

export const Formulario = () => {
  return (
    <SafeAreaView style={style.mainS}>
      <Text style={style.label}>Nombre:</Text>
      <TextInput style={style.input} placeholder="Escribe tu nombre"/>
      <Text style={style.label}>Descripcion:</Text>
      <TextInput multiline={true} numberOfLines={4} style={[style.input,style.textArea]} placeholder="Describe tu personalidad"/>
      <Text style={style.label}>Correo Electronico:</Text>
      <TextInput style={style.input} placeholder="Ingrese el correo" keyboardType="email-address"/>
      <Text style={style.label}>Contraseña:</Text>
      <TextInput style={style.input} placeholder="**********" secureTextEntry/>
      <Text style={style.label}>Telefono:</Text>
      <TextInput style={style.input} placeholder="123456" keyboardType="numeric"/>
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
});
