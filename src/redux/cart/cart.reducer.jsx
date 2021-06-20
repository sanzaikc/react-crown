import CartTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden,
      };

    default:
      return currentState;
  }
};

export default cartReducer;
