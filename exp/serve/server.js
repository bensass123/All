// Requiring dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {

    // Depending on the URL we display a different HTML file.
    case "/":
      showFile("index.html", req, res);
      break;

    case "/food":
      showFile("food.html", req, res);
      break;

    case "/movies":
      showFile("movies.html", req, res);
      break;

    case "/frameworks":
      showFile("frameworks.html", req, res);
      break;

    default:
      showFile("index.html", req, res);
      break;
  }
}

function showFile(fileName, req, res) {
  fs.readFile(fileName, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
