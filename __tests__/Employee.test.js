const Employee = require('../lib/Employee.js');


test('creates an Employee object', () => {
    const employee = new Employee('Bob', 12, 'bob@gmail.com');
  
    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(12);
    expect(employee.email).toEqual('bob@gmail.com');
  //name
  //id
  //email
  });