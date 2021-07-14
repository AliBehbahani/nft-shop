//react imports
import React from "react";
import { Image, Text } from "react-native";
import { List } from "native-base";

const GalleryItem = ({ gallery, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("GalleryDetail", { gallery: gallery })}
    >
      <Image
        source={{ uri: gallery.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{gallery.name}</Text>
    </List.Item>
  );
};

export default GalleryItem;
