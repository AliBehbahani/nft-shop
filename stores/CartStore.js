//library imports
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
//components
import instance from "./instance";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };
  addToCart = async (newItem) => {
    const foundItem = this.items.find((item) => item.nftId === newItem.id);
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
  deleteCart = async (itemId) => {
    this.items = this.items.filter((item) => item.nftId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  checkout = async () => {
    try {
      await instance.post("/checkout", this.items);
      this.items = [];
      await AsyncStorage.removeItem("myCart");
      alert("you've been scammed!");
    } catch (error) {
      console.error(error);
    }
  };
}
const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
