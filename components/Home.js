//react imports
import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";

//styles
import { Title, BGImage, HomeView, TextStyled } from "../styles";
const Home = ({ navigation }) => {
  const next = () => {
    navigation.navigate("GalleryList");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "rgba(52, 52, 52, alpha)" }}>
      <TouchableWithoutFeedback onPress={next}>
        <BGImage source={{ uri: "https://wallpaperaccess.com/full/42337.jpg" }}>
          <HomeView>
            <Title onPress={() => navigation.navigate("GalleryList")}>
              The Nifty Shop
            </Title>
            <TextStyled>click anywhere to skip!</TextStyled>
          </HomeView>
        </BGImage>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Home;
