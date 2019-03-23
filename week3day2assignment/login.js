function validate() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Mohd Sami" && password == "SamiCoder") {
        alert("You have Logged in");
        return;
    }
        else {

            alert("Wrong Username and Password");
            return;

    }
}
