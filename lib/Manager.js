const inquirer = require("inquirer")
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
        this.role = "Manager";
    }
    getOfficeNum() {
        inquirer.prompt(managersQuestions)
        .then(answer => {
            console.log(answer.membersPhone)
            return answer.membersPhone 
        })
    }
    getRole() {
        return this.role;
    }
}

// Manager.prototype.officeNum = function() {
//     inquirer.prompt(managersQuestions)
//     .then(answer => {
//         console.log(answer.membersPhone)
//         return answer.membersPhone
//     })
//}

module.exports = Manager;