import Ionicons from "@expo/vector-icons/FontAwesome";
import {View,Text,StyleSheet,Platform,StatusBar,TouchableOpacity,} from "react-native";
import CardBasico from "../../Componets/CardBasico";


export default function HomePrincipal() {
  return (
    <View style={style.mainS}>
         <Text style={style.title}> Pagina Principal </Text>
         <CardBasico/>
     
    </View>
  );
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
});
