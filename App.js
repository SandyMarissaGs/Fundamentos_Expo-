import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.holamundo}>Hola Mundo!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f3ff",
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
