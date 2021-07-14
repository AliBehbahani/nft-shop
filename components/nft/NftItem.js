//react imports
import React from "react";
import { Text, Image } from "react-native";
import { List } from "native-base";

const NftItem = ({ nft }) => {
  return (
    <List.Item>
      <Text>{nft.name}</Text>
      <Image source={{ uri: nft.image }} style={{ width: 100, height: 100 }} />
    </List.Item>
  );
};

export default NftItem;
