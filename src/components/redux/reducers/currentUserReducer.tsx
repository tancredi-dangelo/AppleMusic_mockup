import { LOG_IN, LOG_OUT } from "../actions/currentUserActions";
import { type User } from "../../strayInterfaces/User";

const initialState: User = {
  info: {
    username: "",
    email: "",
    password: "",
  },
  playlists: [],
  likedSongs: {
    tracks: [],
    creator: "",
    created_at: "",
    total_duration: "",
  },
};

interface Action {
  type: string;
  payload?: any;
}

const currentUserReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload ?? state;

    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
};

export default currentUserReducer;
