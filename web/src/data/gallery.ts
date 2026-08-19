export type GalleryCategoryId =
  | "vereinsarbeit"
  | "taubenhaus"
  | "volieren"
  | "pflegestellen";

export type GalleryItemSize = "default" | "wide" | "tall" | "feature";

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
  title: string;
  text: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategoryId;
  title: string;
  text: string;
  size?: GalleryItemSize;
}

import gallery from "./gallery.json";

export const galleryCategories = gallery.categories as GalleryCategory[];
export const galleryItems = gallery.items as GalleryItem[];

export function getGalleryItems(categoryId: GalleryCategoryId) {
  return galleryItems.filter((item) => item.category === categoryId);
}
