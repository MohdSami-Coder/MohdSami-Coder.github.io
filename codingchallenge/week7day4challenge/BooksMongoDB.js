/* I have attached a JSON file here  `books.json` which we used earlier for AJAX based challenges.

Today's challenge is to read this file and put all the books in it into a MongoDB collection.

There is no express/ajax needed here. Using `fs` module's `readFile` function, read the file, connect to a mongodb database named `library` and put all the 100 books in the file in a collection named `books`.

Hints:

1. Reading the file should happen inside the connect function of Mongo. Otherwise the asynchronous nature of the connect call won't give you a DB connection right away.
2. To insert an array of objects in one go, use `insertMany` function instead of `insertOne`. */


'use strict';

var mongo = require("mongodb");
var fs = require("fs");

var mongoClient = new mongo.MongoClient("mongodb://127.0.0.1:27017/library", {useNewUrlParser: true});
mongoClient.connect(function(error){

    if(error) {
        console.log("Error connecting to DB");
        return;
    }
    console.log("DB connection established");
    var DB = mongoClient.db("library");

    fs.readFile("books.json", "utf-8", function(error, data){

        if(error) {
            console.log("Error reading the file");
            return;
        }
        console.log("File is read. Inserting Data into DB");
        
        data = JSON.parse(data);

        DB.collection("books").insertMany(data, function(error, success){

            if(error) {
                console.log(error);
                console.log("\n\nData was not written in the file");
                return;
            }
            console.log("Data inserted into DB")
        })
    })
})
