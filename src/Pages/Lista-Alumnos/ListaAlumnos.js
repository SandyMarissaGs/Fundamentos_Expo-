import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

export const ListaAlumnos = () => {
  return (
    <View style={style.mainS}>
      <Text>Hola</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#a7f4eaff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
  },
});