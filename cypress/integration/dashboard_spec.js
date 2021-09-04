import { aliasClientsQuery } from "../utils/graphql-test-utils";
// import { aliasUserQuery } from "../utils/graphql-test-utils";

describe('Dashboard View', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://date-em-rate-em-be.herokuapp.com/graphql',
        (req) => {
            //Queries
          aliasClientsQuery(req, 'Clients');
        });
  
      cy.visit('http://localhost:3000/');
    });
  
    it('When the page is visited, you should see a header', () => {
      cy.get('h1').contains("ClienTell")
    });

    it('When the page is visited, you should see a welcome message', () => {
        cy.get('h2').contains("Welcome")
      });
      
   it('When the page is visited, you should see a featured client', () => {
        cy.get('h3').contains("Featured")
      });

   it('When the page is visited, you should see a highly rated client', () => {
        cy.get('h3').contains("Highly")
      });

   it('When the page is visited, you should see a low rated client', () => {
        cy.get('h3').contains("Low")
      });
  
  });