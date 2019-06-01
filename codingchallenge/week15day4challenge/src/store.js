import {createStore} from 'redux';

let reducer = function(oldState, action){

    let initialState = {
        number: 0,
        result: 0
    }

    if(!oldState) { return initialState };

    let newState = initialState;
    
    newState.number = oldState.number;
    newState.result = oldState.result;

    if(action.type == "NUMBER CHANGE"){
        newState.number = action.number;
    }

    if(action.type == "SQUARE"){
        newState.result = newState.number * newState.number;
    }

    if(action.type == "CUBE"){
        newState.result = newState.number * newState.number * newState.number;
    }

    if(action.type == "SQRT"){
        newState.result = Math.sqrt(newState.number);
    }
    return newState;

}

let store = createStore(reducer);

store.subscribe(function(){
    console.log(store.getState());
})

let storeMapper = function(state){
    return state;
}
export {store, storeMapper};