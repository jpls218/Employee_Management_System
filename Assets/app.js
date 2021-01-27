const inquirer = require('inquirer');
const logo = require('asciiart-logo');
// const db = require('./db');
require("console.table");



function init() {
    const logoText = logo({ name: "Jonathan's Employee Manager"}).render();
    console.log(logoText);
}
init();
// function start() {
//     inquirer
//         .prompt([
//             {
//                 name: "item",
//                 type: "list",
//                 message: "What would you like to do?",
//                 choices: ['VIEW', 'ADD', 'UPDATE', 'EXIT']
//             }
//         ])
//         .then(function(answer) {
//             switch (answer.item) {
//                 case 'VIEW': 
//                     return viewDepartments();
                    
//                 case 'ADD':
//                     return addDepartments();

//                 case 'UPDATE':
//                     return updateDepartments();
                    
//                 case 'EXIT':
//                     return connection.end();
//             }
            
//         })
// };

// function viewDepartments(){
//     connection.query("SELECT * FROM employees", function(err, res){
//         if(err) throw err;
//         console.table(res);
//         connection.end();
// }

// function addDeparments(){
    
//     inquirer
//         .prompt([
//             {
//             name: "choice",
//             type: "rawlist",
//             choices: function() {
//                 var choiceArray = [];
//                 for (var i = 0; i < results.length; i++) {
//                     choiceArray.push(results[i].item_name);
//                 }
//                 return choiceArray;
//             },
//             message: "What auction would you like to bid on?"
//             },
//             {
//             name: "item",
//             type: "input",
//             message: "How much would you like to bid?",
//             validate: function(value) {
//                 if (isNaN(value) === false) {
//                     return true;
//                 }
//             }
//             }
//         ])
//         .then(function(answer) {
//             connection.query(
//                 "UPDATE auctions SET highest_bid=?",
                
//                     [answer.item],
                
//                 function(err) {
//                     if (err) throw err;
//                     console.log("Your bid was created successfully!");
//                     start();
//                 }
//             )
//         })

// }

// function postAuction() {
//     inquirer
//         .prompt([
//             {
//                 name: "item",
//                 type: "input",
//                 message: "What is the item you would like to submit?"
//             },
//             {
            
//                 name: "category",
//                 type: "input",
//                 message: "What category would you like to place your item in?"
        
//             },
//             {
//                 name: "startingBid",
//                 type: "input",
//                 message: "What would you like your starting bid to be?",
//                 validate: function(value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                 },
//             }
//         ])
//         .then(function(answer) {
//             connection.query(
//                 "INSERT INTO auctions SET ?",
//                 {
//                     item_name: answer.item,
//                     category: answer.category,
//                     starting_bid: answer.startingBid || 0,
//                     highest_bid: answer.startingBid || 0
//                 },
//                 function(err) {
//                     if (err) throw err;
//                     console.log("Your auction was created successfully!");
//                     start();
//                 }
//             )
//         })
// }