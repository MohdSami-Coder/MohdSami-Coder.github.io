/* Addition */

add = document.getElementById("Addition");

add_onclick = function() {

    firstnumber = document.getElementById("Input1");
    secondnumber = document.getElementById("Input2");

        if(firstnumber.value == "" || secondnumber.value == "") {
            alert("Please Enter Any Number in Both Fields");
            return;
        }    

    sum = parseInt(firstnumber.value) + parseInt(secondnumber.value);
    
    result = document.getElementById("Output");
    result.innerText = sum;
}

add.addEventListener("click", add_onclick);


/* Substraction */

minus = document.getElementById("Substraction");

minus_onclick = function() {

    firstnumber = document.getElementById("Input1");
    secondnumber = document.getElementById("Input2");

        if(firstnumber.value == "" || secondnumber.value == "") {
            alert("Please Enter any Number in Both Fields");
            return;
        }

    negate = parseInt(firstnumber.value) - parseInt(secondnumber.value);
    
    result = document.getElementById("Output");
    result.innerText = negate;
}

minus.addEventListener("click", minus_onclick);


/* Multiplication */

multi = document.getElementById("Multiplication");

multi_onclick = function() {

    firstnumber = document.getElementById("Input1");
    secondnumber = document.getElementById("Input2");

        if(firstnumber.value == "" || secondnumber.value == "Input2") {
            alert("Please Enter any Number in Both Fields");
            return;

        }

    multiply = parseInt(firstnumber.value) * parseInt(secondnumber.value);
    
    result = document.getElementById("Output");
    result.innerText = multiply;

}

multi.addEventListener("click", multi_onclick);


/* Division */

divis = document.getElementById("Division");

divis_onclick = function() {

    firstnumber = document.getElementById("Input1");
    secondnumber = document.getElementById("Input2");

        if(firstnumber.value == "" || secondnumber.value == "") {
            alert("Please Entery any Number in Both Fields");
            return;

        }

    divide = parseInt(firstnumber.value) / parseInt(secondnumber.value);

    result = document.getElementById("Output");
    result.innerText = divide;

}

divis.addEventListener("click", divis_onclick);

