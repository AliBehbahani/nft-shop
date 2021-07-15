//react imports
import React from "react";
//navigation
import { createNativeStackNavigator } from "react-native-screens/native-stack";

//components
import Home from "..//Home";
import GalleryList from "../gallery/GalleryList";
import GalleryDetail from "../gallery/GalleryDetail";
import NftDetail from "../nft/NftDetail";

const Stack = createNativeStackNavigator();
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
        }}
      />
      <Stack.Screen
        name="GalleryDetail"
        component={GalleryDetail}
        options={({ route }) => {
          const gallery = route.params.gallery;
          return { title: gallery.name };
        }}
      />
      <Stack.Screen
        name="NftDetail"
        component={NftDetail}
        options={({ route }) => {
          const nft = route.params.nft;
          return { title: nft.name };
        }}
      />
    </Stack.Navigator>
  );
};
