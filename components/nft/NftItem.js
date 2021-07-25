//react imports
import React, { useState } from "react";
import { Text, Image } from "react-native";
import { List, Button } from "native-base";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";
//stores
import cartStore from "../../stores/CartStore";
//styles
import { TextStyled } from "../../styles";

const NftItem = ({ nft, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    const newItem = { nftId: nft.id, quantity };
    cartStore.addToCart(newItem);
  };
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
      <NumericInput
        totalHeight={35}
        totalWidth={70}
        initValue={quantity}
        minValu={1}
        onChange={setQuantity}
      />
      <Button onPress={handleAdd}>Add</Button>
    </List.Item>
  );
};

export default observer(NftItem);
