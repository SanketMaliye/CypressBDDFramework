Cypress.Commands.add('visitPage', () => {
    cy.visit(Cypress.env('baseURL'));
  });
  
  Cypress.Commands.add('enterValueIntoField', (value, fieldLocator) => {
    cy.get(fieldLocator).type(value);
  });
  
  Cypress.Commands.add('clickButton', (buttonLocator) => {
    cy.get(buttonLocator).click();
  });
  
  Cypress.Commands.add('validateTitle', (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
  });
  