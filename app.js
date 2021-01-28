const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const connection = require('./db/connection');
require("console.table");



function init() {
    const logoText = logo({ name: "Jonathan's Employee Manager"}).render();
    console.log(logoText);
    viewOptions();
}
init();
function viewOptions() {
    inquirer
        .prompt([
            {
                name: "item",
                type: "list",
                message: "What would you like to do?",
                choices: ['View all Employees', 'View all Roles', 'View all Departments', 'Add New Employee', 'Add New Role', 'Add New Department', 'Update Employee', 'Exit']
            }
        ])
        .then(function(answer) {
            switch (answer.item) {
                case 'View all Employees': 
                    return viewAllEmployees();
                    
                case 'View all Roles':
                    return viewAllRoles();

                case 'View all Departments':
                    return viewAllDepartments();
                
                case 'Add New Employee':
                    return addNewEmployee();

                case 'Add New Role':
                    return addNewRole();

                case 'Add New Department':
                    return addNewDeparment();

                case 'Update Employee':
                    return updateEmployee();
                    
                case 'EXIT':
                    return connection.end();
            }
            
        })
};

function viewAllEmployees(){
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
}

function viewAllRoles(){
    connection.query("SELECT role.id, role.title, role.salary FROM role ORDER by role.id", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
}
function viewAllDepartments(){
    connection.query("SELECT department.id, department.name FROM department ORDER by department.id", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
function addNewEmployee(){
    connection.query("INSERT INTO employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id INTO employee", function(err, res){
        if(err) throw err;
        console.table(res);
        connection.end();
})
}
}
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
// 