import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            width: 220,
            padding: 6,
            borderRadius: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <AntDesign name="search1" size={18} color="#C71585" />
          <TextInput
            style={{ fontSize: 16, color: "red", paddingHorizontal: 10 }}
            placeholder="where you want to go?"
          />
        </View>

        <Pressable
        onPress={()=>navigation.navigate("Search")}
          style={{
            backgroundColor: "white",
            padding: 6,
            marginLeft: "auto",
            borderRadius:23,
            paddingHorizontal:10,
            paddingVertical: 10,
            marginRight: "auto",
            marginBottom: "auto",
            marginTop: "auto",
          }}
        >
          <Text style={{ color: "#C71585",fontWeight: "bold",fontSize:15, }}>i'm flexible</Text>
        </Pressable>
        <View style={{marginLeft:"auto",marginRight:"auto",marginBottom:20}}>
            <Text style={{color:"white",fontSize:26,fontWeight:"bold"}}>Not Sure where to Go?</Text>
            <Text style={{color:"white",fontSize:26,fontWeight:"bold",textAlign:"center"}}>Perfect</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
