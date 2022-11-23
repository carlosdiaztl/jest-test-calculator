export const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
