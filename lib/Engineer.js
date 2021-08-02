const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, specialData) {
        super(name, id, email, specialData)
        this.role = "Engineer";
        this.specialInfo = "GitHub:";
        this.icon = "fa-glasses"
    }
    getGithub() {
        let a = '<a href="https://github.com/';
        let b = '">';
        let c = "</a>"
        let d = a + this.specialData + b + this.specialData + c;
        //console.log(d);
        return d;
    }
    getRole() {
        return this.role;
    }


}

module.exports = Engineer;