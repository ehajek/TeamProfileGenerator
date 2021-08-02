const inquirer = require("inquirer")
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, specialData) {
        super(name, id, email, specialData)
        this.role = "Manager";
        this.specialInfo = "Office Number:";
        this.icon = "fa-mug-hot"
    }
    getOfficeNum() {
        return this.specialData;
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