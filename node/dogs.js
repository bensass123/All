// *•* Make a dogs object with three keys...
//  *•* First key called "raining" with a value of true
//  *•* Second key called "noise" with a value of "Woof!"
//  *•* Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs
// *•* Make a cats object with three keys...
//  *•* First key called "raining" with a value of false
//  *•* Second key called "noise" with a value of "Meow!"
//  *•* Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats
// *•* Make the dog bark
// *•* Make the cat meow
// *•* BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! 
// 			MASS HYSTERIA!" if both of the raining keys are equal to true.
// *•* BONUS: Look to see if you can find any means to simplify your code further and further



var dogs = {
	raining: true,
	noise: 'Woof!',
	makeNoise: function() {
		if (this.raining){
			return this.noise;
		}
		else return '';

	}
}

var cats = {
	raining: false,
	noise: 'Meow!',
	makeNoise: function() {
		if (this.raining){
			return this.noise;
		}
		else {
			return '';
		}
	}
}


// make cat noise
dogs.raining = false;
console.log(cats.makeNoise());

//make dog noise
console.log(dogs.makeNoise());



function hysteria(cats, dogs) {
	if (cats.raining && dogs.raining) {
		console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
	}
}

hysteria(cats,  dogs);


