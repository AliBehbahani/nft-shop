//react imports
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation/index";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
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
