import mockClients from '../fixtures/mockClients.json';
import mockUser from '../fixtures/mockUser.json';

// utils/graphql-test-utils.js

// Utility to match GraphQL mutation based on the operation name
// export const hasOperationName = (req, operationName) => {
//     const { body } = req
//     return body.hasOwnProperty('operationName') && body.operationName === operationName;
//   };

  export const hasOperationName = (req, operationName) => {
    const { body } = req;
    return body.hasOwnProperty('query') && body.query.includes(operationName);
  };
  
  // Alias query if operationName matches
  export const aliasClientsQuery = (req, operationName) => {
    if (hasOperationName(req, operationName)) {
      req.reply((res) => {
        res.body.data = mockClients;
      });
            // req.alias = `gql${operationName}Query`
    }
  };

  // export const aliasUserQuery = (req, operationName) => {
  //   if (hasOperationName(req, operationName)) {
  //     req.reply((res) => {
  //       res.body.data = mockUser;
  //     });
  //     req.alias = `gql${operationName}Query`
  //   }
  // };
  
  // Alias mutation if operationName matches
  export const aliasMutation = (req, operationName) => {
    if (hasOperationName(req, operationName)) {
      req.alias = `gql${operationName}Mutation`
    }
  }