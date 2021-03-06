const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager('Jill', 101, 'jill@gmail.com', "440-216-0000");
  
    expect(manager.name).toBe('Jill');
    expect(manager.id).toEqual(101);
    expect(manager.email).toEqual('jill@gmail.com');
    expect(manager.specialData).toEqual('440-216-0000')
    expect(manager.role).toEqual('Manager')

  //name
  //id
  //email
  });

  