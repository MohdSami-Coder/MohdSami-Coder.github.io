'use strict';

var cityInitialLetter = function(city, letter) {
    var count = 0;
    for(var i = 0; i < city.length; i = i + 1) {
        if(city[i].name[0] == letter) {
            count = count + 1;
        }
    }
    return count;
}

var request = new XMLHttpRequest();
request.open("get", "cities.json");
request.send();

request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
        var data = JSON.parse(request.responseText);
        var result = cityInitialLetter(data, "C");
        console.log(result);
    }
}

