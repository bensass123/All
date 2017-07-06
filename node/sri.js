console.log(process.argv[2] === process.argv[3]);
console.log(parseFloat(process.argv[2]));
console.log(parseFloat(process.argv[3]));


console.log('-------------');


for (i in process.argv){
	console.log(process.argv[i]);
}
