// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  var myHTML = '<h1>Please navigate to a directory:</h1> <h3><ul><li>Multiply</li> <li>Add</li> <li>Subtract</li> <li>divide</li></ul></h3>';
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
});

app.get("/add/:op1/:op2/", function(req, res) {

  var op1 = req.params.op1;
  var op2 = req.params.op2;
  var answer = parseInt(op1) + parseInt(op2);
  var myHTML = '<h1>' + answer + '</h1>';
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
});

app.get("/multiply/:op1/:op2/", function(req, res) {

  var op1 = req.params.op1;
  var op2 = req.params.op2;
  var answer = parseInt(op1) * parseInt(op2);
  var myHTML = '<h1>' + answer + '</h1>';
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
});

app.get("/subtract/:op1/:op2/", function(req, res) {

  var op1 = req.params.op1;
  var op2 = req.params.op2;
  var answer = parseInt(op1) - parseInt(op2);
  var myHTML = '<h1>' + answer + '</h1>';
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
});

app.get("/divide/:op1/:op2/", function(req, res) {

  var op1 = req.params.op1;
  var op2 = req.params.op2;
  var answer = parseInt(op1) / parseInt(op2);
  var myHTML = '<h1>' + answer + '</h1>';
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(myHTML);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
