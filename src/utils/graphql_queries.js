import { gql } from "@apollo/client";

export const CLIENT_DATA_QUERY = gql `
  query {
    allClients {
      id
      email
      createdAt
      updatedAt
      averageRating
      averageSafetyMeter
      averageSize
      averagePayment
      averageHygiene
      averageDuration
      reviews {
        id
        clientId
        userId
        rating
        safetyMeter
        body
        size
        payment
        vibe
        dateAgain
        gender
        hygiene
        duration
        punctuality
        condoms
        createdAt
        updatedAt
      }
    }
  }
`;

export const USER_DATA_QUERY = gql `
  query {
    allUsers {
        id
        email
        createdAt
        updatedAt
        reviews {
        id
        clientId
        userId
        rating
        safetyMeter
        body
        size
        payment
        vibe
        dateAgain
        gender
        hygiene
        duration
        punctuality
        condoms
        createdAt
        updatedAt
        }
     }
    }
`;

