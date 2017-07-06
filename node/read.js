// NPM Package for reading and writing files
var fs = require("fs");


fs.readFile("best_things_ever.txt", "utf8", function(err,data) {
		if (err) {
			console.log(err);
		}

		var things = data.split(', ');
		for (i in things){
			console.log(things[i]);
		}

	});