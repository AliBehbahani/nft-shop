//react imports
import React from "react";
//styles
import { Title, BGImage, HomeView, TextStyled } from "../styles";
const Home = ({ navigation }) => {
  return (
    <BGImage source={{ uri: "https://wallpaperaccess.com/full/42337.jpg" }}>
      <HomeView>
        <Title>The Nifty Shop</Title>
        <TextStyled onPress={() => navigation.navigate("GalleryList")}>
          Skip
        </TextStyled>
      </HomeView>
    </BGImage>
  );
};

export default Home;
