import {createReducer} from '@ngrx/store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 123 }

export const counterReducer = createReducer(
  initialState
)

export const counterReducerOLD = () => {
  return {value: 0}
}
