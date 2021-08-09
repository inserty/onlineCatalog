
/// <reference types="cypress" />

describe('Login page', () => {

  before(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('should render username input', () => {
    cy.get('#login')
  })

  it('should render password input', () => {
    cy.get('#password')
  })

  it('should render login button', () => {
    cy.get('#loginButton').last().should('have.text', 'Log in')
  })

})