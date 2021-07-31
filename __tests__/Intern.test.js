const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Sam', 22, 'sam@gmail.com', "CWRU");
  
    expect(intern.name).toBe('Sam');
    expect(intern.id).toEqual(22);
    expect(intern.email).toEqual('sam@gmail.com');
    expect(intern.school).toEqual('CWRU')

  //name
  //id
  //email
  });

  