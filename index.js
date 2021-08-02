const inquirer = require("inquirer")
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = require('./dist/generateHTLM');
const generateCSS = require('./dist/generateCSS');
const { property } = require("lodash");
const generateFinishHTML = require('./dist/generateFinishHTML')
const generateMembers = require('./dist/generateMembers');
const { assertNewExpression } = require("@babel/types");


//************
const startQuestions = [
    {
        type: 'list',
        name: 'membersRole',
        message: 'Please select Employee\'s Role: (Required)',
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Manager'
    }
]
const membersQuestions = [
    {
        type: 'input',
        name: 'membersName',
        message: 'What is the Employee\'s Name? - (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
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
                return true
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
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
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
                return true
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
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
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
        message: 'What is the Manager\'s phone number? - (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter the Manager\'s phone number!');
                return false;
            }
        }
     }
]

 function getNumber() {
    inquirer.prompt(managersQuestions)
    .then(answer => {
 //       if (answer.membersPhone = true){
        console.log(answer.membersPhone)
        return answer.membersPhone 
        })
}

async function getSchool() {
    await inquirer.prompt(internQuestions)
    .then(answer => {
//        if (answer.membersSchool = true) {
            return answer.membersSchool
        })
    }

async function getHubInfo() {
    await inquirer.prompt(engineerQuestions)
    .then(answer => {
 //       if (answer.membersGitHub = true) {
            return answer.membersGitHub
        })
    }

async function askQuestions() {
   await inquirer.prompt(await startQuestions)
    .then(async response => {
        if (response.membersRole === 'Manager') {
            await inquirer.prompt(membersQuestions)
            .then(async data => {
                let manager = new Manager(data.membersName, data.membersId, data.membersEmail, await getNumber())
                fs.appendFileSync('./index.html', generateMembers(manager), err => {
                    if (err) {
                      reject(err);
                      return;
                    }
                })
            });
        } else if (response.membersRole === 'Intern') {
            await inquirer.prompt(membersQuestions)
            .then(async data => {
                let intern = new Intern(data.membersName, data.membersId, data.membersEmail, (await getSchool()))
                fs.appendFileSync('./index.html', generateMembers(intern), err => {
                    if (err) {
                      reject(err);
                      return;
                    }
                })
            });
        } else if (response.membersRole === 'Engineer') {
            await inquirer.prompt(membersQuestions)
            .then(async data => {
                let engineer = new Engineer(data.membersName, data.membersId, data.membersEmail, (await getHubInfo()))
                fs.appendFileSync('./index.html', generateMembers(engineer), err => {
                    if (err) {
                      reject(err);
                      return;
                    }
                })
            });
        } else {
            console.log("Something is not right");
        };

    })
    await inquirer.prompt([
        {
            type: 'list',
            name: 'AddMore',
            message: 'Would you like to add more Employees - (Required)',
            choices: ['Yes', 'No'],
            default: 'No',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please select if you are adding more Employees!');
                    return false;
                }
            }

        }
    ])
    .then(async answer => {
        if (answer.AddMore === 'Yes') {
            await askQuestions()
        } else {
            return console.log("No more Employees to add.");
        }

        });
    
}

async function init() {
    //Make file
    await fs.writeFileSync('./index.html', generateHTML(), err => {
        if (err) {
          reject(err);
          return;
        }
    });
    await fs.writeFileSync('./style.css', generateCSS(), err => {
        if (err) {
          reject(err);
          return;
        }
    });
    await askQuestions()
    // await inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'AddMore',
    //         message: 'Would you like to add more Employees - (Required)',
    //         choices: ['Yes', 'No'],
    //         default: 'No',
    //         validate: descriptionInput => {
    //             if (descriptionInput) {
    //                 return true
    //             } else {
    //                 console.log('Please select if you are adding more Employees!');
    //                 return false;
    //             }
    //         }

    //     }
    // ])
    // .then(async answer => {
    //     if (answer.AddMore === 'Yes') {
    //         await askQuestions()
    //     } 
    //     console.log("Your HTML Page has been built!");
    //     console.log("The application has ended.")
    //     });
    console.log("Your HTML Page has been built!");
    console.log("The application has ended.")

}

init()
