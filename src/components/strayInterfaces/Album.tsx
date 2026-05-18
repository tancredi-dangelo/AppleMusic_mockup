export interface Album {
  title: string;
  artist: string;
  img: string;
}

// for API response
export interface DeezerAlbum {
  id: number;
  title: string;
  cover_medium: string;
}
