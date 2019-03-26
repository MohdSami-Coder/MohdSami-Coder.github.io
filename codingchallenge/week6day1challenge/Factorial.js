'use strict';

var factorial = function(n) {
    var result = 1;
    for(var i = 1; i <= n; i = i + 1) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5));