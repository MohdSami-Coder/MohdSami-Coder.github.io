function isPowerOfTwo(num) {

    if(num < 1) {
        return false;
    }

    for(var counter = num; counter > 1; counter = counter / 2) {
        if(counter % 2 != 0) {
            return false;
        }
    }
  
    return true;
}
  
console.log( isPowerOfTwo(24) );
console.log( isPowerOfTwo(16) );
