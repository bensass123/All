var mysql = require('mysql');

 var connection = mysql.createConnection({
 	host: 'localhost',
 	port:'3306',
 	user: 'root',
 	password: 'root',
 	database: 'musicdb'


 });

// connection.connect(function(err)  {
// 	if (err) throw err;
// 	console.log('connected as id ' + this.threadId);

// 	}.bind(connection));

// connection.query('SELECT * FROM songs', function(err,res)  {
// 	if (err) throw err;
// 	console.log(res);
// });

function displayByGenre(g) {
	g = "'" + g + "'";


	connection.query(`SELECT * FROM songs WHERE genre = ${g}`, function (err, results, fields) {
		if (err) throw err;
	  // error will be an Error if one occurred during the query 
	  // results will contain the results of the query 
	  for (i in results){
	  	console.log(`Song title:   ${results[i].title}`);
	  	console.log(`Song artist:  ${results[i].artist}`);
	  	console.log(`Song genre:   ${results[i].genre}\r\n`);
	  }
	  // fields will contain information about the returned results fields (if any) 
	});
}

displayByGenre('rock');