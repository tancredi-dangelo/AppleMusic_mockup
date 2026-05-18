import type { User } from "../../strayInterfaces/User";

export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

const createNewUser = (user: User) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};

const deleteUser = () => {};

export { createNewUser, deleteUser };
