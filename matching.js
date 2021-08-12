const print = console.log;

// === matching by searching..



// create products..

let products = [
	{name: 'Table', price: 41000},
	{name: 'Tablet', price: 16000},
	{name: 'Samsung A21s phone', price: 21000},
	{name: 'Xiaommi S2 phone', price: 8000},
	{name: 'Zelta A100 phone', price: 8200},
	{name: 'Samsung S8 phone', price: 33000},
	{name: 'iPhone 5 phone', price: 11000},
	{name: 'Zelta a20 Phone', price: 7000},
	{name: 'iPhone X phone', price: 7000},
	{name: 'Walton primo phone', price: 7000},
	{name: 'Walton laptop', price: 7020},
	{name: 'HP laptop', price: 7200},
	{name: 'Dell laptop', price: 99000},
	{name: 'Hp pavillon laptop', price: 17000},
	{name: 'Xiaommi 5s phone', price: 9000}
]

function matching(products, searched) {

	let match = [];
	
	for (let item of products){
	// print(item);
		if (item.name.indexOf(searched) != -1) {
			match.push(item);
		}	
	}
	return match;
}

print(matching(products, 'phone'));