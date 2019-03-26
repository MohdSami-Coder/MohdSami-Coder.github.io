'use strict';

var cityState = function(city, state) {
    for(var i = 0; i < city.length; i = i + 1) {

        if(city[i].state == state) {

            console.log(city[i].state, city[i].name);
        }    

    }

}
   
var request = new XMLHttpRequest();
request.open("get", "data.json");
request.send();

request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
        var citydata =  JSON.parse(request.responseText);
 
        console.log("Maharashtra Cities");
        cityState(citydata, "Maharashtra");

        console.log("Gujarat Cities");
        cityState(citydata, "Gujarat");s
    }
}    
