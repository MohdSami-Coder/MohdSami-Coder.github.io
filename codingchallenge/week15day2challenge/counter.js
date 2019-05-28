import {createStore} from 'redux';

// Reducer function
let scoreReducer = function(state, action) {

    if(state === undefined){
        return{currentScore: 0};
    }

    if(action.type === "INCREMENT"){
        let newState = state;
        newState.currentScore = newState.currentScore + 1;
        return newState;
    }

    if(action.type === "DECREMENT"){
        let newState = state;
        newState.currentScore = newState.currentScore -1;
        return newState;
    }

    if(action.type === "RESET"){
        let newState = state;
        newState.currentScore = newState.currentScore;
        return newState;
    }
}


let store = createStore(scoreReducer);

store.subscribe(function(){

    let state = store.getState();
    console.log("Counter = ", state)
})

store.dispatch({
    type: "INCREMENT"
})

store.dispatch({
    type: "DECREMENT"
})

store.dispatch({
    type: "RESET"
})