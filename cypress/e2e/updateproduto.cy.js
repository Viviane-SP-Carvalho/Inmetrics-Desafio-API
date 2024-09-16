const { createFakeUser } = require("../support/helpers");

const FormData = require('form-data');

describe('API Update Product Image', () => {
  const urlBase = 'https://www.advantageonlineshopping.com/';

  let authToken;
  let userId; 
  let loginData;
  before(() => {
    loginData = createFakeUser();
    cy.registerUser(loginData).then(() => {
      cy.loginUser(loginData).then((response) => {
        authToken = response.body.statusMessage.token;
        userId = response.body.statusMessage.userId;
      });
    })
  });

  it.skip('Deve fazer upload de uma imagem para o produto', () => {
    cy.fixture('tableet.jpg', 'binary').then((imageData) => {
      const blob = Cypress.Blob.binaryStringToBlob(imageData, 'image/jpg');
      let formData =  new FormData();
      formData.append('image', blob, 'tableet.jpg')
      cy.request({
        method: 'PUT',
        url: `${urlBase}catalog/api/v1/product/image/${userId}/default/414141?product_id=18`,
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': multipart/form-data,
          accept: 'application/json',
        },
        body:formData,
        encoding: 'binary', 
      }).then((response) => {    
        expect(response.status).to.eq(200);
      });
    });
  });
});
