import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
    mutation (
        $userId: ID!, 
        $clientEmail: String!, 
        $rating: Int!, 
        $safetyMeter: Int!,
        $body: String!,
        $size: Float!,
        $payment: Int!,
        $kindness: Int!,
        $vibe: Int!,
        $dateAgain: String!,
        $gender: String!
        ) {
    reviewCreate(
        userId: $userId, 
        clientEmail: $clientEmail, 
        rating: $rating, 
        safetyMeter: $safetyMeter, 
        body: $body,
        size: $size,
        payment: $payment,
        kindness: $kindness,
        vibe: $vibe,
        dateAgain: $dateAgain,
        gender: $gender
    ) {
        review {
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
