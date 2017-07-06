var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3002;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "wishes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId + ' Port: ' + port);
});

app.get("/", function(req, res) {
	console.log('get');
	connection.query('SELECT * FROM wishes', function(err, data){
		if (err) throw err;
		res.render('index', {wishes: data});
	});
});

app.post("/", function(req, res) {
	console.log('post');
	connection.query('INSERT INTO wishes (wish) VALUES (?)',[req.body.wish], function(err, data){
		if (err) throw err;
		res.redirect('/');
	});
});



app.listen(port);
