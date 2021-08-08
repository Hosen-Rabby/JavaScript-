const print = console.log;

// string reverse

let myName = "Md Hossain Rabbi";

function reverseString(myName) {
	let reverse = '';

	for (let letter of myName){
		// print(letter);

		reverse = letter + reverse;
	}

	return reverse;
}

print(reverseString(myName));
