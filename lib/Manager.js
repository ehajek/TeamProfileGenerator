const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getGithub() {
        return this.school;
    }
    getRole() {
        return this.role;
    }

}

module.exports = Manager;