//react imports
import React from "react";
import { List, Spinner } from "native-base";
//library imports
import { observer } from "mobx-react";
//components
import GalleryItem from "./GalleryItem";
//stores
import galleryStore from "../../stores/galleryStore";

const GalleryList = ({ navigation }) => {
  if (galleryStore.loading) return <Spinner />;
  const galleryList = galleryStore.galleries.map((gallery) => (
    <GalleryItem gallery={gallery} key={gallery.id} navigation={navigation} />
  ));

  return <List>{galleryList}</List>;
};

export default observer(GalleryList);
