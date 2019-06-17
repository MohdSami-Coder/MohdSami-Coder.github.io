
function squareReducer(square=false, action){
    if(action.type === "SQUARE") {
        square = action.number * action.number;
        }
    return square;
}

export {squareReducer}