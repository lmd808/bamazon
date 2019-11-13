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
