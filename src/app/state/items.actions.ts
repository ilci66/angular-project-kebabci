import { createAction, props } from "@ngrx/store";
import { Item } from "../models/items.model";

export const addItem = createAction( 
    '[Item List] Add Item',
    props<{itemId: number, quantitiy: number}>()
)

export const removeItem = createAction( 
    '[Item List] Remove Item',
    props<{itemId: number}>()
)

export const resetCart = createAction( 
    '[Item List] Reset'
)

export const retrievedBookList = createAction(
    '[Item List/API] Retrieve Items Success',
    props<{ books: ReadonlyArray<Item> }>()
);

