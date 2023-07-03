import { gql } from "graphql-tag";

export const PersonTypeDefs = gql`
    type Friend {
        _id: ID!
        index: Int!
        picture: String!
        age: Int!
        eyeColor: String!
        name: String!
        company: String!
        email: String!
        phone: String!
    }

    type Person {
        _id: ID!
        index: Int!
        picture: String!
        age: Int!
        eyeColor: String!
        name: String!
        company: String!
        email: String!
        phone: String!
        greeting: String!
        friends: [Friend!]!
    }

    type Query {
        list(search: String): [Person!]!
        getPersonById(_id: ID!, searchFriend: String): Person!
    }
`;
