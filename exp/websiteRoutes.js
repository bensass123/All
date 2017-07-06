// Instructions:
// Create a website with four routes:
	// Home
	// Favorite Food
	// Favorite Movies
	// Favorite CSS Frameworks
// Each route should be triggered by a different URL.
// Each route should display an HTML page listing your favorite three things of each.
// Be sure to se fs to serve your HTML files.
// Dependencies
// The url library allows us to parse parts of the request url.
var url = require("url");

var http = require("http");

var fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//body-parser

// We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
      home(urlParts.pathname, req, res);
      break;
    case "/home":
      home(urlParts.pathname, req, res);
      break;
    case "/movies":
      console.log('fave movies');
      movies(urlParts.pathname, req, res);
      break;
    case "/frameworks":
      console.log('fave css');
      frameworks(urlParts.pathname, req, res);
      break;
    case "/food":
      console.log("fave food");
      food(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function home(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>Home Page</h1>";
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

// When we visit the "http://localhost:8080/portfolio" path, this function is run.
function movies(url, req, res) {
  fs.readFile("movies.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function food(url, req, res) {
  fs.readFile("food.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function frameworks(url, req, res) {
  fs.readFile("frameworks.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function home(url, req, res) {
  fs.readFile("home.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found YOU IDIOT</h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}