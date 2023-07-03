import { QueryResult } from "@apollo/client";
import AppError from "./Error";
import { Loading } from "./Loading";
import { Empty } from "./Empty";

interface ApolloStateQuery {
    query: {
        error?: unknown;
        loading?: unknown;
        data?: unknown;
    };
    children: JSX.Element ;
}

export const ApolloStateQuery = ({ query, children }: ApolloStateQuery) => {
    if (query.error) {
        return <AppError />;
    }

    if (query.loading) {
        return <Loading />;
    }

    if (!query.data) {
        return <Empty />;
    }

    return children;
};
