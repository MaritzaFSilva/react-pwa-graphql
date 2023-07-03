import { gql, useQuery } from "@apollo/client";
import { Person } from "../@types/person";

const GET_PERSONS_QUERY = gql`
    query Persons($search: String) {
        list(search: $search) {
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
    search?: string;
}

export function usePersonsQuery(variables: PersonParams) {
    return useQuery<{ list: Person[] }, PersonParams>(GET_PERSONS_QUERY, {
        variables,
    });
}
