const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, specialData) {
        super(name, id, email, specialData)
        this.role = "Engineer";
        this.specialInfo = "GitHub:";

    }
    getGithub() {
        return this.gitHubUser;
    }
    getRole() {
        return this.role;
    }


}

module.exports = Engineer;