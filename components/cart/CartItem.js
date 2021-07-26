//library imports
import React from "react";
import { List } from "native-base";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
//stores
import cartStore from "../../stores/CartStore";
//styles
import { Total } from "../../styles";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price}$ x {item.quantity}
      </Text>
      <Total>{item.price * item.quantity}$</Total>
      <Feather
        name="x"
        size={24}
        color="red"
        onPress={() => cartStore.deleteCart(item.id)}
      />
    </List.Item>
  );
};

export default CartItem;
