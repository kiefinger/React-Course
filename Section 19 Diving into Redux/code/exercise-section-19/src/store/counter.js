import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice( {
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            console.log("increment")
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter += action.payload;
        },
        toogleCounter(state) {
            console.log("showCounter")
            state.showCounter = !state.showCounter;
        }
    }

})

export const counterActions = counterSlice.actions;
export default counterSlice;

