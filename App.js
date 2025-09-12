import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:150, height:150, borderRadius:50}} source={{ uri: "https://previews.123rf.com/images/yupiramos/yupiramos1710/yupiramos171003189/87385894-software-language-programmer-avatar-vector-illustration-design.jpg", width: 150, height: 150 }} />
      <Text style={styles.holamundo}>Hola Mundo!!!</Text>
      <Text style={styles.h1}>Bienvenidos</Text>
      <Text style={styles.h2}>A la clase de parrafos</Text>
      <Text style={styles.h3}>De la materia de desarrollo de aplicaciones moviles</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4f0f0ff",
    alignItems: "center",
    justifyContent: "center",
  },
  holamundo: {
    fontSize: 50,
    fontWeight: "600", // grosor de la letra
    textShadowColor: "rgba(239, 11, 18, 0.5)", // color de la sombra/borde
    textShadowOffset: { width: 2, height: 2 }, // dirección de la sombra
    textShadowRadius: 3, // difuminado de la sombra
    marginBottom: 10, // separación inferior
  },
});
