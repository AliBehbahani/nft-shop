//react imports
import React from "react";
import { List, Spinner } from "native-base";
//library imports
import { observer } from "mobx-react";
//components
import NftItem from "./NftItem";
//stores
import nftStore from "../../stores/nftStore";

const NftList = ({ nfts, navigation }) => {
  if (nftStore.loading) return <Spinner />;
  const nftList = nfts.map((nft) => (
    <NftItem nft={nft} key={nft.id} navigation={navigation} />
  ));
  return <List>{nftList}</List>;
};

export default observer(NftList);
