import { aliasQuery } from "../utils/graphql-test-utils";

describe('Dashboard View', () => {
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
    });
  
    it('When the page is visited, you should see a header', () => {
      cy.get('img').should("have.class", "logo")
    });

    it('When the page is visited, you should see a welcome message', () => {
        cy.get('h2').contains("Welcome")
      });
      
    it('When the page is visited, you should have a home button', () => {
          cy.get('button').contains('Home')
        });
        
    it('When the page is visited, you should have a search clients button that directs you to that page', () => {
            cy.get('button').contains('Search Clients')
            .click()
            cy.get('.search-view')
            .location("pathname")
            .should("eq", "/search")
        });
        
     it('When the page is visited, you should have an add client button that takes you to a form', () => {
            cy.get('button').contains('Add Client')
            .click()
            .location("pathname")
            .should("eq", "/new-client-form")
            cy.get('.form-heading')
        });
        
    it('When the page is visited, you should have a resources button that leads you to a resources page', () => {
            cy.get('button').contains('Resources')
            .click()
            .location("pathname")
            .should("eq", "/resources")
            cy.go('back')
        });
        
    it('When the page is visited, you should see a low rated client', () => {
              cy.get('h3').contains("Lowest Rated Client")
          });
          
    it('When the page is visited, you should see a featured client', () => {
               cy.get('h3').contains("Featured")
             });
  
    it('When the page is visited, you should be able to click on a client card', () => {
            cy.get('.contact-card')    
             cy.get('h3').contains('firstClient@email.com')
                .click()
                .location("pathname")
                .should("eq", "/profile/1")
            cy.get('.client-profile')
              });

    it('When the page is visited, you should have a quick exit button that opens a new window', () => {
      cy.get('.exit-btn')
      .click()
  });
            
  });