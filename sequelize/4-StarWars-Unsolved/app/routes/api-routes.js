// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Starwars = require("../models/Starwars.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

    }

    // Otherwise...
    else {
      console.log('find all');
      // Otherwise display the data for all of the characters.
      Starwars.findAll({}).then(function(results) {
      // results are available to us inside the .then
        return res.json(results);
      });
    }
  });

}

//   // If a user sends data to add a new character...
//   app.post("/api/new", function(req, res) {

//     // Take the request...
//     var character = req.body;

//     // Then send it to the ORM to "save" into the DB.
//     orm.addCharacter(character, function(data) {
//       console.log(data);
//     });

//   });
// };


// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================



// // Routes
// // =============================================================
// module.exports = function(app) {

//   // Get all chirps
//   app.get("/api/all", function(req, res) {

//     // Finding all Chirps, and then returning them to the user as JSON.
//     // Sequelize queries are aynchronous, which helps with percieved speed.
//     // If we want something to be guaranteed to happen after the query, we'll use
//     // the .then function
//     Chirp.findAll({}).then(function(results) {
//       // results are available to us inside the .then
//       res.json(results);
//     });

//   });

//   // Add a chirp
//   app.post("/api/new", function(req, res) {

//     console.log("Chirp Data:");
//     console.log(req.body);

//     Chirp.create({
//       author: req.body.author,
//       body: req.body.body,
//       created_at: req.body.created_at
//     }).then(function(results) {
//       // `results` here would be the newly created chirp
//       res.end();
//     });

//   });

// };