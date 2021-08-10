const print = console.log;

// comparing top height man

const men = [
	{name: "Dildar", age: 60, height: 5.2},
	{name: "Riaz", age: 40, height: 5.6},
	{name: "Rubel", age: 45, height: 5.5},
	{name: "Hosen", age: 23, height: 7.8},
	{name: "Shakib", age: 32, height: 5.1}
];

function compareHeight(men) {
	let tallest = men[0];

	for (let man of men){
		if (man.height > tallest.height){
			tallest = man;
		}
	}

	return tallest;
}

print(compareHeight(men));