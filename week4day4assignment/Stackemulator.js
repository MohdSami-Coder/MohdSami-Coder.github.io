'use strict';

var stack = [];

var showStackContents = function() {

    var stackDisplay = document.getElementById("stackDisplay");
    stackDisplay.innerText = stack.join(" | ");

}

var pushOperation = function() {
    
    var inputValue = document.getElementById("inputField").value;

    if(inputValue == "") {

        alert("U need to enter something in the Field");
        return;
    }
    
    stack.push(inputValue);
    
    showStackContents();

};

var popOperation = function() {
    stack.pop();

    showStackContents();

}

var pushButton = document.getElementById("push-btn");
var popButton = document.getElementById("pop-btn");

pushButton.addEventListener("click", pushOperation);
popButton.addEventListener("click", popOperation);
