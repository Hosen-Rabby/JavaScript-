const print = console.log;


// factorial using for loop

let fact = 1;
function factorial(num) {
	for(let i = num; i > 1; i--){
		fact = fact * i;
	}
	return fact;
}

print(factorial(8));


// factrial using recursion

let rFact = 1;

function rFactorial(rNum) {
	if (rNum == 1) {
		return 1;
	}

	return rFactorial(rNum - 1) * rNum;
}

print(rFactorial(8));