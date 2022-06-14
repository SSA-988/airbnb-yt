import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const SearchItem = (props) => {
  const data = props.data;
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Reserve",{
        id:data.key,
        img:data.img,
        description:data.description,
        lat:data.lat,
        location:data.location,
        person:data.person,
        price:data.price,
        reveiew:data.reveiew,
        star:data.star,
        title:data.title,
        total:data.total,
        distance:data.distance,
        image:data.image,
      })} style={{ marginTop: 10, margin: 10 }}>
        <Image
          style={{ width: "100%", height: 300, borderRadius: 10 }}
          source={{ uri: data.img }}
        />
        <Pressable style={{position: "absolute",top:20,right:20}}>
          <AntDesign name="hearto" size={24} color="white" />
        </Pressable>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 17 }}>{data.location}</Text>
            <Text style={{ fontSize: "16", fontWeight: "bold" }}>
              {data.price}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "gray", fontSize: "16" }}>
              {data.distance} Km away
            </Text>
            <Text>dec 12 - 16</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
