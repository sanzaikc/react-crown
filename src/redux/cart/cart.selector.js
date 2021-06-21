import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce(
    (accumulatedCount, item) => accumulatedCount + item.quantity,
    0
  )
);

export const selectTotalCartItemsPrice = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce(
    (accPrice, cartItem) => accPrice + cartItem.price * cartItem.quantity,
    0
  )
);
