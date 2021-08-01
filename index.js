import PhoneInput from 'react-phone-number-input/input'
const inquirer = require("inquirer")
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTMLCSS = require('./dist/generateHTLMCSS');


************
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
    {
        type: 'list',
        name: 'membersRole',
        message: 'Please select Employee\'s Role: (Required)',
        choices: ['Manger', 'Engineer', 'Intern'],
        default: 'Engineer'
    }
]
const EngineerQuestions = [
    {
        type: 'input',
        name: 'membersGitHub',
        message: 'What is the Engineer\'s gitHub account name (Required)',
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
        message: 'What is the Employee\'s ID  (Required)',
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
        message: 'Enter the Employee\'s email address (Required)',
        validate: instalationInput => {
            if (instalationInput) {
                return true;
            } else {
                console.log('Please enter the Employee\'s email address!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'membersRole',
        message: 'Please select Employee\'s Role (Required)',
        choices: ['Manger', 'Engineer', 'Intern']
    }
]




*******

function Example() {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()
    // If `country` property is not passed
    // then "International" format is used.
    // Otherwise, "National" format is used.
    return (
      <PhoneInput
        country="US"
        value={value}
        onChange={setValue} />
    )
  }
