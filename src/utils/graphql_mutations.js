import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
    mutation (
        $userId: Int!, 
        $clientEmail: String!, 
        $rating: Int!, 
        $safetyMeter: Int!, 
        $title: String!,
        $body: String!,
        $extendedBody: String!,
        $size: Float!,
        $payment: Int!,
        $kindness: Int!,
        $vibe: Int!,
        $dateAgain: Boolean!,
        $gender: String!
        ) {
    reviewCreate(input: {
        userId: $userId, 
        clientEmail: $clientEmail, 
        rating: $rating, 
        safetyMeter: $safetyMeter, 
        title: $title,
        body: $body,
        extendedBody: $extendedBody,
        size: $size,
        payment: $payment,
        kindness: $kindness,
        vibe: $vibe,
        dateAgain: $dateAgain,
        gender: $gender
    }) {
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
