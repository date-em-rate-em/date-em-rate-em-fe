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
      cy.get('h2').contains("ClienTell")
    });
  
  });