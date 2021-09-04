import { aliasClientsQuery } from "../utils/graphql-test-utils";

describe('Profile View', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://date-em-rate-em-be.herokuapp.com/graphql',
        (req) => {
            //Queries
          aliasClientsQuery(req, 'Clients');
        });
  
      cy.visit('http://localhost:3000/');
      cy.get('.contact-card')    
      cy.get('h3').contains('firstClient@email.com')
         .click()
         .location("pathname")
         .should("eq", "/profile/1")
    });
  
    it('When the page is visited, you should see a header', () => {
      cy.get('img').should("have.class", "nav-logo")
    });

    it('When the page is visited, you should see a client profile header', () => {
        cy.get('.client-profile')
        cy.get('h1').contains('Client Profile')
      });

      it('When the page is visited, you should see a client contact information', () => {
        cy.get('.client-profile')
        cy.get('.client-contact-info').contains('firstClient@email.com')
      });
   
  });