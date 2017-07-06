// TO BE ADDED
// ===========
// NPM package dependencies
// We'll need : express, mongoose, bodyParser, morgan (for logging)

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');



// TO BE ADDED
// ===========
// A dependency on a Mongoose model for clicks.
// (REMEBER TO DEFINE A MONGOOSE SCHEMA FOR CLICKS )
 var Click = require('./models/click')

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023674.mlab.com:23674/heroku_5ql1blnl");
mongoose.connect('localhost/test');
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// TO BE ADDED
// ===========
// Server routes to deal with each of the clicks.


// -------------------------------------------------

// Main "/" Route. This will redirect to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {
// This GET request will search for the latest clickCount
  Click.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api", function(req, res) {

  var clickID = req.body.clickID;
  console.log('posting clicks ', req.body.clicks);
  console.log('posting clickid ', req.body.clickID);
  var clicks = parseInt(req.body.clicks);

  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  Click.findOneAndUpdate({
    clickID: clickID
  }, {
    $set: {
      clicks: clicks
    }
  }, { upsert: true }).exec(function(err) {

    if (err) {
      console.log(err);
    }
    else {
      res.send("Updated Click Count!");
    }
  });
});

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
