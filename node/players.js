var name, position, starter, defense, offense, p;
var a = process.argv;
var inquirer = require("inquirer");

var count = 0;


// name = a[2];
// title = a[3];
// age = a[4];
// fave = a[5];


class Player {
	constructor(name, position, starter, offense, defense) {
		this.name = name;
		this.position = position;
		this.starter = starter;
		this.offense = offense;
		this.defense = defense;
	}
	goodGame () {
		if (getRandomIntInclusive(0,1) === 1){
			this.offense += 1;
		}
		else {
			this.defense += 1;
		}
	}
	badGame () {
		if (getRandomIntInclusive(0,1) === 1) {
			this.offense -= 1;			
		}
		else {
			this.defense -=1;
		}
	}
	isStarter () {
		if (this.starter) {
			return 'Starter';
		}
		else return 'Sub';
	}
	printStats () {
		console.log(this.name);
		console.log(this.position);
		console.log(this.offense);
		console.log(this.defense);
		console.log(this.isStarter());
	}
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var starters = [];
var subs = [];




var inputs = function () {
	if (count < 8) { 
		inquirer.prompt([	
			{
			    type: "input",
			    message: "What is your name?",
			    name: "name"
		  	},	
		  	{
			    type: "input",
			    message: "What is your position?",
			    name: "position"
		  	},
		  	{
			    type: "input",
			    message: "What is your position?",
			    name: "position"
		  	},
		  	{
			    type: "input",
			    message: "What is your defensive ability?",
			    name: "defense"
		  	},
		  	{
			    type: "input",
			    message: "What is your offensive ability?",
			    name: "offense"
		  	},
		  	{
			    type: "confirm",
			    message: "Starter?",
			    name: "starter",
			    default: true
		  	}
	]).then(function(user){
		if (!(user.offense >= 1 && user.offense <= 10)) {
			user.offense = getRandomIntInclusive(1,10);
			console.log('Offense entry invalid, random offense generated ' + user.offense);
		}
		if (!(user.defense >= 1 && user.defense <= 10)) {
			user.defense = getRandomIntInclusive(1,10);
			console.log('Defense entry invalid, random defense generated ' + user.defense);
		}
		p = new Player(user.name, user.position, user.starter, user.offense, user.defense);

		
		if (starters.length < 5 && user.starter){
			starters.push(p);
		}
		else if (starters.length >= 5 && user.starter){
			console.log('Sorry bud, you\'re a benchwarmer today');
			p = new Player (user.name, user.position, false);
			subs.push(p);
		}
		else if (subs.length < 3 && !user.starter) {
			subs.push(p);
		}
		else if (subs.length >= 3 && !user.starter){
			console.log('Congrats, you almost played yaself! You\'re a starter today');
			p = new Player (user.name, user.position, false);
			starters.push(p);
		}
		count++;
		console.log('Starters length: ' + starters.length);
		console.log('Subs length: ' + subs.length);

		inputs();
	});
  }
}

inputs();

//log SQUAD
console.log('Starters length: ' + starters.length);
console.log('Starters');
for (i in starters) {
	console.log(starters[i]);
}
console.log('Subs length: ' + subs.length);
console.log('Subs');
for (i in subs) {
	console.log(subs[i]);
}


var count2 = 0;
var roll1, roll2;
var score = 0;

function teamO () {
	var o = 0;
	for (i in starters){
		o += starters[i].offense;
	}
	return o;
}

function teamD () {
	var d = 0;
	for (i in starters){
		d += starters[i].defense;
	}
	return d;
}

var playGame = function () {
	//loops 10x
	//random between 1-50 x 2
	for (i = 0; i < 10; i++){
		roll1 = getRandomIntInclusive(1,50);
		roll2 = getRandomIntInclusive(1,50);
		//teamD, teamO
		var d = teamD();
		var o = teamO();
		if (roll1 < o){
			score += 1;
		}
		if (roll2 > d){
			score -= 1;
		}
		subOut();
	}
}

var starterOut;
var subIn;
var more = true;
var subins = [];
var subouts = [];

var subOut = function () {
	if (more){
		inquirer.prompt([	
		  {
		    type: "list",
		    message: "Who are you subbing out?",
		    choices: starters,
		    name: "starterOut"
		  },
		  {
		    type: "list",
		    message: "Who are you subbing in?",
		    choices: subs,
		    name: "subIn"
		  },
		  {
		    type: "confirm",
		    message: "Sub more?",
		    name: "confirm",
		    default: false
	  	  }
	  	 ]).then(function(user){
	  	 	subouts.push(user.starterOut);
	  	 	subins.push(user.subIn);
	  	 	console.log(user.subIn);
	  	 	console.log(user.starterOut);
	  	 	more = false;
	  	 	if (user.confirm) {
	  	 		more = true;
	  	 	}
	  	 	subOut();
	  	 });

	}
}




playGame();