import { createAction, props } from "@ngrx/store";

export const add = createAction(
    '[Add Item] Add',
    props<{ 
        id: number, 
        name: string, 
        price: number 
    }>()
)

export const remove = createAction(
    '[Remove Item] Remove',
    props<{ name: string }>()
)

export const reset = createAction('[Reset Item] Reset')

export const test = createAction('[Test Stuff] Test');