var connection = require("./connection.js");

// Create an orm.js file, and make an ORM that will do the following:
// Find all parties, ordering them by party cost
// Find partie15.s by the name of the party
// Find the client with the most parties
// BONUS: create a function within your ORM that will let the user add more clients and
// parties to the database.

var orm = {
  findAllOrderByCost: function(table, order) {
  	console.log('begin');
    var queryString = "select * from ?? order by ?? DESC;";
    connection.query(queryString, [table, order], function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log('end');
    });
  }
}


module.exports = orm;

