//library imports
import { makeAutoObservable } from "mobx";

class CartStore {
  items = [
    {
      nftId: 18,
      quantity: 3,
    },
    {
      nftId: 19,
      quantity: 2,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}
const cartStore = new CartStore();
export default cartStore;
