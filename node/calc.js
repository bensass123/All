


// var op = process.argv[2];

// var one = parseFloat(process.argv[3]);

// var two = parseFloat(process.argv[4]);

// var isThree;

// if (process.argv[5]){
// 	isThree = true;
// }
// else{
// 	isThree = false;
// }

// var three = parseFloat(process.argv[5]);


// if (op === 'add') {
// 	if (!isThree){
// 		three = 0;
// 	}
// 	console.log(one + two + three);
// }

// if (op === 'multiply') {
// 	if (!isThree){
// 		three = 1;
// 	}
// 	console.log(one * two * three);
// }

// if (op === 'subtract') {
// 	if (!isThree){
// 		three = 0;
// 	}
// 	console.log(one - two - three);
// }

// if (op === 'divide') {
// 	if (!isThree){
// 		three = 1;
// 	}
// 	console.log(one / two / three);
// }

// if (op === 'remainder') {
// 	if (isThree){
// 		console.log('Can only use two numbers for this function. Calculating remainder for first two inputs.');
// 	}
// 	console.log(one % two);
// }

// if (op === 'exp') {
// 	if (isThree){
// 		console.log('Can only use two numbers for this function. Calculating exp for first two inputs.');
// 	}
// 	console.log(Math.pow(one, two));
// }


// var sum = 0;
// var num = parseFloat(process.argv[2]);

// for (i=1; i <= num; i++){
// 	if (i % 6 === 0){
// 		sum += i;
// 		console.log(i + ' is a multiple of six, sum currently at ' + sum);
// 	}
// }

// console.log('The answer is ' + sum);

////////////////////////////////////////////////////////////////////////////////////



var sum = 0;

if (!(process.argv[2]) || !(process.argv[3])) {
	num = 10;
	num2 = 5;
}

console.log(typeof process.argv[3]);

var num = parseFloat(process.argv[2]);
var num2 = parseFloat(process.argv[3]);

for (i=1; i <= num; i++){
	if (i % num2 === 0){
		sum += i;
		console.log(i + ' is a multiple of ' + num2 + '. Sum currently at ' + sum);
	}
}

console.log('The answer is ' + sum);





