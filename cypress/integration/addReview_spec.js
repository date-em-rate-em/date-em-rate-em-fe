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