// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var inputs = [];


for (i = 2; i < process.argv.length; i++){
	inputs.push(process.argv[i]);
}

console.log('Unsorted');
console.log(inputs);

console.log('-------');
console.log('Sorted');

inputs.sort(function(a, b) {
  return a - b;
});

console.log(inputs);


