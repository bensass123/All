// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a TruckSchema with the Schema class
var TruckSchema = new Schema({
  // title: a string
  truckName: {
    type: String
  },
  // body: a string
  comment: {
    type: String
  },
  status: {
  	type: Boolean
  }
});

// Make a Truck model with the TruckSchema
var Truck = mongoose.model("Truck", TruckSchema);

// Export the Truck model
module.exports = Truck;
