function numberReducer(number=false, action){
    if(action.type === "SET_NUMBER") {
    number = action.number;
}
return number;
}

export {numberReducer}