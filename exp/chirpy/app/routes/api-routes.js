// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Express and MySQL code should go here.



// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get('/api/', function(req, res) {
  	  connection.query("SELECT * FROM chirps;", function(err, data) {
    	res.json(data);
  		});
	});

  app.post('/api/', function(req, res) {
  	  //insert req.body
  	  connection.query("INSERT INTO chirpy (author, chirp) VALUES (?, ?)",[req.body.author,req.body.chirp], function(err, data) {
    	// res.json(data);
  		});
	});

  // Add a chirp


};
