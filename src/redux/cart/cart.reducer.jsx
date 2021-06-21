import CartTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemsFromCart,
} from "./cart.utils";

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
    case CartTypes.REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload),
      };
    case CartTypes.CLEAR_CART_ITEM:
      return {
        ...currentState,
        cartItems: clearItemsFromCart(currentState.cartItems, action.payload),
      };
    default:
      return currentState;
  }
};

export default cartReducer;
