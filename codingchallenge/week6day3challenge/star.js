'use strict';

var star = function(n) {
    
    for(var i = 1; i <= n; i = i + 1) {
    
        var line = "";
    
        for(var j = 1; j <= i; j = j + 1) {
    
            line = line + "*";
    
        }
    
        console.log(line);
    }

    for(var i = n; i >= 1; i = i - 1) {

        var line = "";

        for(var j = 1; j <= i; j = j + 1) {
            line = line + "*";
        }
        console.log(line);
    }
}

star(10);