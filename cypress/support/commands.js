const urlBase = 'https://www.advantageonlineshopping.com';

Cypress.Commands.add('registerUser', (userData) => {
  cy.request({
    method: 'POST',
    url: `${urlBase}/accountservice/accountrest/api/v1/register`,
    body: userData,
    headers: {
      'Content-Type': 'application/json'
    }
  })
})

Cypress.Commands.add('loginUser', (loginData) => {
  cy.request({
    method: 'POST',
    url:`${urlBase}/accountservice/accountrest/api/v1/login`,
    body: {
      email: loginData.email,
      loginPassword: loginData.password,
      loginUser: loginData.loginName
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
})

Cypress.Commands.add('getProducts', (productName) => {
  cy.request({
    method: 'GET',
    url: `${urlBase}/catalog/api/v1/products/search`,
    qs: { name: productName } 
  })
})