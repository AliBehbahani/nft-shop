//library imports
import React from "react";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
//stores
import cartStore from "../../../stores/CartStore";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <Feather
        name="shopping-cart"
        size={24}
        color="white"
        onPress={() => navigation.navigate("CartList")}
      />
      <Text> {cartStore.totalQuantity}</Text>
    </>
  );
};

export default observer(CartButton);
