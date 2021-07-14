import React from "react";
import { Button, Text, View } from "react-native";
const Home = () => {
  return (
    <View>
      <Text>The Nifty Shop</Text>
      <Text onPress={() => alert("skip to galleries")}>Skip</Text>
    </View>
  );
};

export default Home;
