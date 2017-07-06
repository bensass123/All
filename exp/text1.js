// Here we require/import the HTTP module
var http = require("http");
var Twitter = require('twitter');
var k = require('./keys');

// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;

var bads = ['YOUR DOG IS UGLY', 'YOUR MOTHER HAS POOR PENSMANSHIP','YOU LOOK LIKE YOU HAVE JOCK ITCH'];
var goods = ['HEY MAN, GREAT SHIRT', 'YOU LOOK LIKE A REAL TREASURE', 'YOU HAVE TREMENDOUS EYEBROWS'];
var r = shuffleCards(goods);
var r2 = shuffleCards(bads);

var x = getRandomInt(0,20);




//TWITTER

var tweets2;
var consumer_secret = k.twitterKeys.consumer_secret;
var consumer_key = k.twitterKeys.consumer_key;
var access_token_key = k.twitterKeys.access_token_key;
var access_token_secret = k.twitterKeys.access_token_secret;

var client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});

var params = {screen_name: 'StephenAtHome'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    tweets2 = tweets;
  }
});

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {
	
  var t = r.pop();
  var x = getRandomInt(0,20);
  // The below statement is triggered (client-side) when the user visits the PORT URL
  // response.end(r[0]);
  if(tweets2[0].text) {
  	response.end(tweets2[x].text);
  } else {
  	response.end('wait');
  }
  r.unshift(t);
}

function handleRequest2(request, response) {
	
  var t = r2.pop();
  var x = getRandomInt(0,20);
  // The below statement is triggered (client-side) when the user visits the PORT URL
  // response.end(r2[0]);
  if(tweets2[1].text) {
  	response.end(tweets2[x].text);
  } else {
  	response.end('wait');
  }
  r2.unshift(t);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});

server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);

});

//extra functions

function shuffleCards(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

 

 


