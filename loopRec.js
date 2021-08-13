const print = console.log;

// recursion using for loop

// normal loop for sum value--


let sum = 0;

for(let i = 6; i >= 1; i--){
	sum += i;
}

print(sum);


// using recursion

function rSum(i) {
	if (i == 1) {
		return 1;
	}	

	return rSum(i-1) + i;
}

print(rSum(6));


// explanation

// recursion is like a loop. its calling the function over and over

//=== first i = 6 =>>
// rSum(i-1) + i =>> rSum(6 - 1) + 6;
// now, i = 5 =>> (the function is calling again) =>>
// rSum(i-1) + i =>> rSum(5 - 1) + 5 +6;
// i = 4 =>>
// rSum(i-1) + i =>> rSum(4 - 1) + 4 + 5 + 6;
// i = 3 =>>
// rSum(i-1) + i =>> rSum(3 - 1) + 3 + 4 + 5 + 6;
// i = 2 =>>
// rSum(i-1) + i =>> rSum(2 - 1) + 2 + 3 + 4 + 5 + 6;
// i = 1 (which is fulfill the conditon, so the function will stop now)
// rSum(i-1) + i =>> 1 + 2 + 3 + 4 + 5 + 6 = 21;



