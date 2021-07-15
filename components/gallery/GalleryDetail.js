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

const GalleryDetail = ({ navigation, route }) => {
  const { gallery } = route.params;
  if (galleryStore.loading) return <Spinner />;

  const nfts = gallery.nfts.map((nft) => nftStore.getNftById(nft.id));

  return (
    <View>
      <View>
        <Image
          source={{ uri: gallery.image }}
          style={{ width: 100, height: 100 }}
          alt={gallery.name}
        />
        <Text>{gallery.name}</Text>
      </View>
      <NftList nfts={nfts} navigation={navigation} />
    </View>
  );
};

export default observer(GalleryDetail);
