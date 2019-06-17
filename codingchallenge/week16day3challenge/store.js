import {createStore, combineReducers} from 'redux';

import {squareReducer} from "./squareReducer.js"
import {numberReducer} from "./numberReducer.js"
import {sqrtReducer} from "./sqrtReducer.js"


let reducer = combineReducers({
    number: numberReducer,
    square: squareReducer,
    sqrt: sqrtReducer
})

let store = createStore(reducer);
 
 store.subscribe(function(){
     console.log("store:===>.", store.getState());
 })

store.dispatch({
    type: "SET_NUMBER",
     number: 9,    
});

store.dispatch({
     type: "SQUARE",
     number: 9   
    
});


store.dispatch({
     type: "SQRT",
     number: 9
    
});

export {reducer, store};