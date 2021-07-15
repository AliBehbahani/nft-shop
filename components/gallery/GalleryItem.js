//react imports
import React from "react";
import { Image, Text } from "react-native";
import { List } from "native-base";
//styles
import { TextStyled } from "../../styles";

const GalleryItem = ({ gallery, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("GalleryDetail", { gallery: gallery })}
    >
      <Image
        source={{ uri: gallery.image }}
        style={{ width: 125, height: 125, padding: 40 }}
      />
      <TextStyled>{gallery.name}</TextStyled>
    </List.Item>
  );
};

export default GalleryItem;
