//react imports
import React from "react";
import { Text, Image } from "react-native";
import { List } from "native-base";
//styles
import { TextStyled } from "../../styles";

const NftItem = ({ nft, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("NftDetail", { nft: nft })}
      style={{ padding: 7 }}
    >
      <Image
        source={{ uri: nft.image }}
        style={{ width: 100, height: 100, marginRight: 30 }}
      />
      <TextStyled>{nft.name}</TextStyled>
    </List.Item>
  );
};

export default NftItem;
