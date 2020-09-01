console.log("Welcome to the Grocery List!");

/*
    SImple Command Line Application
    Grocery Shopping List


    1.) Load an existing json file(if it exists)
    2.)Read input from the user for new grocery items
    3.) console log the new up to date list
    4.)Save the Json
*/

//Import external modules
//Fs(File System ) is a node package for reading / wrting files to and from the computer
const fs = require("fs"); // CommonJS

const FILENAME = "grocery-list.json";

let existingGroceryList;

try {
  existingGroceryList = fs.readFileSync(FILENAME);
  console.log("you have an existing list");
} catch (error) {
  console.log("no exsiting list will create a new one.");
}

let groceryList = [];

if (existingGroceryList) {
  groceryList = JSON.parse(existingGroceryList).list;
}

console.log("Existing GroceryList:" + " " + groceryList);
//Arguments === Paramaters
const commandLineArguments = process.argv;
//console.log(commandLineArguments);

const newGroceryItems = commandLineArguments.slice(
  2,
  commandLineArguments.length
);

//console.log("newGroceryItems:" + " " + newGroceryItems);
//Add These new grocery itsm to the groceryList
//spreader operator ...newGroceryItems
//const list = [ 'Apple', 'Bananna', 'bread', 'orange', 'Nuts' ];
//...list
//=> 'Apple', 'Bananna', 'bread', 'orange', 'Nuts'

groceryList.push(...newGroceryItems);
//groceryList.push('Apple', 'Bananna', 'bread', 'orange', 'Nuts');

console.log(`Here's your up-to-date list: ${groceryList}`);

//Save the new List ot the Json File

const groceryObject = {
  list: groceryList,
};
const json = JSON.stringify(groceryObject);
fs.writeFileSync(FILENAME, json);
