import {createStore} from 'redux';


// Reducer
let counterReducer = function(state, action){

    let newState = { counter: 0 };


    // If empty state, initialize the state
    if(!state || action.type == "RESET") { return newState }
    

    if(action.type == "INCREMENT") {
        newState.counter = state.counter + 1;
    }

    if(action.type == "DECREMENT") {
        newState.counter = state.counter - 1;
    }

    return newState;

}

// Create a store from the Reducer
let counterStore = createStore(counterReducer);

// Subscribe to changes in state
counterStore.subscribe(function(){
    console.log( counterStore.getState() );
})


// Sending actions to Reducer
counterStore.dispatch({ type: "INCREMENT" });
counterStore.dispatch({ type: "DECREMENT" });
counterStore.dispatch({ type: "RESET" });
