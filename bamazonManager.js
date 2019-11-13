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
	displayMenu();
});

function displayMenu() {
	inquirer
		.prompt({
			name: 'option',
			type: 'list',
			message: 'Hello, Manager. What would you like to do today?',
			choices: [ 'VIEW PRODUCTS FOR SALE', 'VIEW LOW INVENTORY', 'ADD TO INVENTORY', 'ADD NEW PRODUCT', 'EXIT' ]
		})
		.then(function(answer) {
			// based on their answer, either call the bid or the post functions
			if (answer.option === 'VIEW PRODUCTS FOR SALE') {
				viewProducts();
			} else if (answer.option === 'VIEW LOW INVENTORY') {
				viewLowInventory();
			} else if (answer.option === 'ADD TO INVENTORY') {
				addToInventory();
			} else if (answer.option === 'ADD NEW PRODUCT') {
				addNewProduct();
			} else {
				connection.end();
			}
		});
}

function viewProducts() {
	console.log(`henlo`);
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
		displayMenu();
	});
}

function viewLowInventory() {
	console.log(`henlo`);
	// connection query for stock qty
	// for loop
	// if stock qty is less than 50 table.push item (follow template from function view products)
	// console log my table.toString()
	// call display Menu
}
function addNewProduct() {
	console.log(`henlo`);
	// inquier prompt to match the info I need to add a new item to my database
	// push those anwsers up into my database using mysql connection
}

function addToInventory() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'choice',
				message: 'Which item would you like to add stock to?'
			},
			{
				type: 'input',
				name: 'qty',
				message: 'How much stock would you like to add?'
			}
		])
		.then(function(response) {
			var qty = [];

			qty.push(response.qty);
			qty.push(response.choice);
			addNewQty(qty);
		});
}

function addNewQty(qty) {
	var currentQty;
	connection.query('select * from products where item_id=(?)', [ qty[1] ], function(err, res) {
		currentQty = res[0].stock_quantity;
		console.log(currentQty);
		console.log(qty[0]);
		currentQty = currentQty += qty[0].parseInt();
		qty[0] = currentQty;
		console.log(qty[0]);
		updateQty(qty);
		displayMenu();
	});
}

function updateQty(qty) {
	console.log(`Update was successful!`);
	connection.query('update products set ? where ?', [
		{
			stock_quantity: qty[0]
		},
		{
			item_id: qty[1]
		}
	]);
	displayMenu();
}
