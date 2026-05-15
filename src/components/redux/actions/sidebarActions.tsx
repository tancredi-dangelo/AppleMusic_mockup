export const SHOW = "SHOW";
export const HIDE = "HIDE";

const handleSidebar = (bool: boolean) => {
  if (bool) {
    return {
      type: HIDE,
    };
  } else {
    return {
      type: SHOW,
    };
  }
};

export default handleSidebar;
