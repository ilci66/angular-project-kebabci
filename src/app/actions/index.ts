import { createAction, props } from "@ngrx/store";

export const add = createAction(
    '[Add Item] Add',
    props<{ id: string }>()
)

export const remove = createAction(
    '[Remove Item] Remove',
    props<{ name: string }>()
)

export const reset = createAction('[Reset Item] Reset')

export const test = createAction('[Test Stuff] Test')