"use strict";
const print = console.log;

function largestOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		print(num1);
	}
	else if(num2 > num1 && num2 > num3){
		print(num2);
	}
	else{
		print(num3);
	}
}

// largestOfThree(22,565,77);

// ===== largest of an array

function largestOfArray(array) {
	let large = array[0];
	for (var i = 0; i < array.length; i++) {
		let picked = array[i];
		if (large < picked) {
			large = picked;
		}
	}
	return large;
}

let array = [-72,-99,-88];
let a = array;
print("Largest number is:", largestOfArray(a));

// =====