"use strict";

const ps = require("prompt-sync"); // loads function
const input = ps();


let ansInch = 0;

function inchTofeet(inch) {
	let feet = Math.trunc(inch / 12);
	ansInch = inch % 12;
	console.log(ansInch);
	return feet;
}

console.log("you are",inchTofeet(442), "feet", ansInch , "inchs");
