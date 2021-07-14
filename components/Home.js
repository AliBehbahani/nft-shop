//react imports
import React from "react";
//styles
import { Title, BGImage, HomeView, Skip } from "../styles";
const Home = ({ navigation }) => {
  return (
    <BGImage source={{ uri: "https://wallpaperaccess.com/full/42337.jpg" }}>
      <HomeView>
        <Title>The Nifty Shop</Title>
        <Skip onPress={() => navigation.navigate("GalleryList")}>Skip</Skip>
      </HomeView>
    </BGImage>
  );
};

export default Home;
