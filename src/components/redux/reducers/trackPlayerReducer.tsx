import { type Track } from "../../strayInterfaces/Track";
import {
  SET_TRACK,
  CLEAR_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
} from "../actions/trackPlayerActions";

interface TrackPlayerState {
  trackLoaded: Track | null;
  isPlaying: boolean;
}

const initialState: TrackPlayerState = {
  trackLoaded: null,
  isPlaying: false,
};

interface Action {
  type: string;
  payload?: Track;
}

const trackPlayerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_TRACK:
      return;

    case PLAY_TRACK:
      return;

    case PAUSE_TRACK:
      return;

    case CLEAR_TRACK:
      return initialState;

    default:
      return state;
  }
};

export default trackPlayerReducer;
