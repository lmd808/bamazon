# bamazon
Better than Amazon
## Problem
Bamazon allows customers and managers(almost there) to interact with a store. Customers can search and buy products which are saved in a database. If the stock is too low to fullfil their order then the order they will recieve an alert and will not be able to order said item. 

Manager will be able to see all products (done), add inventory(done), view low stock(under construction), and add products(under construction). 

## Local Usage
* Clone this repo to your computer
* In the project directory, run `$npm install`
* Edit `PORT` and `DB` configuration if necessary/desired 
* Run `npm start`

## Technologies: 
* [Javascript](https://www.javascript.com/) - The scripting language used to manipulate the DOM. 
* [Node](https://nodejs.org/en) - Javascript run-time environment (used to execute server side code.)
* [SQL](https://developer.mozilla.org/en-US/docs/Glossary/SQL) - SQL is a standard language for storing, manipulating and retrieving data in databases.
* [Inquirer.js](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces.
* [Cli-Table3](https://www.npmjs.com/package/cli-table3) - This utility allows you to render unicode-aided tables on the command line from your node.js scripts.

# Structure

## Customer
When the program is called this will load a table of products. 
The customer will then be prompted to select an item to purchase. 
After the customer will be prompted to select the stock qty they want. 

If they want more than what is in stock they will be prompted to start over. 
## Manager 
WHen the program is called the bamazonManager file will prompted the user with 5 choices: ('VIEW PRODUCTS FOR SALE', 'VIEW LOW INVENTORY', 'ADD TO INVENTORY', 'ADD NEW PRODUCT', 'EXIT'). The choice will being the user through a series of prompts. if the process is successful it will restart the program. 

# Tutorial: 

### Customer Experience:
* Step 1: Load Products
![Open Folder](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(44).png)
![Initialize Customer Portal](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(45).png)
* Step 2: Pick an item
![Pick an Item](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(46).png) 
* Step 3: Enter the amount
![Enter Amount](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(47).png)
* Step 4: Confirmation or rejection- start over 
![Confirm](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(48).png)


### Manager Experience 
* Step 1: Initialize and Make a Choice
![Initialize](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(52).png)
![Make a Choice](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(53).png)
* Step 2: Answer any prompts 
![Prompt Example](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(55).png)
* Step 3: Reap the rewards
* View all Products: 
![View All Display](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(54).png)
* Add Inventory: 
![Add Inventory](https://github.com/lmd808/bamazon/blob/master/images/Screenshot%20(56).png)

#### note that not all of the function in the manager experience file are complete.  
## Link to Repo: 
https://github.com/lmd808/bamazon 

## Technologies 
javascript, node.js, inquirer npm package, mysql npm package,

# Created by 
Laura DiTommaso [GitHub](github.com/lmd808)


