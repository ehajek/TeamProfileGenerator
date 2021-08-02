const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, specialData) {
        super(name, id, email, specialData)
        this.role = "Intern";
        this.specialInfo = "School:";
        this.icon = "fa-user-graduate"
    }
    getSchool() {
        return this.specialData;
    }
    getRole() {
        return this.role;
    }

}

module.exports = Intern;