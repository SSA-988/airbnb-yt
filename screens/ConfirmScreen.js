import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
const ConfirmScreen = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(1);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Explore Airbnb",
      headerStyle: {
        backgroundColor: "#fd5c63",
      },
      headerTintColor: "#fff",
    });
  });
  const route = useRoute();
  const price = route.params.price;
  const serviceFee = 20;
  const taxes = 45;
  const res = price.replace(/\D/g, "");
  const price_with_days = res * route.params.no_of_days;
  const totalPrice = (price_with_days + serviceFee + taxes) * add;

  console.log(totalPrice);
  console.log(route.params);
  return (
    <View>
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{ uri: route.params.img }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "gray" }}>{route.params.location}</Text>
          <Text
            style={{ marginVertical: 10, fontSize: 15, fontWeight: "bold" }}
          >
            {route.params.title.substr(0, 30)}...
          </Text>
          <Text style={{ width: 300 }}>{route.params.description}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold" }}>this is a rare find.</Text>
          <Text style={{ fontSize: 15 }}>
            {route.params.person}'s name on Airbnb is usually fully booked
          </Text>
        </View>
        <FontAwesome name="diamond" size={24} color="orange" />
      </View>

      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: "#D8D8D8",
          marginTop: 7,
        }}
      />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>Your Trip</Text>
        <View style={{ marginTop: 14 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Dates</Text>
          <Text>
            {route.params.startDate}-{route.params.endDate}
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Guests</Text>

          <Text>{add} Guests</Text>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              right: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fd5c63",
              borderRadius: 5,
            }}
          >
            <Pressable onPress={() => setAdd(Math.max(1, add - 1))}>
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {add}
              </Text>
            </Pressable>

            <Pressable onPress={() => setAdd(add + 1)}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </View>

      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: "#D8D8D8",
          marginTop: 7,
        }}
      />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17 }}>Price Details</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {route.params.price} x {route.params.no_of_days} Days
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>
            £{res * route.params.no_of_days}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>service Fee</Text>
          <Text style={{ color: "gray", fontSize: 16 }}>£20</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Occupancy taxes and fee
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>£45</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Total Price(Pounds)
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>£{totalPrice}</Text>
        </View>
      </View>

      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: "#D8D8D8",
          marginTop: 7,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Cancellation Policy</Text>

        <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
          Free Cancellation for 48 hours, refund minus the service fee
        </Text>

        <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
          Our policy does not cover policy disruptions caused by COVID-19
        </Text>
      </View>

      <Text
        style={{
          height: 1,
          borderWidth: 2,
          borderColor: "#D8D8D8",
          marginTop: 7,
        }}
      />
      <Pressable
      onPress={() => navigation.navigate("Final")}
        style={{
          marginTop: 10,
          backgroundColor: "#fd5c63",
          width: 200,
          marginLeft: "auto",
          marginRight: "auto",
          padding:10,
        }}
      >
        <Text style={{textAlign:"center",color:"white"}}>Confirm and Pay</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({});
