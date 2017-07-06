var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  res.render("dog", animals[0]);

});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.

  let pets = [];
  for (i in animals){
    if (animals[i].pet) {
      pets.push(animals[i]);
    }
  }
  console.log('Pets: ' + pets.length);
  res.render("index", {animals:pets});
});

app.get("/all-non-pets", function(req, res) {
  let nonpets = [];
  for (i in animals){
    if (!animals[i].pet) {
      nonpets.push(animals[i]);
    }
  }
  console.log('Nonpets: ' + nonpets.length);
  res.render("index", {animals:nonpets});
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.

});

app.listen(port);

console.log('Port: ' + port);
