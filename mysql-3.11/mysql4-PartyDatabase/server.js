var orm = require("./config/orm.js");

// Create an orm.js file, and make an ORM that will do the following:
// Find all parties, ordering them by party cost
// Find partie15.s by the name of the party
// Find the client with the most parties
// BONUS: create a function within your ORM that will let the user add more clients and
// parties to the database.

orm.findAllOrderByCost('party_data', 'party_cost');