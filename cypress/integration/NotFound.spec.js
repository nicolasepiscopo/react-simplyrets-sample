describe('Not found page', () => {
  before(() => {
    cy.visit('http://localhost:3000/some-inexistent-page');
  });

  it('Shows error message', function () {
    cy.get('h1').should('be.visible').and('have.text', '😢 Page not found');
  });
});
