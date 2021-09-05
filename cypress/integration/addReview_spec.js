import { aliasClientsQuery, aliasMutation } from "../utils/graphql-test-utils";

const newClientReviewMutation = `
mutation {
  allClients: [
    {
    "id": "1",
    "email": "firstClient@email.com",
    "createdAt": "2021-09-02T22:45:53Z",
    "updatedAt": "2021-09-02T22:45:53Z",
    "averageRating": 5,
    "averageSafetyMeter": 7.0,
    "averageSize": 3.0,
    "averageHygiene": null,
    "averageDuration": null,
    "reviews": [
    {
    "body": "This was a fine date.",
    "clientId": 14,
    "condoms": "Was very willing to use a condom.",
    "createdAt": "2021-09-05T02:40:24Z",
    "dateAgain": "Yes",
    "duration": 2,
    "gender": "Didn't Ask",
    "hygiene": 2,
    "id": "40",
    "payment": 2,
    "punctuality": "Showed up a little early, but waited.",
    "rating": 3,
    "safetyMeter": 10,
    "size": 2,
    "updatedAt": "2021-09-05T02:40:24Z",
    "userId": 1,
    "vibe": 2
    }
  ]
  }
  ]
}`

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

    it('When the page is visited, you should have a safety meter slider', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('#safetyMeter')
        .click()
      });

      it('When the page is visited, you should be able to fill out required info', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('textarea').type('This was an ok date.')
        cy.get('#star2')
        .click()
        cy.get('#safetyMeter[type=range]')
        .invoke('val', 2)
      });

      it('When the page is visited, you should be able to fill out required info', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('textarea').type('This was an ok date.')
        cy.get('#star2')
        .click()
        cy.get('#safetyMeter[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#size[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#payment[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#kindness[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#vibe[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#submitBtn')
        .click()
      });

      it.only('When the page is visited, you should be able to fill out required info', () => {
        cy.get('.review-form')
        cy.get('.required-container')
        cy.get('textarea').type('This was a fine date.')
        cy.get('#star3')
        .click()
        cy.get('#dateAgain').select('Yes')
        cy.get('#safetyMeter[type=range]')
        .invoke('val', 10)
        .trigger('change', { data: 10 })
        cy.get('#gender[type=text]')
        .invoke('val', "Didn't Ask")
        .trigger('change', { data: "Didn't Ask" })
        cy.get('#dateDuration[type=number]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#size[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#payment[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#vibe[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#hygiene[type=range]')
        .invoke('val', 2)
        .trigger('change', { data: 2 })
        cy.get('#condomUsage[type=text]')
        .invoke('val', "Was very willing to use a condom.")
        .trigger('change', { data: "Was very willing to use a condom." })
        cy.get('#punctuality[type=text]')
        .invoke('val', "Showed up a little early, but waited.")
        .trigger('change', { data: "Showed up a little early, but waited." })
        cy.request({
          url:  'https://date-em-rate-em-be.herokuapp.com/graphql',
          method: 'POST',
          body: {newClientReviewMutation },
        })
        cy.get('#submitBtn').click()
      });


   
  });