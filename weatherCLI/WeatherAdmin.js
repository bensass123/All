var fs = require("fs");

var WeatherAdmin = function () {
	this.getData = function () {
		console.log(fs.readFileSync('log.txt', 'utf8'));
	}
}

module.exports = WeatherAdmin;