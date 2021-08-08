"use strict";
const print = console.log;


function smallestNum(num1, num2, num3) {
	if (num1 < num2 && num1 < num3) {
		print("smallest is : ", num1);
	}
	else if(num2 < num1 && num2 < num3){
		print("smallest is : ", num2);
	}
	else{
		print("smallest is : ", num3);
	}
}

// smallestNum(200,67,8);

// === smallest number from an array

// let array = [4,56,77,22];

function smallestNumArray(array) {
	let small = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] < small) {
			small = array[i];
		}
	}
	return small
}

print("smallest is:",smallestNumArray([2,11,545,6,-2]));

// =====