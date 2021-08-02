const inquirer = require("inquirer")
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./dist/generateHTLM');
const generateCSS = require('./dist/generateCSS');
const { property } = require("lodash");

const members = []

//************
const startQuestions = [
    {
        type: 'list',
        name: 'membersRole',
        message: 'Please select Employee\'s Role: (Required)',
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Engineer'
    }
]
const membersQuestions = [
    {
        type: 'input',
        name: 'membersName',
        message: 'What is the Employee\'s Name? - (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the Employee\'s Name!');
                return false;
            }
        }
     },
     {
        type: 'input',
        name: 'membersId',
        message: 'What is the Employee\'s ID? - (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter the Employee\'s ID!');
                return false;
            }
        }
     },
    {
        type: 'input',
        name: 'membersEmail',
        message: 'Enter the Employee\'s email address? - (Required)',
        validate: instalationInput => {
            if (instalationInput) {
                return true;
            } else {
                console.log('Please enter the Employee\'s email address!');
                return false;
            }
        }
    },
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'membersGitHub',
        message: 'What is the Engineer\'s gitHub account name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the Employee\'s gitHub account name!');
                return false;
            }
        }
     }
]
const internQuestions = [
    {
        type: 'input',
        name: 'membersSchool',
        message: 'What is the Intern\'s school name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the Intern\'s school name!');
                return false;
            }
        }
     }
]
const managersQuestions = [
    {
        type: 'input',
        name: 'membersPhone',
        message: 'What is the Manager\'s phone number? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the Manager\'s phone number!');
                return false;
            }
        }
     }
]

// function askQuestions() {
//     await inquirer.prompt(membersQuestions)
//     .then(response => {
//         if (response.membersRole === 'Manger') {
//            //console.log(response.membersRole);
//            new Manager(response.membersName, response.membersId, response.membersEmail, {
//                inquirer
//                .prompt(managersQuestions).then(roleResponse => {
//                 return roleResponse.membersPhone;
//                })}
//            )
//         }if (response.membersRole === 'Engineer'){
//            //console.log(response.membersRole);
//             inquirer.prompt(engineerQuestions)
//             .then(roleResponse => {
//                 console.log(roleResponse.membersGitHub);
//             })
//         }if (response.membersRole === 'Intern'){
//             //console.log(response.membersRole);
//             inquirer.prompt(internQuestions)
//             .then(roleResponse => {
//                 console.log(roleResponse.membersSchool);
//             })
//         }
//     });
    
// };

function getNumber() {
    inquirer.prompt(managersQuestions)
    .then(answer => {
        return answer.membersPhone 
    })
};

function getSchool() {
    inquirer.prompt(internQuestions)
    .then(answer => {
        return answer.membersPhone 
    })
};

function getHubInfo() {
    inquirer.prompt(engineerQuestions)
    .then(answer => {
        return answer.membersPhone 
    })
};

function init() {
    //Make file
     fs.writeFileSync('./index.html', generateHTML(), err => {
        if (err) {
          reject(err);
          return;
        }
    });
    //ask Type of Role
    inquirer.prompt(startQuestions)
    .then(response => {
        if (response.membersRole === 'Manager') {
            inquirer.prompt(membersQuestions)
            .then(data => {
                let manager = new Manager(data.membersName, data.membersId, data.membersEmail, getNumber())
            })
        } else if (response.membersRole === 'Intern') {
            inquirer.prompt(membersQuestions)
            .then(data => {
                let intern = new Intern(data.membersName, data.membersId, data.membersEmail, getSchool())
            })
        } else if (response.membersRole === 'Engineer') {
            inquirer.prompt(membersQuestions)
            .then(data => {
                let engineer = new Engineer(data.membersName, data.membersId, data.membersEmail, getHubInfo())
            })
        } else {
            console.log("Something is not right");
        }
    })
}

init()
