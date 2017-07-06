var name, title, age, fave, p;
var a = process.argv;
var inquirer = require("inquirer");



// name = a[2];
// title = a[3];
// age = a[4];
// fave = a[5];


class Programmer {
	constructor(name, title, age, fave) {
		this.name = name;
		this.title = title;
		this.age = age;
		this.fave = fave;
	}
	printit () {
		console.log(this.name);
		console.log(this.title);
		console.log(this.age);
		console.log(this.fave);
	}
}

inquirer.prompt([
	{
	    type: "input",
	    message: "What is your name?",
	    name: "name"
  	},	
  	{
	    type: "input",
	    message: "What is your title?",
	    name: "title"
  	},	
  	{
	    type: "input",
	    message: "What is your age?",
	    name: "age"
  	},	
  	{
	    type: "input",
	    message: "What is your favorite language?",
	    name: "fave"
  	},
  	{
	    type: "confirm",
	    message: "Confirm",
	    name: "confirm",
	    default: true
  	}

]).then(function(user){
	if (user.confirm){
		p = new Programmer(user.name, user.title, user.age, user.fave);
		// console.log(p);
		p.printit();
		// console.log(name)
	}

})

