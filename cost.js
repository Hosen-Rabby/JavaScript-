const print = console.log;



let shoppingItem = [
	{name:"laptop", price : 54000},
	{name:"bag", price : 4000},
	{name:"watch", price : 1200},
	{name:"belt", price : 2000}
]


print(shoppingItem.price);



function shoppingCost() {
	let totalCost = 0;

	for (let items of shoppingItem){
		// print(items);

		totalCost = totalCost + shoppingItem.price;
		print(shoppingItem.price);
	}

	print(shoppingItem.price);

	return totalCost;


}
print(shoppingCost(shoppingItem));