describe('API Product Search', () => {

    it('should search for a product and validate results', () => {
      cy.getProducts('tablet').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0].products).to.have.length.greaterThan(0);
        response.body[0].products.forEach((product) => {
          expect(product.productName.toLowerCase()).to.include('tablet');
        });
      });
    });
  })