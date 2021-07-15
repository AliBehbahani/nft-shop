//react imports
import React from "react";
import { Spinner } from "native-base";
import { View, Text, Image } from "react-native";
//library imports
import { observer } from "mobx-react";
//components
import NftList from "../nft/NftList";
//stores
import galleryStore from "../../stores/galleryStore";
import nftStore from "../../stores/nftStore";
//styles
import { BGImage, TextStyled, ViewGalleryDetail } from "../../styles";

const GalleryDetail = ({ navigation, route }) => {
  const { gallery } = route.params;
  if (galleryStore.loading) return <Spinner />;

  const nfts = gallery.nfts.map((nft) => nftStore.getNftById(nft.id));

  return (
    <BGImage source={require("../../assets/bg.jpg")}>
      <ViewGalleryDetail>
        <Image
          source={{ uri: gallery.image }}
          style={{ width: 200, height: 200, marginBottom: 15 }}
          alt={gallery.name}
        />
        <TextStyled style={{ marginBottom: 10 }}>{gallery.name}</TextStyled>
      </ViewGalleryDetail>
      <NftList nfts={nfts} navigation={navigation} />
    </BGImage>
  );
};

export default observer(GalleryDetail);
