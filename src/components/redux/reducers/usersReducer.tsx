import { type User, type Users } from "../../strayInterfaces/User";
import { CREATE_USER, DELETE_USER } from "../actions/userActions";

const initialState: Users = [];

interface Action {
  type: string;
  payload?: any;
}

const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.payload];

    case DELETE_USER:
      return state.filter((user: User) => {
        user.info.email !== action.payload;
      });

    default:
      return state;
  }
};

export default usersReducer;
