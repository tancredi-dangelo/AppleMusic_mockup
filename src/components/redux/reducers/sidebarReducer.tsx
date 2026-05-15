import { SHOW, HIDE } from "../actions/sidebarActions";

const initialState: boolean = false;

const sidebarReducer = (
  state = initialState,
  action: { type: string },
): boolean => {
  switch (action.type) {
    case SHOW:
      return true;

    case HIDE:
      return false;

    default:
      return state;
  }
};

export default sidebarReducer;
