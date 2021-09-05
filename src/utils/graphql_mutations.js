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
        $vibe: Int!,
        $dateAgain: String!,
        $gender: String!,
        $hygiene: Int!,
        $duration: Int!,
        $punctuality: String!,
        $condoms: String!
        ) {
    reviewCreate(
        userId: $userId, 
        clientEmail: $clientEmail, 
        rating: $rating, 
        safetyMeter: $safetyMeter, 
        body: $body,
        size: $size,
        payment: $payment,
        vibe: $vibe,
        dateAgain: $dateAgain,
        gender: $gender,
        hygiene: $hygiene,
        duration: $duration,
        punctuality: $punctuality,
        condoms: $condoms
    ) {
        review {
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
        }
    }
  }
`;
