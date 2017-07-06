// tamagotchi.js

function DigitalPal () {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
}

DigitalPal.prototype.feed = function() {
	//hungry false, sleepy true, 
	if (this.hungry) {
		console.log('That was yummy!');
		this.hungry = false;
		this.sleepy = true;
	}
	else {
		console.log('No thanks! I\'m Full');
	}
}

DigitalPal.prototype.sleep = function() {
	if (this.sleepy) {
		console.log('Zzzz');
		this.sleepy = false;
		this.bored = true;
		this.increaseAge();
	}
	else {
		console.log('No way, I\'m not tired.');
	}
}

DigitalPal.prototype.play = function() {
	if (this.bored) {
		console.log('Yay! Let\'s play!');
		this.bored = false;
		this.hungry = true;
	}
	else {
		console.log('Not right now. Later?');
	}
}

DigitalPal.prototype.increaseAge = function() {
	this.age += 1;
	console.log('Happy Birthday to me! I am ' + age + ' old!');
}

function Dog(){
	DigitalPal.call(this);
	this.outside = false;
}

Dog.prototype = Object.create(DigitalPal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
	console.log('Woof! Woof!');
}

Dog.prototype.goOutside = function(){
	if (this.outside) {
		console.log('We\'re already outside.');
	}
	else {
		console.log('Yay! I love the outdoors!');
	}
}

Dog.prototype.goInside = function(){
	if (this.outside) {
		console.log('Do we have to. Fine...');
		this.outside = false;
	}
	else {
		console.log('I\'m already inside...');
	}
}

var d = new Dog();

var dp = new DigitalPal();

d.feed();
// dp.bark();