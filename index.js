const inquirer = require("inquirer");
const consoleTable = require("console.table");
const Queries = require("./Queries");

const options = [
    {
        type: "list",
        message: "Please select from the list what would you like to do:",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Start over"
        ],
        name: "optionSelection",
    },
];

function init() {
    askPromptQuestions();
}