import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";

const Experience = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        discover Airbnb experiences
      </Text>

      <ImageBackground
        style={{
          width: 350,
          resizeMode: "contain",
          height: 450,
          marginLeft:10,
          marginTop: 20,
          borderRadius: 10,
        }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcIhhZoVAOPiN5Mggdz1NdjW-5nvZvTzFog&usqp=CAU",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "bold",
              width: 260,
            }}
          >
            Things to do on your Trip
          </Text>

          <Pressable
            style={{
              backgroundColor: "white",
              padding: 10,
              marginTop: 10,
              width: 150,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Experiences
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({});
