//library imports
import { makeAutoObservable } from "mobx";
// imports
import instance from "./instance";

class GalleryStore {
  galleries = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchGalleries = async () => {
    try {
      const res = await instance.get("/galleries");
      this.galleries = res.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchGalleries:", error);
    }
  };
}
const galleryStore = new GalleryStore();
galleryStore.fetchGalleries();
export default galleryStore;
