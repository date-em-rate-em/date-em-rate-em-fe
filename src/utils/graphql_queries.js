import { gql } from "@apollo/client";

export const CLIENT_DATA_QUERY = gql `
  query {
    allClients {
      id
      email
      averageRating
      reviews {
          createdAt
          id
          clientId
          userId
          rating
          safetyMeter
          body
          extendedBody
          title
          size
          payment
          kindness
          vibe
          dateAgain
          gender
      }
    }
  }
`;

export const USER_DATA_QUERY = gql `
  query {
    allUsers {
      id
      email
    }
  }
`;