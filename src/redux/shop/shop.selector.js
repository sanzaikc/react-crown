import { createSelector } from "reselect";

const COLLECTION_MAP_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParams) =>
  createSelector([selectShop], (shop) =>
    shop.collections.find(
      (c) => c.id === COLLECTION_MAP_ID[collectionUrlParams]
    )
  );
