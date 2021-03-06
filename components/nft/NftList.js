//react imports
import React from "react";
import { List, Spinner } from "native-base";
//library imports
import { observer } from "mobx-react";
//components
import NftItem from "./NftItem";
//stores
import nftStore from "../../stores/nftStore";

const NftList = ({ navigation }) => {
  if (nftStore.loading) return <Spinner />;
  const nftList = nftStore.nfts.map((nft) => (
    <NftItem nft={nft} key={nft.id} navigation={navigation} />
  ));
  return <List style={{ borderColor: "black" }}>{nftList}</List>;
};

export default observer(NftList);
