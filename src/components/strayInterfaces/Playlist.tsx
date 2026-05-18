import { type Track } from "./Track";

export interface Playlist {
  tracks: Track[];
  creator: string;
  created_at: string;
  total_duration: string;
}
