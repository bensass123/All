/* write a function that takes as a parameter a number (rows)
 * and log to the console a triangle made of stars & spaces
 */

// triangle(3);

//   *
//  * *
// * * *

var x = process.argv[2];


function triangle(x) {
	var array = [];
	for (i = 0; i < x; i++){
		var row = '';
		// x-i-1 = spaces before first asterisk
		var y = x-i-1;
		for (z = 0; z < y; z++){
			row += '      ';
		}
		for (k = 0; k < i+1; k++){
			row += '¯\\_(o-o)_/¯ ';
					
		}
		array.push(row);

	}
	for (j in array){
		console.log(array[j]);
	}
}

triangle(x);
