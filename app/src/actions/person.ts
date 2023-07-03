import { gql, useQuery } from "@apollo/client";
import { Person } from "../@types/person";

const GET_PERSONS_QUERY = gql`
    query Person($id: ID!, $searchFriend: String) {
        getPersonById(_id: $id, searchFriend: $searchFriend) {
            _id
            name
            age
            picture
            eyeColor
            company
            email
            friends {
                _id
                name
                age
                picture
                eyeColor
                company
                email
            }
        }
    }
`;

interface PersonParams {
    searchFriend?: string;
    id: string;
}

export function usePersonQuery(variables: PersonParams) {
    return useQuery<{ getPersonById: Person }, PersonParams>(
        GET_PERSONS_QUERY,
        {
            variables,
        }
    );
}
