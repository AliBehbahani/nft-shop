//library imports
import { List, Spinner } from "native-base";
import React from "react";
import { observer } from "mobx-react";
//components
import CartItem from "./CartItem";
//stores
import cartStore from "../../stores/CartStore";
import nftStore from "../../stores/nftStore";

const CartList = () => {
  if (nftStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...nftStore.getNftById(item.nftId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <>
      <List>{cartList}</List>
    </>
  );
};

export default observer(CartList);
