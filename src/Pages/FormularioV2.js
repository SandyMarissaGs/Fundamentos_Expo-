import { StyleSheet, View, Platform, StatusBar, SafeAreaView, TextInput, Text, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

const {width} = Dimensions.get('window');
export const FormularioV2 = () => {
  return (
    <SafeAreaView style={style.mainS}>
      <ScrollView>
      <Text style= {style.title}>Formulario V2</Text>
      <View style={style.container}>
        <Image source={{uri:'https://previews.123rf.com/images/yupiramos/yupiramos1710/yupiramos171003189/87385894-software-language-programmer-avatar-vector-illustration-design.jpg'}} style={style.avatar}/>
      </View>
      </ScrollView>
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
  container: {
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:15,
    padding:20,
    alignItems:'center',
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
        borderColor: '#000'
    },
});
