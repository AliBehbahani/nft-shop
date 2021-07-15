//react imports
import React from "react";
import { Text, Image } from "react-native";
import { List } from "native-base";

const NftItem = ({ nft, navigation }) => {
  return (
    <List.Item onPress={() => navigation.navigate("NftDetail", { nft: nft })}>
      <Image source={{ uri: nft.image }} style={{ width: 100, height: 100 }} />
      <Text>{nft.name}</Text>
    </List.Item>
  );
};

export default NftItem;
