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


smallestNum(200,67,8);