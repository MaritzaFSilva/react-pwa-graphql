import { GraphQLError } from "graphql";
import { filterByName } from "../../utils/search.js";
import { persons } from "./db.js";

interface PersonListQueryArgs {
    search?: string;
}

interface PersonQueryArgs {
    searchFriend?: string;
    _id: string;
}

export const PersonQuery = {
    list(_: undefined, filters: PersonListQueryArgs) {
        if (!filters?.search) return persons;

        return filterByName(persons, filters.search);
    },
    getPersonById(_: undefined, filters: PersonQueryArgs) {
        const person = persons.find((item) => item._id === filters._id);

        if (!person) {
            throw new GraphQLError("Person not found", {
                extensions: {
                    code: "PERSON_NOT_FOUND",
                },
            });
        }

        if (!filters?.searchFriend) return person;

        return {
            ...person,
            friends: filterByName(person.friends, filters.searchFriend),
        };
    },
};
