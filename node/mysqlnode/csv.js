var mysql = require('mysql');
var fs = require('fs');
var inquirer = require('inquirer');


// A query which returns all data for songs sung by a specific artist
// A query which returns all artists who appear within the top 5000 more than once
// A query which returns all data contained within a specific range
// A query which searches for a specific song in the top 5000 and returns the data for it

 var connection = mysql.createConnection({
 	host: 'localhost',
 	port:'3306',
 	user: 'root',
 	password: 'root',
 	database: 'songs'
 });



function displayBySong(s) {
	
	s = "'" + s + "'";


	connection.query(`SELECT * FROM top5000 WHERE song = ${s}`, function (err, results, fields) {
		if (err) throw err;
		console.log('------------------------------------------');
		console.log('Song: ' + s);
		console.log('------------------------------------------\r\n');

		  // error will be an Error if one occurred during the query 
		  // results will contain the results of the query 
		for (i in results){
		  	console.log(`Song position:    ${results[i].position}`);
		  	console.log(`Song artist:      ${results[i].artist}`);
		  	console.log(`Song name:        ${results[i].song}\r\n`);
		}
	  // fields will contain information about the returned results fields (if any) 
	});
}

function displayByArtist(a) {

	a = "'" + a + "'";


	connection.query(`SELECT * FROM top5000 WHERE artist = ${a}`, function (err, results, fields) {
		if (err) throw err;
		console.log('\r\n------------------------------------------');
		console.log('Artist: ' + a);
		console.log('------------------------------------------\r\n');
		  // error will be an Error if one occurred during the query 
		  // results will contain the results of the query 
		for (i in results){
		  	console.log(`Song position:    ${results[i].position}`);
		  	console.log(`Song artist:      ${results[i].artist}`);
		  	console.log(`Song name:        ${results[i].song}\r\n`);
		}
	  // fields will contain information about the returned results fields (if any) 
	});
}
function multiples() {
	connection.query('SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) >= 2', function (err, results, fields) {
		if (err) throw err;
		console.log('\r\n------------------------------------------');
		console.log('Artists with multiple top hits:');
		console.log('------------------------------------------\r\n');
		  // error will be an Error if one occurred during the query 
		  // results will contain the results of the query 
		for (i in results){
		  	console.log(`Song artist:      ${results[i].artist}`);
		  	console.log('--------------------------------------------------');
		}
	  // fields will contain information about the returned results fields (if any) 
	});
}

// SELECT artist 
// FROM top5000
// GROUP BY artist
// HAVING COUNT(*) >= 2;


//song appears more than once
//query within a range

// inquirer.prompt([
//   {
//     type: "checkbox",
//     message: "What would you like to do with song data?",
//     choices: ['Search by song name', 'Search by artist', 'Display all artists with multiple hits', 'Display all data within range'],
//     name: 'choice'
//   },

//   {
//     type: "confirm",
//     message: "Confirm",
//     name: "confirm",
//     default: true
//   }
// ]).then(function(user){

// 	if (user.confirm) {
// 		if (user.choice.length > 0){
// 			recurse(user.choice);
// 		}
// 	}

// });



// function recurse(a) {
// 	var a = 
// 	switch (user.choice[i]) {
// 				case 'Search by song name':
// 					inquirer.prompt([
// 	  					{
// 	  						type: 'input',
// 	  						message: 'Please enter song name',
// 	  						name: 'songname'
// 	  					}]).then(function(user2){
// 	  						displayBySong(user2.songname);
// 	  					});	
// 					break;
// 				case 'Search by artist':
// 					inquirer.prompt([
// 	  					{
// 	  						type: 'input',
// 	  						message: 'Please enter artist name',
// 	  						name: 'artistname'
// 	  					}]).then(function(user2){
// 	  						displayByArtist(user2.artistname);
// 	  					});	
// 					break;
// }





// 		for (i in user.choice) {
// 			switch (user.choice[i]) {
// 				case 'Search by song name':
// 					inquirer.prompt([
// 	  					{
// 	  						type: 'input',
// 	  						message: 'Please enter song name',
// 	  						name: 'songname'
// 	  					}]).then(function(user2){
// 	  						displayBySong(user2.songname);
// 	  					});	
// 					break;
// 				case 'Search by artist':
// 					inquirer.prompt([
// 	  					{
// 	  						type: 'input',
// 	  						message: 'Please enter artist name',
// 	  						name: 'artistname'
// 	  					}]).then(function(user2){
// 	  						displayByArtist(user2.artistname);
// 	  					});	
// 					break;
// 			}
// 		}
// 	}
// });


function topOnRelease(a) {
	a = "'" + a + "'";


	connection.query(`SELECT * FROM top5000 INNER JOIN albums ON (albums.artist = top5000.artist AND albums.year = top5000.year) WHERE top5000.artist = ${a}`, function (err, results, fields) {
		if (err) throw err;
		console.log('\r\n------------------------------------------');
		console.log('Artist: ' + a);
		console.log('------------------------------------------\r\n');
		  // error will be an Error if one occurred during the query 
		  // results will contain the results of the query 
		for (i in results){
		  	console.log(`Song position:    ${results[i].position}`);
		  	console.log(`Song artist:      ${results[i].artist}`);
		  	console.log(`Song name:        ${results[i].song}\r\n`);
		}
	  // fields will contain information about the returned results fields (if any) 
	});

}

topOnRelease('madonna');





// displayBySong('dream on');


// displayByArtist('chubby checker');

// multiples();

// connection.end();


