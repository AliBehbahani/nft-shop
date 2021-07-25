//library imports
import React from "react";
import { List } from "native-base";
import { Text } from "react-native";
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
    </List.Item>
  );
};

export default CartItem;
