//react imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
//components
import Home from "./components/Home";
import NftList from "./components/nft/NftList";
import GalleryList from "./components/gallery/GalleryList";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Home /> */}
      <NftList />
      {/* <GalleryList /> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
