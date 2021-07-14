// library imports
import { makeAutoObservable } from "mobx";
//imports
import instance from "./instance";

class NftStore {
  nfts = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchNfts = async () => {
    try {
      const res = await instance.get("/nfts");
      this.nfts = res.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchNfts:", error);
    }
  };

  getNftById = (nftId) => this.nfts.find((nft) => nft.id === nftId);
}
const nftStore = new NftStore();
nftStore.fetchNfts();
export default nftStore;
