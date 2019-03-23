myArray = [832, 18, 41832, 125969, 53, 5];

function position(search, myArray) {
    
    var i;
    
    for (i = 0; i < myArray.length; i = i + 1) {
    
        if (myArray[i] === search) {
            return i;
        }
    }
    
    return -1;
}

position(456465, (myArray));