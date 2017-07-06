// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================

var inquirer = require("inquirer");

var uHealth = 60;
var zHealth = 15;
var legs = 2;
var arms = 2;
var zRoll;
var randoDamage;



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function go(){
	inquirer.prompt([
	  {
	    type: "list",
	    message: "Guess a number 1-5",
	    choices: ['1','2', '3', '4', '5'],
	    name: "choice"
	  }

	]).then(function(user){
		

		if (uHealth > 0 && zHealth > 0){
			doit();
		}
	});
}

function doit() {
	zRoll = getRandomIntInclusive(1, 5);
	randoDamage = getRandomIntInclusive(1, 5);

	if (user.choice === zRoll && arms > 0) {
	    zHealth -= randoDamage;
	    arms -= 1;
	    console.log('You chop off one of the zombies arms.');
	} else if (user.choice === zRoll && legs > 0) {
	    zHealth -= randoDamage;
	    arms -= 1;
	    console.log('You chop off one of the zombies legs.');
	} else if (user.choice === zRoll) {
	    console.log('You slash at the quadriplegic zombie with your Katana.');
	} else if (user.choice != zRoll) {
	    uHealth -= randoDamage;
	    console.log('The Zombie slashes at your midsection, your health is down to ' + uHealth);
	}
	console.log('User health: ' + uHealth);
	console.log('Zombie health: ' + zHealth);
	console.log('Zombie has ' + legs + ' legs left and ' + arms + ' arms left');

	if ((uHealth > 0) && (zHealth > 0)){
		console.log('gamegoing');
		go();
		
	}
}

if (uHealth <= 0) {
	console.log('YOU LOSE! ZOMBIE EATS YOUR BRAINS AS YOUR FAMILY WATCHES HELPLESSLY, THEY WILL BE NEXT.');
	console.log('THE ZOMBIES CLOSE IN ON YOUR LOVED ONES AS YOU ARE RIPPED TO PIECES. YOU LET OUT A DEATH FART.');
}
else if (zHealth <= 0){
	console.log('YOU WIN!!!!! DON\'T GET COCKY, THERE ARE FKN ZOMBIES EVERYWHERE');
}

if (uHealth > 0 && zHealth > 0) {
	go();
}
















// var inquirer = require("inquirer");


// inquirer.prompt([

//   {
//     type: "password",
//     message: "Set your password",
//     name: "password"
//   },

//   {
//     type: "input",
//     message: "What is your favorite letter?",
//     name: "letter",
//     default: "X"
//   },	

//   {
//     type: "list",
//     message: "Who is your favorite Spice Girl?",
//     choices: ['Sporty','Scary', 'Ginger', 'Baby'],
//     name: "spicegirl"
//   },

//   {
//     type: "checkbox",
//     message: "What do you like on your BLT",
//     choices: ['Bacon','Lettuce', 'Tomato', 'Mayo', 'Mustard', 'Feta Cheese', 'Olives', 'Meth'],
//     name: 'sandwichtoppings'
//   },

//   {
//     type: "confirm",
//     message: "Confirm",
//     name: "confirm",
//     default: true
//   }



// ]).then(function(user){

// 	if (user.confirm) {
// 		console.log('Way to go big guy!');
// 		for (i in user.sandwichtoppings){
// 			if (user.sandwichtoppings[i] === 'Meth') {
// 				console.log('drugs are bad mmmkay');
// 			}
// 		}
// 		if (user.spicegirl === 'Sporty'){
// 			console.log('No I\'m sorry Sporty Spice is the wrong answer. Opinion Error: aex4345aA')
// 		}
// 		console.log(user.sandwichtoppings);
// 	}
// });
