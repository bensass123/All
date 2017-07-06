var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.



app.get("/:id", function(req, res) {
  console.log(req.params.id);
  connection.query("SELECT * FROM quotes WHERE id = ?;", [req.params.id], function(err, data) {
    res.render("single_quote", data[0]);
  });
});

app.put("/:id", function(req, res) {
  console.log('put');
  connection.query("UPDATE quotes SET author = ?, quote =  ? WHERE id = ?;",[req.body.author, req.body.quote, req.params.id], function(err, data) {
    if (err) throw err;
    console.log('success');
  });
});

app.get("/", function(req, res) {

      connection.query("SELECT * FROM quotes;", function(err, data) {
        console.log('hit');
        if (err) throw err;

        // Test it
        // console.log('The solution is: ', data);

        // Test it
        // res.send(data);

        res.render("index", { quotes: data });
      });
    
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
