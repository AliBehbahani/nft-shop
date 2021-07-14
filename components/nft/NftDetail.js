//react imports
import React from "react";
import { View, Text, Image } from "react-native";
import { Spinner } from "native-base";
//library imports
import { observer } from "mobx-react";
//stores
import nftStore from "../../stores/nftStore";

const NftDetail = ({ route }) => {
  const { nft } = route.params;
  if (nftStore.loading) return <Spinner />;

  return (
    <div>
      <View>
        <Image source={{ uri: nft.image }} />
        <Text>{nft.name}</Text>
        <Text>{nft.price}</Text>
        <Text>{nft.description}</Text>
      </View>
    </div>
  );
};
export default observer(NftDetail);
