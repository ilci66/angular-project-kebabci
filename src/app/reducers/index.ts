import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { add, remove, reset, test } from '../actions/index'

export interface State {
  totalPrice: number;
  names: string[];
}

export interface Item {
  price: number,
  id: number,
  name: string
}

export const initialState: State = {
  totalPrice: 0,
  names: []
}

export const itemCardReducer: ActionReducer<State, Action> = createReducer(
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
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [] = [debug];
