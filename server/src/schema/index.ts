import gql from "graphql-tag";
import { PersonQuery } from "./person/query.js";
import { PersonTypeDefs } from "./person/index.js";

export const typeDefs = gql`
    ${PersonTypeDefs}
`;

export const resolvers = {
	Query: {
		...PersonQuery,
	},
};

export const schema = {
	typeDefs,
	resolvers,
};
