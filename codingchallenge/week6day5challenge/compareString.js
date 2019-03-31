 'use strict';

var compareStrings = function(a, b) {

    var differenceCount = 0;
    var differenceInLength = 0;

    if(a.length != b.length) {
        differenceInLength = Math.abs(a.length - b.length);
    }

    console.log(differenceInLength);
    return;
    
    for(var i = 0; i < a.length; i = i + 1) {
        
        if(a[i] != b[i]) {
            differenceCount = differenceCount + 1;
        }
    }

    return differenceCount;
}

console.log(compareStrings("Python", "Cython"));