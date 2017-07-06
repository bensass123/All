
// NPM Package for reading and writing files
var fs = require("fs");
var User = require('./user');
var WeatherAdmin = require("./WeatherAdmin");
var weather = require('weather-js');


//arguments
var p = process.argv;
var command = p[2];
var username = p[3];
var location = p[4];
if (p[5]){
	for (i = 5; i < p.length; i++){
		location += ' ' + p[i];
	}
}
var admin = false;


if (command === 'admin'){
	admin = true;
}

if (admin){
	//pull info from log.txt and console.log each entry
	// console.log(fs.readFileSync('log.txt', 'utf8'));
	var admin = new WeatherAdmin();
	admin.getData();
}
else {
	var u = new User(username, location);
	u.getWeather();
}


//npm package chalk
//format weather display so it looks nice