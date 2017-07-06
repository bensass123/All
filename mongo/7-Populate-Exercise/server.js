/* Mongoose's "Populated" Method (18.3.7)
 * =============================================== */

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Bring in our Models: Not and User
var Truck = require("./models/Note.js");
var User = require("./models/User.js");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// We'll create a new user by using the User model as a class
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
var exampleUser = new User({
  name: "test",
  username: "BurgerTown"
});
// // Using the save method in mongoose, we create our example user in the db
exampleUser.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

// Routes
// ======

// Route to see trucked that have been favorited
app.get("/recents", function(req, res) {
  // Find all notes in the note collection with our Note model
  Truck.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });
});


// Route to see what user looks like without populating
app.get("/user", function(req, res) {
  // Find all users in the user collection with our User model
  User.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });
});


// New note creation via POST route
app.post("/submit", function(req, res) {
  // Use our Truck model to make a new favorite truck from the req.body
  var newTruck = new Truck(req.body);
  // Save the new note to mongoose
  newTruck.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
      // Find our user and push the new truck name into the User's favorites array
      User.findOneAndUpdate({}, { $push: { "favorites": doc.truckName } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.send(newdoc);
        }
      });
    }
  });
});


// New seeing all favorited trucks from one given user
app.get("/status", function(req, res) {
  // Unwinding (splitting up the array) the user's favorite trucks from the favoite field in the user collection.
  User.aggregate([{$unwind: "$favorites"}], function(err, doc){
    if (err){
      console.log(err);
    } else {
      // Doc is stored as favs.
      var favs = doc;
      // favoriteTrucks is an empty array that will store all of the user's favorite trucks.
      var favoriteTrucks = [];
      // Looping through the length of the results(docs aka favs) 
      // and pushing all favorites into the favoriteTrucks array.
      for (var i = 0; i < favs.length; i++) {
        favoriteTrucks.push(favs[i].favorites);
      }
      res.send(favoriteTrucks);
    }
  }); 
});
// Route to see what user looks like WITH populating
app.get("/populateduser", function(req, res) {

  User.find({}).populate("trucks").exec(function(error, doc){
    if (error){
      console.log(error);
    } else {
      res.send(doc);
    }
  });

});


// Listen on Port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
