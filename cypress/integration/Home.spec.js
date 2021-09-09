// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Home page', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.clearLocalStorage();
  });

  it('Shows right header text', function () {
    cy.get('[data-testid=header]')
      .should('be.visible')
      .and('have.text', 'Property Listings');
  });

  it('Changes favorite icon from stroke to fill and back', function () {
    cy.wait(500);

    const favoriteButtonSelector = '[data-testid=property0] button';
    const favoriteImgSelector = `${favoriteButtonSelector} > img`;

    cy.get(favoriteImgSelector)
      .should('be.visible')
      .and('have.attr', 'src')
      .should('include', 'heart-stroke');

    cy.get(favoriteButtonSelector).click({ force: true });

    cy.wait(100);

    cy.get(favoriteImgSelector)
      .should('be.visible')
      .and('have.attr', 'src')
      .should('include', 'heart-fill');

    cy.get(favoriteButtonSelector).click({ force: true });

    cy.wait(100);

    cy.get(favoriteImgSelector)
      .should('be.visible')
      .and('have.attr', 'src')
      .should('include', 'heart-stroke');
  });

  it('Favorites are saved in local storage', function () {
    cy.get('[data-testid=property2] button')
      .click({ force: true })
      .should(() => {
        expect(
          (JSON.parse(localStorage.getItem('FAVORITES')) || []).length,
        ).equal(1);
      });
    cy.get('[data-testid=property3] button')
      .click({ force: true })
      .should(() => {
        expect(
          (JSON.parse(localStorage.getItem('FAVORITES')) || []).length,
        ).equal(2);
      });
    cy.get('[data-testid=property4] button')
      .click({ force: true })
      .should(() => {
        expect(
          (JSON.parse(localStorage.getItem('FAVORITES')) || []).length,
        ).equal(3);
      });
    cy.get('[data-testid=property3] button')
      .click({ force: true })
      .should(() => {
        expect(
          (JSON.parse(localStorage.getItem('FAVORITES')) || []).length,
        ).equal(2);
      });
  });
});
