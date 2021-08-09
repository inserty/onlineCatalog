
/// <reference types="cypress" />

describe('Online catalog', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('render list of products', () => {
    cy.get('#productList')
  })
  
  it('should render login button', () => {
    cy.get('#loginButton').last().should('have.text', 'Log in')
  })

  it('should render search input', () => {
    cy.get('#productSearchInput')
  })

  it('should render active check box', () => {
    cy.get('#activeCheckbox')
  })

  it('should render promo check box', () => {
    cy.get('#promoCheckbox')
  })

  it('get active product', () => {
    cy.get('#activeCheckbox').find('[type="checkbox"]').check({force: true})
  })

  it('get promo product', () => {
    cy.get('#promoCheckbox').find('[type="checkbox"]').check({force: true})
  })

  it('get active and promo product', () => {
    cy.get('[type="checkbox"]').check({force: true})
  })

})