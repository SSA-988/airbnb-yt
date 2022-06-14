import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DateRangePicker from "rnv-date-range-picker";
import moment from "moment";

const ReserveScreen = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  const [selectedRange, setRange] = useState({});
  const day = new Date(selectedRange.firstDate);
  const night = new Date(selectedRange.secondDate);
  const diffTime = Math.abs(day - night);


  const days = Math.ceil(diffTime /(1000*60*60*24))
  console.log(days);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ width: "100%", height: 190 }}
          source={{ uri: route.params.img }}
        />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {route.params.title}
          </Text>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}
          >
            <FontAwesome name="star" size={24} color="#fd5c63" />
            <Text style={{ paddingHorizontal: 10 }}>{route.params.star}</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              {route.params.location}
            </Text>
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 7,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
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
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 7,
            }}
          />

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              // justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Hosted by {route.params.person}
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: "#8A2BE2",
                  fontWeight: "bold",
                }}
              >
                {route.params.description}
              </Text>
            </View>
            <Image
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
              }}
              source={{ uri: route.params.image }}
            />
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 7,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <AntDesign name="home" size={28} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Entire Home
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                You will have the treehouse to yourself
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <SimpleLineIcons name="emotsmile" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Enhanced Clean
              </Text>
              <Text style={{ fontSize: 16, color: "gray", width: 300 }}>
                the host is committed to Airbnb's 5 step cleaning process
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <EvilIcons name="location" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Great Location
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                100% of the guests gave a 5 star rating
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Feather name="calendar" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Free Cancellation Available</Text>
            </View>
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 12,
            }}
          />

          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Where You'll Sleep
            </Text>
            <View
              style={{
                marginTop: 8,
                borderColor: "gray",
                borderWidth: 1,
                width: 130,
                height: 80,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="bed-outline" size={24} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bedroom</Text>
              <Text>1 double bed</Text>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#D8D8D8",
                marginTop: 12,
              }}
            />

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                What this Place Offers
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="food-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Kitchen
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons name="wifi" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Wifi
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome name="car" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Free Parking On Premises
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialIcons name="pets" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Pets
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome5 name="gas-pump" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Free Parking on premises
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 12,
            }}
          />

          <DateRangePicker
            onSelectDateRange={(range) => {
              setRange(range);
            }}
            responseFormat="YYYY-MM-DD"
            minDate={moment()}
          />

          <View style={styles.container}>
            {!selectedRange.firstDate && !selectedRange.secondDate ? null : (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Text style={{ fontSize: 17 }}>
                    {selectedRange.firstDate} -{" "}
                  </Text>
                  <Text style={{ fontSize: 17 }}>
                    {selectedRange.secondDate}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>

      <Pressable
        style={{
          backgroundColor: "#AFD8F5",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:15,
        }}
      >
        <Text style={{fontSize:18,fontWeight:"bold"}}>{route.params.price}</Text>

        <Pressable  onPress={() => navigation.navigate("Confirm",{
          img:route.params.img,
          title:route.params.title,
          location:route.params.location,
          description:route.params.description,
          price:route.params.price,
          no_of_days:days,
          startDate:selectedRange.firstDate,
          endDate:selectedRange.secondDate,
          star:route.params.star,
          person:route.params.person,
        })} disabled={!selectedRange.firstDate && !selectedRange.secondDate} style={{backgroundColor:"#fd5c63",padding:10}}>
          <Text style={{color:"white"}}>Reserve</Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({});
