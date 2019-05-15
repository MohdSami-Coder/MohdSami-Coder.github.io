'use strict';


// Global section
var globalCounter = 0;
var globalButton = document.getElementById("globalButton");
globalButton.addEventListener("click", function() {
    globalCounter = globalCounter + 1;
    var globalText = document.getElementById("globalText");
    globalText.innerText = "Global Counter: " + globalCounter;
});


// Object section
var objectCounter = { counter: 0 };
var objectButton = document.getElementById("objectButton");
objectButton.addEventListener("click", function() {
    objectCounter.counter = objectCounter.counter + 1;
    var objectText = document.getElementById("objectText");
    objectText.innerText = "Object Counter: " + objectCounter.counter;
});


// Closure section
function createCounter() {
    var counter = 0;

    function incrementCounter() {
        counter = counter + 1;
        return counter;
    }

    return incrementCounter;
}

var closureCounter = createCounter();

var closureButton = document.getElementById("closureButton");
closureButton.addEventListener("click", function() {

    var closureText = document.getElementById("closureText");
    closureText.innerText = "Closure Counter: " + closureCounter();
});