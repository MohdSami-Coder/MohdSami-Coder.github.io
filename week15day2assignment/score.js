import {createStore} from 'redux';

// Reducer function
let scoreReducer = function(state, action) {

    if(state === undefined){
        return{currentScore: 0};
    }

    if(action.type === "UPDATE BONUS"){
        let newState = state;
        newState.currentScore = newState.currentScore + 100;
        return newState;
    }

    if(action.type === "LEVEL COMPLETED"){
        let newState = state;
        newState.currentScore = newState.currentScore + 500;
        return newState;
    }

    if(action.type === "LIFE LOST"){
        let newState = state;
        newState.currentScore = newState.currentScore - 250;
        return newState;
    }
}


let store = createStore(scoreReducer);

store.subscribe(function(){

    let state = store.getState();
    console.log("Score updated = ", state)
})

store.dispatch({
    type: "UPDATE BONUS"
})

store.dispatch({
    type: "LEVEL COMPLETED"
})

store.dispatch({
    type: "LIFE LOST"
})