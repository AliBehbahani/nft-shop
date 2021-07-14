//react imports
import React from "react";
import { View, Text, Image } from "react-native";
import { Spinner } from "native-base";
//library imports
import { observer } from "mobx-react";
//stores
import nftStore from "../../stores/nftStore";

const NftDetail = ({ route }) => {
  return console.log(route.params);
  const { nft } = route.params;
  if (nftStore.loading) return <Spinner />;

  return (
    <>
      <View>
        <Image
          source={{ uri: nft.image }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{nft.name}</Text>
        <Text>{nft.price}</Text>
        <Text>{nft.description}</Text>
      </View>
    </>
  );
};
export default observer(NftDetail);
