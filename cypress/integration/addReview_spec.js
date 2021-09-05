import { aliasClientsQuery, aliasMutation } from "../utils/graphql-test-utils";

describe('Add New Review View', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://date-em-rate-em-be.herokuapp.com/graphql',
        (req) => {
            //Queries
          aliasClientsQuery(req, 'Clients');

          //Mutations
          aliasMutation(req, 'Clients')
        });
  
      cy.visit('http://localhost:3000/');
      cy.get('.contact-card')    
      cy.get('h3').contains('firstClient@email.com')
         .click()
         .location("pathname")
         .should("eq", "/profile/1")
         cy.get('.add-review-btn')
         .click()
         .location("pathname")
         .should("eq", "/add-review/1")
         cy.get('.form-heading')
    });
  
    it('When the page is visited, you should see a header', () => {
      cy.get('img').should("have.class", "nav-logo")
    });

    it('When the page is visited, you should have a form container', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('.required-text').contains('Enter required information here:')
        cy.get('textarea').type('This was an ok date.')
      });

      it('When the page is visited, you should have a star rating system', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('.rating-container')
        cy.get('#star2')
        .click()
      });

    it('When the page is visited, you should have a safety meter slider', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('#safetyMeter')
        .click()
      });

      it('When the page is visited, you should be able to fill out required info', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('textarea').type('This was an ok date.')
        cy.get('#star2')
        .click()
        cy.get('#safetyMeter[type=range]')
        .invoke('val', 2)
      });

      it('When the page is visited, you should be able to fill out required info', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('textarea').type('This was an ok date.')
        cy.get('#star2')
        .click()
        cy.get('#safetyMeter[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#size[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#payment[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#kindness[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#vibe[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#submitBtn')
        .click()
      });

      it.only('When the page is visited, you should be able to fill out required info', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('textarea').type('This was an ok date.')
        cy.get('#star2')
        .click()
        cy.get('#safetyMeter[type=range]')
        .invoke('val', 10)
        .trigger('change', { data: 10 })
        // cy.get('#size[type=range]')
        // .trigger('mousedown')
        // .trigger('mousemove', 0, 10, { which: 3 })
        // .trigger('mouseup')
        // cy.get('#payment[type=range]')
        // .trigger('mousedown')
        // .trigger('mousemove', 0, 10, { which: 4 })
        // .trigger('mouseup')
        // cy.get('#kindness[type=range]')
        // .trigger('mousedown')
        // .trigger('mousemove', 0, 10, { which: 6 })
        // .trigger('mouseup')
        // cy.get('#vibe[type=range]')
        // .trigger('mousedown')
        // .trigger('mousemove', 0, 10, { which: 6 })
        // .trigger('mouseup')
        cy.get('#submitBtn').click({ force: true })
      });

      // .trigger('mousedown', { which: 1 }, { force: true })
      // .trigger('mousemove', 881, 288, { force: true })
      // .trigger('mouseup')


    // it('When the page is visited, you should be able to fill out the form', () => {
    //     // cy.get('input').contains('body')
    //     // cy.get('input[type='submit']')
    //   });

    //   it('When the page is visited, you should see a header', () => {
    //     cy.get('img').should("have.class", "nav-logo")
    //   });

    //   it('When the page is visited, you should see a header', () => {
    //     cy.get('img').should("have.class", "nav-logo")
    //   });

   
  });