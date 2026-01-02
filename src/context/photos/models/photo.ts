import type { Album } from "../../album/model/album";

export interface Photo {
  id: string;
  title: string;
  imageId: string;
  albums: Album[]
}