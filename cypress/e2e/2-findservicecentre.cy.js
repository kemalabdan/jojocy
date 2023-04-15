/// <reference types="cypress" />

describe('Searchbox test', function() {
    before(() => {
        cy.visit('https://www.service.nsw.gov.au/')
    })
    it('Should display Mobile Service Centres page', () => {
        cy.contains('Find a mobile service centre').click()
        cy.url().should('include', 'mobile-service-centres')
        cy.get('#locatorTextSearch').type('Sydney 2000{enter}')
        cy.get('location_title').should('contain.text', 'Wallacia Mobile Service Centre')
    });
    // it('Should type into searchbox and submit', () => {
    //     cy.get('#locatorTextSearch').type('Sydney 2000{enter}')
    //     cy.get('location_title').should('contain.text', 'Wallacia Mobile Service Centre')
    // });
    // it('Should show search result page', () => {
    //     // cy.get('location_title').should('contain.text', 'Wallacia Mobile Service Centre')
    //     // cy.get('a').should('contain.text', 'number plates')
    // });
})