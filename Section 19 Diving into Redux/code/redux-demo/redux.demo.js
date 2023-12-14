const redux = require('redux');

const initialState = {
    counter: 0
}
function  counterReducer( state = initialState, action) {

    if ( action.type === 'counter-increment') {
        return {
            counter: state.counter+1
        } ;
    }
    return state;
}
const store = redux.createStore( counterReducer )


function counterSubscriber() {
    const latestState = store.getState();
    console.log(latestState)
}


store.subscribe(counterSubscriber);

store.dispatch( {
    type: 'counter-increment'
});
