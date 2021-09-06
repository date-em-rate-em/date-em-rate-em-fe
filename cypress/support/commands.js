Cypress.Commands.add('apiMutation', (mutations) => {
    cy.request({
        method:'POST',
        url:'https://date-em-rate-em-be.herokuapp.com/graphql/graphql',
        body: { query : "mutation" + mutations }         
    })
})