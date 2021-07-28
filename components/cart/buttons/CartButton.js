//library imports
import React from "react";
import { Text, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
//stores
import cartStore from "../../../stores/CartStore";
import authStore from "../../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Sign in",
        "signin plz",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <>
      <Feather
        name="shopping-cart"
        size={24}
        color="white"
        onPress={handlePress}
      />
      <Text> {cartStore.totalQuantity}</Text>
    </>
  );
};

export default observer(CartButton);
