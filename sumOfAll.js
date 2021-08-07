// ===
"use strict"
const print = console.log;
// ====



function sumOfArray(array) {

	let sum = 0;
	for (var i = 0; i < array.length; i++) {
		let number = array[i];
		// print(number);
		sum = sum + number;	
	}
	// print(sum);
	return sum;
}

// sumOfArray([2,5,557,12,7]);
print(sumOfArray([21,65,7,76]))

print(sumOfArray([121,4,67,89,21,97,4,12]))