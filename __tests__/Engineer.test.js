const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Frank', 36, 'frank@gmail.com', 'frankHub');
  
    expect(engineer.name).toBe('Frank');
    expect(engineer.id).toEqual(36);
    expect(engineer.email).toEqual('frank@gmail.com');
    expect(engineer.gitHubUser).toEqual('frankHub')
  //name
  //id
  //email
  //
  });