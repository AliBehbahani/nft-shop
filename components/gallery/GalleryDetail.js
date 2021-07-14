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

const GalleryDetail = ({ route }) => {
  const { gallery } = route.params;
  if (galleryStore.loading) return <Spinner />;

  const nfts = gallery.nfts.map((nft) => nftStore.getNftById(nft.id));

  return (
    <View>
      <View>
        <Text>{gallery.name}</Text>
        <Image src={{ uri: gallery.image }} alt={gallery.name} />
      </View>
      <NftList nfts={nfts} />
    </View>
  );
};

export default observer(GalleryDetail);
