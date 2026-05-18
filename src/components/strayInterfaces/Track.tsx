import type { DeezerAlbum } from "./Album";
import { type Artist } from "./Artist";

export interface Track {
  id: number;
  title: string;
  duration: number;
  preview: string;
  artist: Artist;
  album: DeezerAlbum;
}
