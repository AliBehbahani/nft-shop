//react imports
import React from "react";
import { View, Text, Image } from "react-native";
import { Spinner } from "native-base";
//library imports
import { observer } from "mobx-react";
//stores
import nftStore from "../../stores/nftStore";
//styles
import { BGImage, TextStyled, ViewNftDetail } from "../../styles";

const NftDetail = ({ route }) => {
  const { nft } = route.params;
  if (nftStore.loading) return <Spinner />;

  return (
    <BGImage source={require("../../assets/bg.jpg")}>
      <ViewNftDetail>
        <Image
          source={{ uri: nft.image }}
          style={{ width: 210, height: 210 }}
        />
        <TextStyled>{nft.name}</TextStyled>
        <TextStyled>{nft.price}</TextStyled>
        <TextStyled>{nft.description}</TextStyled>
      </ViewNftDetail>
    </BGImage>
  );
};
export default observer(NftDetail);
