"use strict";
const print = console.log;

// === remove duplicates from an array

let names = ["Ali","Abu Bokor","Belal","Ali","Belal","Hanif"];
	// print(l);

function removeDuplicates(names) {
	let unique = [];
	
	for (let dupli of names){
		// print(dupli);
		if (unique.indexOf(dupli) == -1) {
			unique.push(dupli);
		}
	}
	return unique;
}

print(removeDuplicates(names));


// ===