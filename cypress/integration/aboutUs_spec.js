import { aliasQuery } from "../utils/graphql-test-utils";

describe('About Us View', () => {
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
         cy.get('button').contains('About Us')
         .click()
         cy.get('.about-us-section')
         .location("pathname")
         .should("eq", "/about-us")
    });
  
    it('When the page is visited, you should see a header', () => {
        cy.get('img').should("have.class", "logo")
      });


      it('When the page is visited, you should see a section with text describing the application', () => {
        cy.get('.about-us-section')
        cy.get('.about-us-text').contains('ClienTell is focused on providing sex-workers a platform to offer feedback about the dates they’ve been on in order to share with their fellow sex-worker communities. ')
      });

  });