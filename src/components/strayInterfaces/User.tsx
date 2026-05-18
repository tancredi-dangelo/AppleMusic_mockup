import { type Playlist } from "./Playlist";

export interface User {
  info: {
    username: string;
    email: string;
    password: string;
  };
  playlists: Playlist[];
  likedSongs: Playlist;
}

export type Users = User[];
