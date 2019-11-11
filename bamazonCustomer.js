var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table3');

var connection = mysql.createConnection({
	host: 'localhost',

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'root',
	database: 'bamazon'
});

// check if connection works
connection.connect(function(err) {
	if (err) throw err;
	displayDB();
});

// function to display DB
function displayDB() {
	// var itemsArr = [];
	connection.query('select * from products', function(err, res) {
		var table = new Table({ chars: { mid: '', 'left-mid': '', 'mid-mid': '', 'mid-mid': '', 'right-mid': '' } });
		table.push([ 'Item ID', 'Product', 'Department', 'Price', 'Stock' ]);
		console.log(table.toString());
		for (var i = 0; i < res.length; i++) {
			// itemsArr.push(res[i].item_id);
			table.push([
				res[i].item_id,
				res[i].product_name,
				res[i].department_name,
				res[i].price,
				res[i].stock_quantity
			]);
		}
		console.log(table.toString());
		Buy();
	});
}

function Buy() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'choice',
				message: 'Which item would you like to buy?'
			},
			{
				type: 'input',
				name: 'qty',
				message: 'How many would you like to buy?'
			}
		])
		.then(function(response) {
			var qty = [];

			qty.push(response.qty);
			qty.push(response.choice);
			checkQty(qty);
		});
}

function checkQty(qty) {
	var currentQty;
	connection.query('select * from products where item_id=(?)', [ qty[1] ], function(err, res) {
		currentQty = res[0].stock_quantity;
		console.log(currentQty);
		if (qty[0] <= currentQty) {
			currentQty = currentQty - qty[0];
			console.log(currentQty);
			qty[0] = currentQty;
			updateQty(qty);
		} else if (qty[0] > currentQty) {
			console.log(
				`Sorry there are only ${currentQty} in stock. Please order another amount or purchase another item.`
			);
			Buy();
		}
	});
}

function updateQty(qty) {
	console.log(`Your order was successful, Babe!`);
	connection.query('update products set ? where ?', [
		{
			stock_quantity: qty[0]
		},
		{
			item_id: qty[1]
		}
	]);
	displayDB();
}
