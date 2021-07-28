//library imports
import React, { useState } from "react";
import { View, Button } from "native-base";
import { TextInput, Text } from "react-native";
import { observer } from "mobx-react";
//stores
import authStore from "../../stores/authStore";
//styles
import { AuthTextInput } from "../../styles";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleConfirm = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("GalleryList");
  };
  return (
    <View>
      <Text>Signup</Text>
      <AuthTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(event) => setUser({ ...user, username: event })}
      />
      <AuthTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button onPress={handleConfirm}>Confirm</Button>
      <Text onPress={() => navigation.navigate("Signin")}>signin?</Text>
    </View>
  );
};

export default observer(Signup);
