import {
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { add, remove, reset, test } from '../../actions/index'
import { Item, Cart } from '../models';

export const initialState: Cart = {
  totalPrice: 0,
  names: []
};

export const itemCardReducer: ActionReducer<Cart, Action> = createReducer(
  initialState,
  on(add, (state, {id, price, name}) => {
    return state = {
      ...state, 
      totalPrice: state.totalPrice + price, 
      names: [...state.names, name]
    }
  }),

  on(remove, (state, {name}) => {
    return {
      ...state, 
      totalPrice: state.totalPrice - 1, 
      names: state.names.filter(n => n !== name)
    }
  }),

  on(reset, state => ({ totalPrice: 0, names: [] })),

  on(test, state => {
    console.log("test works"); 
    return state
  })
);

// export const reducers: ActionReducerMap<State> = {
  
// };

export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action)
  }
};

export const metaReducers: MetaReducer<Cart>[] = !environment.production ? [] : [] = [debug];
