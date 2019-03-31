'use strict';

var express = require("express");

var bodyParser = require('body-parser')
 
var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false}))

var PLAYERS = [];
    

var myFun = function(request, response) {
    var data = {
        players: PLAYERS, 
        userName: "Ansal"
    };    

    response.render("hello.hbs", data);

}

app.get("/hey", myFun);

var myFun1 = function(request, response) {

    var studentName = request.body.studentName;

    PLAYERS.push(studentName);

    response.redirect("/hey");
}

app.post("/hey", myFun1)

app.listen(3000);