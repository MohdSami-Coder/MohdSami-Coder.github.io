import {createStore} from 'redux';

let oddEvenReducer = function(oldState, action){

    let newState = {
        number: 0,
        isOdd: false,
        isEven: false
    }

    if(!oldState) { return newState };

    if(action.type == "CHECK_NUMBER"){
        newState.number = action.number;

        if(newState.number % 2 == 0){
            newState.isEven = true;
            newState.isOdd = false;
        } else {
            newState.isEven = false;
            newState.isOdd = true;
        }
    }
    return newState;
}

let oddEvenStore = createStore(oddEvenReducer);

oddEvenStore.subscribe(function(){
    console.log( oddEvenStore.getState() );
})

for(let i = 1; i <= 100; i = i + 1){
    oddEvenStore.dispatch({
        type: "CHECK_NUMBER",
        number: i
    })
}