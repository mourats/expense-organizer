/* eslint-disable no-undef */
describe('My First Test', () => {
  it('Visits index page', () => {
    cy.visit('http://localhost:3000/expense-organizer');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
