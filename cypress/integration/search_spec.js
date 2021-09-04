import { aliasClientsQuery } from "../utils/graphql-test-utils";

describe('Search View', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://date-em-rate-em-be.herokuapp.com/graphql',
        (req) => {
            //Queries
          aliasClientsQuery(req, 'Clients');
        });
  
      cy.visit('http://localhost:3000/');
         cy.get('button').contains('Search Clients')
         .click()
         cy.get('.search-view')
         .location("pathname")
         .should("eq", "/Search")
    });
  
    it('When the page is visited, you should see a header', () => {
        cy.get('img').should("have.class", "nav-logo")
      });

      it('When the page is visited, you should see a live search bar', () => {
        cy.get('.search-view')
        cy.get('.search-bar')
      });

      it('When the page is visited, you should be able to search for a client email in the bar', () => {
        cy.get('.search-view')
        cy.get('.search-bar')
        .type("second")
        cy.get('.contact-card')    
        cy.get('h3').contains('secondClient@email.com')
      });

  });