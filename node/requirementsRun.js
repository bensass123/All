var r = require('./requirements.js');
var bandArray = [];

var query = process.argv[2].toLowerCase();



var genreArray = Object.keys(r.bands);

for (i in r.bands) {
	bandArray.push(r.bands[i]);
}


if (query){
	for (i in genreArray){
		if (genreArray[i] === query){
			console.log(bandArray[i]);
		}
		
	}
}
else {
	for (i in genreArray){
		console.log('A ' + genreArray[i] + ' band is ' + bandArray[i] + '.');
	}
}

