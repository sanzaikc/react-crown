import CartTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden,
      };
    case CartTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload),
      };

    default:
      return currentState;
  }
};

export default cartReducer;
