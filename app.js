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
        viewOptions();
})
}

function viewAllRoles(){
    connection.query("SELECT role.id, role.title, role.salary FROM role ORDER by role.id", function(err, res){
        if(err) throw err;
        console.table(res);
        viewOptions();
})
}
function viewAllDepartments(){
    connection.query("SELECT department.id, department.name FROM department ORDER by department.id", function(err, res){
        if(err) throw err;
        console.table(res);
        viewOptions();
})
}
function addNewEmployee(){
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the first name of the employee you would like to add?"
            },
            {
            
                name: "last_name",
                type: "input",
                message: "What is the last name of the employee you would like to add?"
        
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the role of the employee you would like to add?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                },
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is the name of the manager of the employee you would like to add?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                },
            },
        ])
        .then(function(answer) {
            connection.query("INSERT INTO employee SET ?",
            {
                first_name: answer.first_name, 
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id
            }, function(err){
                if(err) throw err;
                console.log("yay!");
                viewOptions();
            }
        )
        })

};
function updateEmployee(){
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the first name of the employee you would like updated?"
            },
            {
            
                name: "last_name",
                type: "input",
                message: "What is the last name of the employee you would like updated?"
        
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the role of the employee you would like updated?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                },
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is the name of the manager of the employee you would like updated?"
            },
        ])
        .then(function(answer) {
            connection.query("UPDATE employee SET ?",
            {
                first_name: answer.first_name, 
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id
            }, function(err){
                if(err) throw err;
                console.log("yay!");
                viewOptions();
            }
        )
        })

};