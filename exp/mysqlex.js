// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'simpsons'
});

connection.connect();


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 1234;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // var myHTML = '<h1>Please navigate to a directory:</h1> <h3><ul><li>Multiply</li> <li>Add</li> <li>Subtract</li> <li>divide</li></ul></h3>';
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(myHTML);
});

app.get("/cast", function(req, res) {

  connection.query('SELECT * FROM ACTORS', function (err, rows, fields) {
    if (err) throw err;
    var html1 = '';
    for (i in rows) {
      html1 += "Name:        " + rows[i].name+ '</br>';
      html1 += "Coolness:    " + rows[i].coolness_points+ '</br>';
      html1 += "Attitude:    " + rows[i].name + '</br>';
      html1 += "ID:          " + rows[i].id + '</br></br></br>';

    } 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html1);
  })
});

app.get("/coolness-chart", function(req, res) {

  connection.query('SELECT * FROM ACTORS order by coolness_points', function (err, rows, fields) {
    if (err) throw err;
    var html1 = '';
    for (i in rows) {
      html1 += "Name:        " + rows[i].name+ '</br>';
      html1 += "Coolness:    " + rows[i].coolness_points+ '</br>';
      html1 += "Attitude:    " + rows[i].name + '</br>';
      html1 += "ID:          " + rows[i].id + '</br></br></br>';

    } 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html1);
  })
});

app.get("/attitude-chart/:attitude", function(req, res) {

  connection.query('SELECT * FROM ACTORS WHERE ATTITUDE = ?', [req.params.attitude], function (err, rows, fields) {
    if (err) throw err;
    var html1 = '';
    for (i in rows) {
      html1 += "Name:        " + rows[i].name+ '</br>';
      html1 += "Coolness:    " + rows[i].coolness_points+ '</br>';
      html1 += "Attitude:    " + rows[i].name + '</br>';
      html1 += "ID:          " + rows[i].id + '</br></br></br>';

    } 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html1);
  })
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// connection.end();