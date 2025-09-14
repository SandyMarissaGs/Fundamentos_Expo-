import { Image, StyleSheet, Text, View } from "react-native";

export default function CardBasicoImg() {
  return (
    <View style={style.card}>
        <Image style={style.img} source={{uri:'https://cdn.pixabay.com/photo/2019/10/14/04/27/sunset-4547824_1280.jpg'}} />
        <Text style={style.titulo}>Card con img</Text>
        <Text style={style.contenido}>Contenido del card</Text>
        </View>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 4,
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  titulo: {
    marginTop:5,
    fontSize:14,
    fontWeight: "bold",
  },
  contenido: {
    marginTop:4
},
img:{
    width:'100%',
    height:150,
    borderRadius:10
}
});