class Employee {
    constructor(name, id, email, specialData) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.specialData = specialData;
      this.role = "Employee";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}


module.exports = Employee;