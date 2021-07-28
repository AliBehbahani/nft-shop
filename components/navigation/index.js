//react imports
import React from "react";
//navigation
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "..//Home";
import GalleryList from "../gallery/GalleryList";
import GalleryDetail from "../gallery/GalleryDetail";
import NftDetail from "../nft/NftDetail";
import CartList from "../cart/CartList";
import CartButton from "../cart/buttons/CartButton";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GalleryList"
        component={GalleryList}
        options={{
          title: "Choose Gallery",
          headerStyle: {
            backgroundColor: "#151e54",
          },
          headerTintColor: "white",
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="GalleryDetail"
        component={GalleryDetail}
        options={({ route }) => {
          const gallery = route.params.gallery;
          return {
            title: gallery.name,
            headerStyle: { backgroundColor: "#151e54" },
            headerTintColor: "white",
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen
        name="NftDetail"
        component={NftDetail}
        options={({ route }) => {
          const nft = route.params.nft;
          return {
            title: nft.name,
            headerStyle: { backgroundColor: "#151e54" },
            headerTintColor: "white",
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
