'strict use';

var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false}));

var DB;

var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/attainu", {useNewUrlParser: true});
mongoClient.connect(function(error){

    if(error) {
        console.log("Error establishing connection to DB");
    } else {
        console.log("DB connection successfully established");
        DB = mongoClient.db("attainu");
    }
})

app.get("/", function(request, response) {

    response.render("index.hbs");
});

app.get("/instructors", function(request, response) {
    
    DB.collection("instructors").find({}).toArray(function(error, instructors){

        if(error) {
            console.log("Error connecting to Instructors collection");
        }
        
        var data = {
            instructors: instructors
        };
        
        response.render("instructors.hbs", data);
    })
});

app.get("/instructors/add", function(request, response) {

    response.render("instructors-add.hbs");
});


app.post("/instructors/add", function(request, response) {
    var name = request.body.name;
    var phone = request.body.phone;

    var newInstructor = {

        name: name,
        phone: phone
    }

    DB.collection("instructors").insertOne(newInstructor, function(error, result) {

        if(error) {
            console.log("Error adding data to instructors collection");
        }
        response.redirect("/instructors");
    })
});

// Students Route

app.get("/students", function(request, response) {
    
    DB.collection("students").find({}).toArray(function(error, students){

        if(error) {
            console.log("Error connecting to Students collection");
        }
        
        var studentData = {
            students: students
        };
        
        response.render("students.hbs", studentData);
    })
});

app.get("/students/add", function(request, response) {

    response.render("students-add.hbs");
});

app.post("/students/add", function(request, response) {
    var name = request.body.name;
    var phone = request.body.phone;
    var location = request.body.location;

    var newStudent = {

        name: name,
        phone: phone,
        location: location
    };

    DB.collection("students").insertOne(newStudent, function(error, result) {

        if(error) {
            console.log("Error adding data to Students collection");
        }
        response.redirect("/students");
    })
});


app.listen(3000);





