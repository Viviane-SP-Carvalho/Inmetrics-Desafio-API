const { faker } = require('@faker-js/faker');
const { createFakeUser } = require('../support/helpers');

describe('API User Creation and Login', () => {
  let authToken;
  let userData

  before(() => { 
    userData = createFakeUser()
  });

  it('should create a user', () => {
   cy.registerUser(userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.response.reason).to.equal('New user created successfully.');
      expect(response.body.response.success).to.equal(true);
    });
  });

  it('should log in and get auth token', () => {
    const loginData = {
      email: userData.email,
      password: userData.password,
      loginName: userData.loginName
    }
    
   cy.loginUser(loginData).then((response) => {
      expect(response.status).to.eq(200);
      authToken = response.body.token; 
    });
  });
});