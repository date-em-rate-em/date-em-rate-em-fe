import { aliasQuery } from "../utils/graphql-test-utils";

describe('Resources View', () => {
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
         cy.get('button').contains('Resources')
         .click()
         cy.get('.resources-sections')
         .location("pathname")
         .should("eq", "/resources")
    });
  
    it('When the page is visited, you should see a header', () => {
        cy.get('img').should("have.class", "logo")
      });

    it('When the page is visited, you should see a live search bar', () => {
        cy.get('.resources-search-bar')
      });

      it('When the page is visited, you should see a container of resources', () => {
        cy.get('.search-result-container')
      });

    it('When the page is visited, you should be able to search for a resource in the bar', () => {
        cy.get('.resources-search-bar')
        .type("molly")
        cy.get('button').contains('Molly House Project')    
      });

  });