/// <reference types="cypress" />

describe('Searchbox test', function() {
    before(() => {
        cy.visit('https://www.service.nsw.gov.au/')
    })
    it('Should type into searchbox and submit', () => {
        cy.contains('Search').type('Apply for a number plate{enter}')
        cy.get('h2').should('contain.text', 'Apply for a number plate')
        cy.get('a').should('contain.text', 'number plates')
    });
    // it('Should show search result page', () => {
    //     cy.get('h2').should('contain.text', 'Apply for a number plate')
    //     cy.get('a').should('contain.text', 'number plates')
    // });
})