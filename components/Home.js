//react imports
import React from "react";
//styles
import { Title, BGImage, HomeView, Skip } from "../styles";
const Home = () => {
  return (
    <BGImage source={{ uri: "https://wallpaperaccess.com/full/42337.jpg" }}>
      <HomeView>
        <Title>The Nifty Shop</Title>
        <Skip onPress={() => alert("skip to galleries")}>Skip</Skip>
      </HomeView>
    </BGImage>
  );
};

export default Home;
