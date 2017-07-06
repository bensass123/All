// abc
var fs = require("fs");
var weather = require('weather-js');

var User = function (name, location) {
	this.name = name;
	this.location = location;
	this.date = Date.now();

	this.getWeather = function() {
		fs.appendFileSync("log.txt", 'User: ' + this.name + ' ' + this.location + ' Date: ' + this.date + '\r\n');
		weather.find({search: location, degreeType: 'F'}, function(err, result) {
	  		if(err) {
	  			console.log(err);
	  		}
	 		console.log(JSON.stringify(result, null, '~x~x'));
		});
	}
}

module.exports = User;