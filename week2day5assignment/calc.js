// Function for input fields

getInput = function() {
    number1 = document.getElementById("Field1").value;
    number2 = document.getElementById("Field2").value;
        resultObject = {
            "number1": number1,
            "number2": number2        
        }
        return resultObject;    
}


// Function for output field

showOutput = function(result) {
    resultElement = document.getElementById("Output");
    resultElement.innerText = result;
    
}


// Plus Operation

plus = document.getElementById("Addition");
plus_onClick = function() {
    numberValues = getInput();

    //Popup message to ask users to enter numbers before clicking operators
    if(numberValues.number1 == "" || numberValues.number2 == "") {
        alert("Please enter any number in the 2 Fields");
        return;   
    }

    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
    showOutput(sum);

}

plus.addEventListener("click", plus_onClick);

// Minus Operation

minus = document.getElementById("Substraction");
minus_onClick = function() {
    numberValues = getInput();
    
    if(numberValues.number1 == "" || numberValues.number2 == "") {
        alert("Please enter any number in the 2 Fields");
        return;   
    }
    
    negate = parseInt(numberValues.number1) - parseInt(numberValues.number2);
    showOutput(negate);

}

minus.addEventListener("click", minus_onClick);

// Multiplication Operation

multi = document.getElementById("Multiplication");
multi_onClick = function() {
    numberValues = getInput();
    
    if(numberValues.number1 == "" || numberValues.number2 == "") {
        alert("Please enter any number in the 2 Fields");
        return;   
    }
    
    multiply = parseInt(numberValues.number1) * parseInt(numberValues.number2);
    showOutput(multiply);

}

multi.addEventListener("click", multi_onClick);

// Division Operation

divise = document.getElementById("Division");
divise_onClick = function() {
    numberValues = getInput();
    
    if(numberValues.number1 == "" || numberValues.number2 == "") {
        alert("Please enter any number in the 2 Fields");
        return;   
    }
    
    divide = parseInt(numberValues.number1) / parseInt(numberValues.number2);
    showOutput(divide);

}

divise.addEventListener("click", divise_onClick);