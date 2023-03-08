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

function askPromptQuestions() {
    inquirer
      .prompt(options)
  
      // data = giant object (answers from input)
      .then((answers) => {
        // console.log(answers);
        // each of these will be a promise / async await
        if (answers.optionSelection === "View all departments") {
          viewAllDepartments();
        }
        if (answers.optionSelection === "View all roles") {
          viewAllRoles();
        }
        if (answers.optionSelection === "View all employees") {
          viewAllEmployees();
        }
        if (answers.optionSelection === "Add a department") {
          addDepartment();
          // not dependent upon anything else
        }
        if (answers.optionSelection === "Add a role") {
          addRole();
          // have to give user a selection of dept
          // dependent upon dept and emp
        }
        if (answers.optionSelection === "Add an employee") {
          addEmployee();
          // dependent upon role and dept
        }
        if (answers.optionSelection === "Update an employee role") {
          updateEmployeeRole();
   
        }
        if (answers.optionSelection === "Start over") {
          return askPromptQuestions();
        }
    });
}

function viewAllDepartments () {
    Queries.viewAllDepartments().then(([rows]) => {
        let departments = rows;
        console.table(departments);
        askPromptQuestions();
    });
}

function viewAllRoles () {
    Queries.viewAllRoles().then(([rows]) => {
        let roles = rows;
        console.table(roles);
        askPromptQuestions();
    });
}