import { type User } from "../../strayInterfaces/User";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

const handleLogIn = (
  attemptUser: { email: string; password: string },
  userExist: User | undefined,
) => {
  if (!userExist) {
    alert("User not found. Please check your credentials.");
    return { type: "NO_MATCH" };
  } else {
    return {
      type: LOG_IN,
      payload: userExist,
    };
  }
};

export default handleLogIn;
