import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Item, Cart } from "../models";

export const selectItems = createFeatureSelector<ReadonlyArray<Item>>('items');

export const selectState = createFeatureSelector<ReadonlyArray<Cart>>('cart');

export const selectCartState = createSelector(
  selectItems,
  selectState,
  (items, cart) => {
    return cart
  }
)