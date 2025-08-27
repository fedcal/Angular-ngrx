import {createFeature, createReducer, on} from '@ngrx/store';
import {decrement, increment} from './counter.action';

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 123 }

export const counterFeature = createFeature({
  name: 'counter',  //il nome che avrà questa proprietà nello stor
  reducer: createReducer(
    initialState,
    on(increment, state => ({value: state.value + 1})),
    on(decrement, state => ({value: state.value - 1})),
  )
})

export const counterReducerOLD2 = createReducer(
  initialState,
  on(increment, state => ({value: state.value + 1})),
  on(decrement, state => ({value: state.value - 1})),
)

export const counterReducerOLD = () => {
  return {value: 0}
}
