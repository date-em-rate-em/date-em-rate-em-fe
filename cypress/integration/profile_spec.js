import { aliasQuery } from "../utils/graphql-test-utils";

describe('Profile View', () => {
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
      cy.get('.contact-card')    
      cy.get('h3').contains('firstClient@email.com')
         .click()
         .location("pathname")
         .should("eq", "/profile/1")
    });
  
    it('When the page is visited, you should see a header', () => {
      cy.get('img').should("have.class", "logo")
    });

    it('When the page is visited, you should see a client profile header', () => {
        cy.get('.client-profile')
        cy.get('h1').contains('Client Profile')
      });

    it('When the page is visited, you should see a client contact information', () => {
        cy.get('.client-profile')
        cy.get('.client-contact-info').contains('firstClient@email.com')
      });

    it('When the page is visited, you should see a client average rating', () => {
        cy.get('.client-profile')
        cy.get('.profile-stars')
      });

    it('When the page is visited, you should see a button to add a new review, taking you to a form page', () => {
        cy.get('.client-profile')
        cy.get('.add-review-btn')
        .click()
        .location("pathname")
        .should("eq", "/add-review/1")
        cy.get('.form-heading')
        cy.go('back')
      });

    it('When the page is visited, you should see a client review card listing client data', () => {
        cy.get('.client-profile')
        cy.get('.each-review')
      });

   
  });