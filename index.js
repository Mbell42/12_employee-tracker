// Grabbing Dependencies

const inquirer = require('inquirer');
const mysql = require('mysql');
const dbConnect = require('./_db/lib/db-connect');

import { dbConnect } from "./db-connect";

// When program is run
// Connect to database
dbConnect.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);        
    }
    console.log("connected to employees_DB successfully");
    initialize();
});




// Prompt user for which action to take
// Based on user's answer, run the appropriate function,
//either viewing a table or affecting a table entry.




// FUNCTIONS
function initialize () {
    // Prompt user for which action to take
    inquirer.prompt({
        name: "menu",
        type: "rawlist",
        message: "What Would you like to do?",
        choices: [
            "View Employee Roster",
            "View Departments",
            "View Roles",
            "Add Employee",
            "Update Employee Role",
            "Exit"
        ]
    })
    // Based on which action user chooses, run the appropriate function
    .then(function(answer) {
        switch (answer.menu) {
            case "View Employee Roster":
                viewDepartment();
                break;
        }
    })
}