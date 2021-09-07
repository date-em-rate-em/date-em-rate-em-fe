import { aliasQuery } from "../utils/graphql-test-utils";

describe('Search View', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://date-em-rate-em-be.herokuapp.com/graphql',
        (req) => {
            //Queries
          aliasQuery(req, 'Clients');
        });
  
        cy.visit('http://localhost:3000/');
        cy.wait('@gqlClientsQuery').then(interception => {
              expect(interception).to.be.an('object');
            });
         cy.get('button').contains('Search Clients')
         .click()
         cy.get('.search-view')
         .location("pathname")
         .should("eq", "/search")
    });
  
    it('When the page is visited, you should see a header', () => {
        cy.get('img').should("have.class", "logo")
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

    it('When the page is visited, you should be able to click on a searched client\'s profile', () => {
        cy.get('.search-view')
        cy.get('.search-bar')
        .type("second")
        cy.get('.contact-card')    
        cy.get('h3').contains('secondClient@email.com')
        .click()
        .location("pathname")
        .should("eq", "/profile/2")
        cy.get('.client-profile')

      });

  });