function sqrtReducer(sqrt = false, action){
    if(action.type === "SQRT") {
       sqrt = Math.sqrt(action.number);
        }
    return sqrt;
}


export {sqrtReducer}